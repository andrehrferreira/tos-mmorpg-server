import { WebSocketAdapter, Logger } from '@nestjs/common';
import { MessageMappingProperties } from '@nestjs/websockets';
import { ICreateServerArgs, ICreateServerSecureArgs } from '../interfaces/uws.interface';

import * as UWS from 'uWebSockets.js';
import { Observable, fromEvent, EMPTY } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';
import * as events from 'events';
import { ByteBuffer } from '@engine';
import { ClientPacketType } from "@enums";

export class UWSBuilder {
    static buildSSLApp(params: ICreateServerSecureArgs): UWS.TemplatedApp {
        return UWS.SSLApp({
            cert_file_name: params.sslCert,
            key_file_name: params.sslKey,
        });
    }
  
    static buildApp(params: ICreateServerArgs): UWS.TemplatedApp {
        return UWS.App();
    }
}

export class UWebSocketAdapter implements WebSocketAdapter {
    private instance: UWS.TemplatedApp = null;
    private listenSocket: any = null;
    private port: number = 0;

    constructor(args: ICreateServerArgs | ICreateServerSecureArgs) {
        this.port = args.port;
        // @ts-ignore
        if (args.sslKey) 
            this.instance = UWSBuilder.buildSSLApp(args as ICreateServerSecureArgs);
        else 
            this.instance = UWSBuilder.buildApp(args);
    }

    bindClientConnect(server: UWS.TemplatedApp, callback: Function): any {
        this.instance.ws('/*', {
            open: (socket) => {
                Object.defineProperty(socket, 'emitter', {
                    configurable: false,
                    value: new events.EventEmitter(),
                });

                const originalSend = socket.send.bind(socket);
                socket.send = (data: any, isBinary: boolean = true, compress: boolean = false): number => {
                    if (typeof data === 'string') {
                        return originalSend(data, isBinary, compress);
                    } else {
                        const arrayBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
                        return originalSend(arrayBuffer, isBinary, compress);
                    }
                };
                
                callback(socket);
            },
            message: (socket, message, isBinary) => {
                socket['emitter'].emit('message', { message, isBinary });
            },
        }).any('/*', (res, req) => {
            res.end('Nothing to see here!');
        });
    }

    bindClientDisconnect(server, callback: Function) {
        server.on('close', callback);
        server.on('disconnect', callback);
    }

    bindMessageHandlers(
        client: any, 
        handlers: MessageMappingProperties[], 
        process: (data: any) => Observable<any>
    ): any {
        fromEvent(client['emitter'], 'message')
          .pipe(
            mergeMap((data: { message: ArrayBuffer, isBinary: boolean }) => this.bindMessageHandler(data, handlers, process, client.diffPublicKey)),
            filter(result => result),
          )
          .subscribe(response => client.send(JSON.stringify(response)));
    }

    bindMessageHandler(
        bufferArr: { message: ArrayBuffer, isBinary: boolean },
        handlers: MessageMappingProperties[],
        process: (data: any) => Observable<any>,
        diffPublicKey: string | null
    ): Observable<any> {
        const buffer = Buffer.from(bufferArr.message);
        const pBuffer = ByteBuffer.toArrayBuffer(buffer);
        const encryptPacket = pBuffer[0];

        if(diffPublicKey !== null && diffPublicKey !== "" && encryptPacket === 1) {
            const dataBuffer = ByteBuffer.toArrayBuffer(buffer, 1);
            const message = new ByteBuffer(this.decryptMessage(dataBuffer, diffPublicKey));
            const type = message.getByte();

            if(type === ClientPacketType.Queue){
                const packets = ByteBuffer.splitPackets(message);

                for(let packet of packets) {
                    const typeSubpacket = packet.getByte() as ClientPacketType;

                    const messageHandler = handlers.find(
                        handler => handler.message === typeSubpacket,
                    );
            
                    if (!messageHandler) 
                        return EMPTY;
                    
                    return process(messageHandler.callback(packet));
                }
            }
            else {
                const messageHandler = handlers.find(
                    handler => handler.message === type,
                );
        
                if (!messageHandler) 
                    return EMPTY;
                
                return process(messageHandler.callback(message));
            }
        }
        else if(encryptPacket === 0){   
            const message = new ByteBuffer(ByteBuffer.toArrayBuffer(buffer, 1));
            const type = message.getByte();

            if(
                type === ClientPacketType.Ping ||
                type === ClientPacketType.Login ||
                type === ClientPacketType.LoginSteam ||                
                type === ClientPacketType.CharacterList ||
                type === ClientPacketType.FullCharacter ||
                type === ClientPacketType.EnterToWorld ||
                type === ClientPacketType.CreateCharacter
            )
            {
                const messageHandler = handlers.find(
                    handler => handler.message === type,
                );
        
                if (!messageHandler) 
                    return EMPTY;
                
                return process(messageHandler.callback(message));
            }
        } 
    }

    decryptMessage(encryptedData: Uint8Array, key: string) : Uint8Array{
        const keyBytes = new TextEncoder().encode(key);
        const decryptedBytes = new Uint8Array(encryptedData.length);
      
        for (let i = 0; i < encryptedData.length; i++) 
          decryptedBytes[i] = encryptedData[i] ^ keyBytes[i % keyBytes.length];
              
        return decryptedBytes;
    }

    close(): any {
        UWS.us_listen_socket_close(this.listenSocket);
        this.instance = null;
    }

    async create(): Promise<UWS.TemplatedApp> {
        return new Promise((resolve, reject) => this.instance.listen(this.port, (token) => {
            if (token) {
                this.listenSocket = token;
                resolve(this.instance);
            } else {
                reject('Can\'t start listening...');
            }
        }));
    }
}
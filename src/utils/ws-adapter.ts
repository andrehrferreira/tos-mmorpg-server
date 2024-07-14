import * as WebSocket from 'ws';
import { Observable, fromEvent, EMPTY } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';

import { WebSocketAdapter, INestApplicationContext, Logger } from '@nestjs/common';
import { MessageMappingProperties } from '@nestjs/websockets';
import { ByteBuffer } from '@engine';
import { ClientPacketType } from "@enums";

export class WsAdapter implements WebSocketAdapter {
    constructor(private app: INestApplicationContext) {}

    create(port: number, options: any = {}): any {
        Logger.verbose(`Create websocket server ${port}`, "Websocket");
        return new WebSocket.Server({ port, ...options });
    }

    bindClientConnect(server, callback: Function) {
        server.on('connection', callback);
    }

    bindClientDisconnect(server, callback: Function) {
        server.on('close', callback);
        server.on('disconnect', callback);
    }

    bindCustomMessageHandler(server, callback: Function){
        server.on('message', callback);
    }

    bindMessageHandlers(
        client: any,
        handlers: MessageMappingProperties[],
        process: (data: any) => Observable<any>,
    ) {
        fromEvent(client, 'message')
            .pipe(
                mergeMap(data => this.bindMessageHandler(data, handlers, process, client.diffPublicKey)),
                filter(result => result),
            )
            .subscribe(response => {
                client.send(JSON.stringify(response))
            });
    }

    bindMessageHandler(
        buffer,
        handlers: MessageMappingProperties[],
        process: (data: any) => Observable<any>,
        diffPublicKey: string | null
    ): Observable<any> {
        const dataBuffer = ByteBuffer.toArrayBuffer(buffer.data);
        const encryptPacket = dataBuffer[0];

        if(diffPublicKey !== null && diffPublicKey !== "" && encryptPacket === 1) {
            const dataBuffer = ByteBuffer.toArrayBuffer(buffer.data, 1);
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
            const message = new ByteBuffer(ByteBuffer.toArrayBuffer(buffer.data, 1));
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

    close(server) {
        server.close();
    }
}
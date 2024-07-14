import Redis from "ioredis";
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';

import { InjectRedis } from "@nestjs-modules/ioredis";
import { Logger } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

import { GUID } from "@utils";

import { 
    ClientPacketType, 
    ServerPacketType, 
    Plevel 
} from "@enums";

import { 
    WebSocketGateway, 
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect, 
    SubscribeMessage,
    MessageBody,
    ConnectedSocket
} from "@nestjs/websockets";

import { 
    AuthService, 
    CharactersService, 
    ItemsService, 
    MapsService,
    Services,
    ServerService
 } from "@services";

import { 
    Maps, 
    Player,
    ByteBuffer,
    Commands,
    QueueBuffer
} from "@engine";

import {
    packetLogin, 
    packetCharacterList,
    packetFullCharacter,
    packetEnterToWorld, 
    packetGetServerList,
    packetMapData,
    packetCreateCharacterFinish,
    packetCreateCharacterError
} from "@network";

@WebSocketGateway(3011, { cors: { origin: "*" }})
export class GameServerGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger: Logger = new Logger('GameServer');

    @WebSocketServer() server;

    private clients: Map<string, any> = new Map<string, any>();

    constructor(
        @InjectRedis() private readonly redis: Redis,
        @InjectQueue('gameserver') private gameServerQueue: Queue,
        private readonly serverService: ServerService,
        private readonly authService: AuthService,
        private readonly charactersService: CharactersService,
        private readonly mapsService: MapsService,
        private readonly itemsService: ItemsService,
        private readonly services: Services
    ){ }

    afterInit(server: any) {
        this.logger.log("Websocket connected");
        server.on('close', this.handleDisconnect);
    }

    handleConnection(socket: any, ...args: any[]) {
        const uuid = uuidv4();
        socket.id = uuid;
        this.clients.set(socket.id, socket);

        const message = new ByteBuffer()
        .putByte(ServerPacketType.SessionId)
        .putString(socket.id).getBuffer();

        socket.send(message);

        this.logger.verbose(`Client connect: ${socket.id.substr(0,6)}`);
    }
    
    handleDisconnect(socket: any) {
        const map = Maps.getOrCreateMap(socket.character.map, this.mapsService);
        
        if(Player.players.has(socket.characterId))
            map.leaveMap(Player.players.get(socket.characterId));
        
        QueueBuffer.removeSocket(socket.mapIndex);

        this.clients.delete(socket.id);
        this.logger.verbose(`Client disconnected: ${socket.id}`);
    }

    @SubscribeMessage(ClientPacketType.Ping)
    async handlePing(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "timestamp": "int32" });
        
        socket.send(new ByteBuffer()
        .putByte(ServerPacketType.Pong)
        .putInt32(messageData.timestamp)
        .getBuffer());

        if(socket.character && socket.character.map && socket.entityId){
            const map = Maps.getMap(socket.character.map);
            const entity = map.findEntityById(socket.entityId);

            if(entity)
                entity.updateLastInteract();
        }
    }

    @SubscribeMessage(ClientPacketType.LoginSteam)
    async handleLoginSteam(@MessageBody() data: ByteBuffer, @ConnectedSocket() socket: any){
        try{
            const messageData = data.readDataFromBuffer({ "steamid": "string" });
            const result = await this.authService.loginSteam(messageData.steamid);

            if(result && result.token) {
                let storedSocket = this.clients.get(socket.id);
                storedSocket.token = result.token;
                this.clients.set(socket.id, storedSocket);
                socket.accountId = messageData.steamid;
                socket.token = result.token;
                socket.plevel = result.plevel;

                this.logger.verbose(`Client login: ${socket.id.substr(0,6)} :: ${messageData.steamid}`);
                packetLogin.send(socket, result.token);

                packetGetServerList.send(socket, JSON.stringify({ data: await this.serverService.getAllServersWS() }));
            }
        }
        catch (e) {
            packetLogin.send(socket, "");
        }
    }

    @SubscribeMessage(ClientPacketType.Login)
    async handleLogin(@MessageBody() data: ByteBuffer, @ConnectedSocket() socket: any){
        try{
            const messageData = data.readDataFromBuffer({ 
                "username": "string", 
                "password": "string",
                "applicant": "string" 
            });

            const result = await this.authService.login(messageData, Plevel.Player);

            if(result && result.token) {
                let storedSocket = this.clients.get(socket.id);
                storedSocket.token = result.token;
                this.clients.set(socket.id, storedSocket);
                socket.accountId = result.accountId;
                socket.token = result.token;
                socket.plevel = result.plevel;

                this.logger.verbose(`Client login: ${socket.id.substr(0,6)} :: ${result.id}`);
                packetLogin.send(socket, result.token);

                packetGetServerList.send(socket, JSON.stringify({ data: await this.serverService.getAllServersWS() }));
            }
        }
        catch (e) {
            packetLogin.send(socket, "");
        }
    }

    @SubscribeMessage(ClientPacketType.CharacterList)
    async handleCharacterList(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "token": "string" });

        if(messageData.token){
            const tokenData = this.authService.verify(messageData.token);
            socket.token = messageData.token;
            socket.plevel = tokenData.data.plevel;
            socket.accountId = tokenData.data.masterId;
            let storedSocket = this.clients.get(socket.id);
            storedSocket.token = messageData.token;
            this.clients.set(socket.id, storedSocket);

            const characters = await this.charactersService.getAllCharacters(messageData.token);
            packetCharacterList.send(socket, characters);
        }
    }

    @SubscribeMessage(ClientPacketType.CreateCharacter)
    async handleCreateCharacter(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "name": "string", "payload": "string" });
        const result = await this.charactersService.createCharacter(messageData, socket.token);

        if(result)
            packetCreateCharacterFinish.send(socket);
        else 
            packetCreateCharacterError.send(socket);
    }

    @SubscribeMessage(ClientPacketType.FullCharacter)
    async handleGetFullCharacterInfo(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        const messageData = data.readDataFromBuffer({ "characterId": "string" });

        if(Player.playerData.has(messageData.characterId)){
            const character = JSON.parse(Player.parseData(messageData.characterId));
            socket.character = character;
            socket.characterId = messageData.characterId;
            packetFullCharacter.send(socket, JSON.stringify(character));
        }
    }

    @SubscribeMessage(ClientPacketType.EnterToWorld)
    async handleEnterToWorld(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        try{
            const messageData = data.readDataFromBuffer({ "map": "string", "dev": "bool" });

            const map = (!messageData.dev) ? 
                Maps.getOrCreateMap(socket.character.map, this.mapsService) :
                Maps.getOrCreateMap(messageData.map, this.mapsService); 

            if(Player.playerData.has(socket.characterId)){
                const character = Player.parseData(socket.characterId);
                socket.character = JSON.parse(character);
                
                const player = new Player(socket, JSON.parse(character), this.gameServerQueue, socket.accountId);
                const mapIndex = await map.joinMap(player);                
                socket.character.map = map.namespace;
                socket.entityId = mapIndex;
                socket.services = this.services;
                socket.characterId = player.characterId;
                Player.players.set(player.characterId, player);
                Player.onlinePlayers.add(player.characterId);
                QueueBuffer.addSocket(mapIndex, socket);

                player.setArchivement("PREALPHA");
                
                this.logger.verbose(`Join to map: ${socket.character.name} :: ${map.namespace} :: ${mapIndex} :: ${GUID.ToInt(player.mapIndex)}`);

                const createKeys = crypto.createDiffieHellman(512);
                createKeys.generateKeys();
                const publicKey = createKeys.getPublicKey('hex');

                socket.diffPublicKey = publicKey;
                socket.diffKey = createKeys.computeSecret(publicKey, "hex", "hex"); 
                
                this.authService.updateAccountInformations(socket.accountId, { 
                    diffKey: createKeys.computeSecret(publicKey, "hex", "hex") 
                });

                packetEnterToWorld.sendBuffer(socket, 
                    new ByteBuffer()
                    .putByte(ServerPacketType.EnterToWorld)
                    .putId(player.mapIndex)
                    .putString(publicKey)
                    .getBuffer()
                );

                //packetMapData.send(socket, Maps.foliageInitialData.get(map.namespace));
            }
        }
        catch(e){  console.log(e); }        
    }

    @SubscribeMessage(ClientPacketType.Command)
    async handleCommand(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "command": "string" });
        Commands.parseCommand(messageData.command, socket, this.server, {
            itemsService: this.itemsService,
            authService: this.authService
        });
    }
}
import Redis from "ioredis";
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';
import * as fs from "fs";

import { InjectRedis } from "@nestjs-modules/ioredis";
import { Logger } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

import { GUID } from "@utils";

import { 
    ClientPacketType, 
    ServerPacketType, 
    Plevel,
    EventType
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
    QueueBuffer,
    Containers,
    Humanoid,
    Vector3,
    Creature,
    packetAutoAttack,
    Interact,
    packetPlayerStatics
} from "@engine";

import {
    packetLogin, 
    packetCharacterList,
    packetFullCharacter,
    packetEnterToWorld, 
    packetGetServerList,
    packetCreateCharacterFinish,
    packetCreateCharacterError
} from "@network";


@WebSocketGateway(3011, { cors: { origin: "*" }})//
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
        if(socket.character && socket.character.map){
            const map = Maps.getOrCreateMap(socket.character.map, this.mapsService);
        
            if(socket.characterId && Player.players.has(socket.characterId))
                map.leaveMap(Player.players.get(socket.characterId));
        }
            
        if(socket.mapIndex)
            QueueBuffer.removeSocket(socket.mapIndex);
        
        this.clients.delete(socket.id);
        //this.logger.verbose(`Client disconnected: ${socket.id}`);
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
            const messageData = data.readDataFromBuffer({ "steamid": "string", "token": "string" });
            let result = await this.authService.loginSteam(messageData.steamid, messageData.token);
            
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
            
            const result = await this.authService.login(messageData, Plevel.CommunityManager);

            if(result && result.token && result.plevel >= 20) {
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
            const tokenData = this.authService.decodeToken(messageData.token);
            
            if(tokenData && tokenData.data && tokenData.data.masterId){
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
            const playerData = Player.parseData(messageData.characterId);
            const character = JSON.parse(playerData);
            socket.character = character;
            socket.characterId = messageData.characterId;
            packetFullCharacter.send(socket, playerData);
        }
    }

    @SubscribeMessage(ClientPacketType.EnterToWorld)
    async handleEnterToWorld(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        try{
            const messageData = data.readDataFromBuffer({ "map": "string", "dev": "bool" });
            const map = Maps.getOrCreateMap(messageData.map, this.mapsService); 

            if(Player.playerData.has(socket.characterId) && map){
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
        catch(e){ }        
    }

    @SubscribeMessage(ClientPacketType.Command)
    async handleCommand(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "command": "string" });
        Commands.parseCommand(messageData.command, socket, this.server, {
            itemsService: this.itemsService,
            authService: this.authService
        });
    }

    //Containers
    @SubscribeMessage(ClientPacketType.DestroyItem)
    async handleDestroyItem(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        const messageData = data.readDataFromBuffer({ 
            "itemRef": "string", "containerId": "string", 
            "slotId": "int32", "intentory": "bool" 
        });

        const entity = Maps.getEntity(socket, socket.entityId);
        const player = (entity as Player);

        if(player){
            if(messageData.intentory && messageData.containerId === player.inventory.containerId){
                player.inventory.removeItem(messageData.itemRef);
                player.save();
            }                
            else if(Containers.has(messageData.containerId))
                Containers.get(messageData.containerId)?.removeItem(messageData.itemRef);
        }
    }

    @SubscribeMessage(ClientPacketType.MoveItem)
    async handleMoveItem(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        const messageData = data.readDataFromBuffer({ 
            "containerId": "string", "from": "int32", 
            "to": "int32", "intentory": "bool" 
        });

        const entity = Maps.getEntity(socket, socket.entityId);
        const player = (entity as Player);

        if(player){
            if(messageData.intentory && messageData.containerId === player.inventory.containerId){
                player.inventory.moveItem(messageData.from, messageData.to);
                player.save();
            }                
            else if(Containers.has(messageData.containerId)){
                Containers.getOrCreate(messageData.containerId, entity)
                    .moveItem(messageData.from, messageData.to);
            }
        }
    }

    @SubscribeMessage(ClientPacketType.ChangeContainer)
    async handleChangeContainer(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        const messageData = data.readDataFromBuffer({ 
            "currentContainerId": "string", "currentSlotId": "int32", 
            "newContainerId": "string", "newSlotId": "int32", 
            "amount": "int32", 
        });

        const entity = Maps.getEntity(socket, socket.entityId);
        const player = (entity as Player);

        if(player){
            const containerFrom = (player.inventory.containerId === messageData.currentContainerId) ? player.inventory :  
                Containers.getOrCreate(messageData.currentContainerId, entity);

            const containerTo = (player.inventory.containerId === messageData.newContainerId) ? player.inventory :  
                Containers.getOrCreate(messageData.newContainerId, entity);

            if(containerTo && containerFrom){
                containerFrom.changeContainer(
                    messageData.currentSlotId, 
                    containerTo, 
                    messageData.newSlotId, 
                    messageData.amount
                );
            }                
        }
    }

    @SubscribeMessage(ClientPacketType.Consume)
    async handleConsume(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        const messageData = data.readDataFromBuffer({"slotId": "int32"});
        const entity = Maps.getEntity(socket, socket.entityId);
        const player = (entity as Player);

        if(player && messageData.slotId >= 0)
            player.inventory.consume(messageData.slotId)
    }

    //Entities
    @SubscribeMessage(ClientPacketType.UpdateEntity)
    async handleUpdateEntity(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer) {
        const messageData = data.readDataFromBuffer({ 
            "id": "id", 
            "x": "int32",
            "y": "int32",
            "z": "int32" 
        });

        const map = Maps.getMap(socket.character.map);
        const newLocation = new Vector3(messageData.x, messageData.y, messageData.z);
        //const newRotation = new Rotator(0, 0, messageData.r);

        if (!map)
            return false;

        //const currentEntity = map.findEntityById(socket.entityId);
        const entity = map.findEntityById(messageData.id);
        
        if (!entity)
            return false;  

        if(!entity.removed)             
            entity?.updatePosition(newLocation);   
    }

    @SubscribeMessage(ClientPacketType.GetEntityInfo)
    async handleGetEntityInfo(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "id": "id" });
        const map = Maps.getMap(socket.character.map);
        const currentEntity = map.findEntityById(socket.entityId);
        const entity = map.findEntityById(messageData.id);
        entity?.sendInfo(currentEntity);
    }

    @SubscribeMessage(ClientPacketType.SyncEvent)
    async hangleSyncEvent(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "id": "byte" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity){
            switch(messageData.id){
                case EventType.SprintStart: entity.startSprint(); break;
                case EventType.SprintEnd: entity.endSprint(); break;
                case EventType.Roll: entity.roll(); break;
                case EventType.Revive: entity.revive(); break;
            }           
    
            entity?.updateEvent(messageData.id);
        }
    }

    @SubscribeMessage(ClientPacketType.PlayMontage)
    async handlePlayMontage(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "id": "int32" });
        const entity = Maps.getEntity(socket, socket.entityId);
        entity?.updatePlayMontage(messageData.id);
    }

    @SubscribeMessage(ClientPacketType.Precast)
    async handlePrecast(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "id": "id", "index": "byte" });
        const entity = Maps.getEntity(socket, messageData.id);

        if(
            entity &&
            (socket.entityId === messageData.id || 
            entity?.target === socket.entityId) && 
            !entity.isDead &&
            !entity.removed
        ){
            entity?.preCast(messageData.index);
        }        
    }

    @SubscribeMessage(ClientPacketType.Action)
    async handleAction(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "id": "id", "index": "byte", "target": "id" });
        const entity = Maps.getEntity(socket, messageData.id);
        const target = (messageData.target) ? Maps.getEntity(socket, messageData.target) : null;

        if(
            entity &&
            (socket.entityId === messageData.id || 
            entity?.target === socket.entityId) && 
            !entity.isDead &&
            !entity.removed
        ){
            entity?.updateAction(messageData.index, target);
        }           
    }

    @SubscribeMessage(ClientPacketType.ActionSuccess)
    async handleActionSuccess(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "id": "id", "index": "byte", "target": "id", "ignoreTarget": "bool" });
        const entity = Maps.getEntity(socket, messageData.id);
        const target = (messageData.target) ? Maps.getEntity(socket, messageData.target) : null;

        if(
            entity &&
            (socket.entityId === entity?.target || 
            socket.entityId === messageData?.target || 
            socket.entityId === messageData.id || 
            messageData.ignoreTarget ||
            entity?.isCreature) && target
        ) {
            entity?.actionSuccess(messageData.index, target);
        } 
    }

    @SubscribeMessage(ClientPacketType.ActionAreaSuccess)
    async handleActionAreaSuccess(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ 
            "id": "id", "index": "byte", "x": "int32", 
            "y": "int32", "z" : "int32" 
        });

        const entity = Maps.getEntity(socket, messageData.id);

        if(
            entity &&
            socket.entityId === entity?.target || 
            socket.entityId === messageData.id || 
            entity?.isCreature && 
            !entity.isDead &&
            !entity.removed
        ) 
        {
            entity?.actionSuccess(
                messageData.index, 
                new Vector3(messageData.x, messageData.y, messageData.z)
            );
        }
    }

    @SubscribeMessage(ClientPacketType.SelectTarget)
    async handleSelectTarget(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "target": "id" });
        const entity = Maps.getEntity(socket, socket.entityId);
        const target = Maps.getEntity(socket, messageData.target);

        if(entity && target)
            entity?.selectTarget(messageData.target, target);
    }

    @SubscribeMessage(ClientPacketType.CancelTarget)
    async handleCancelTarget(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const entity = Maps.getEntity(socket, socket.entityId);
        entity?.cancelTarget();
    }

    @SubscribeMessage(ClientPacketType.CheckHit)
    async handleCheckHit(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ 
            "entityId": "id", "actorId": "id", 
            "x": "int32", "y": "int32", "z": "int32", 
            "action": "byte" 
        });

        const emmiterEntity = Maps.getEntity(socket, messageData.entityId);
        const entity = Maps.getEntity(socket, socket.entityId);

        if(
            (socket.entityId === messageData.entityId || 
            socket.entityId === messageData.actorId || 
            emmiterEntity?.isCreature) && 
            emmiterEntity &&
            !emmiterEntity.isDead &&
            !emmiterEntity.removed
        ) {
            if(emmiterEntity instanceof Humanoid)
                (emmiterEntity as Humanoid).checkHit(messageData);
            else
                emmiterEntity.checkHit(messageData);
        } 
    }

    @SubscribeMessage(ClientPacketType.CheckHitAutoAttack)
    async handleCheckHitAutoAttack(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ 
            "entityId": "id", "actorId": "id", 
            "x": "int32", "y": "int32", "z": "int32", 
        });

        const emmiterEntity = Maps.getEntity(socket, messageData.entityId);
        const entity = Maps.getEntity(socket, socket.entityId);

        if(
            (socket.entityId === messageData.actorId || 
            socket.entityId === messageData.entityId || 
            emmiterEntity?.isCreature) && 
            emmiterEntity &&
            !emmiterEntity.isDead &&
            !emmiterEntity.removed
        ) {
            if(emmiterEntity instanceof Humanoid)
                (emmiterEntity as Humanoid).checkHitAutoAttack(messageData);
            else
                emmiterEntity?.checkHitAutoAttack(messageData);
        }        
    }

    @SubscribeMessage(ClientPacketType.ActionArea)
    async handleActionArea(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ 
            "id": "id", "index": "byte", "x": "int32", 
            "y": "int32", "z": "int32" 
        });

        const entity = Maps.getEntity(socket, messageData.id);
        
        if(
            (socket.entityId === messageData.id || 
            entity?.target === socket.entityId) && 
            !entity.isDead &&
            !entity.removed
        )
        {
            entity?.updateActionArea(
                messageData.index, 
                new Vector3(messageData.x, messageData.y, messageData.z)
            );
        }        
    }

    @SubscribeMessage(ClientPacketType.CheckAttackRange)
    async handleCheckAttackRange(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "entityId": "id" });
        const entity = Maps.getEntity(socket, socket.entityId);
        const creature = Maps.getEntity(socket, messageData.entityId);
        
        if(creature && entity && creature.isCreature)
            (creature as Creature).validateAttack(entity);
    }

    //Player
    @SubscribeMessage(ClientPacketType.SetAction)
    async handleSetAction(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ 
            "action": "string", "itemRef": "string",
            "slotId": "int32"
        });

        const entity = Maps.getEntity(socket, socket.entityId);
        (entity as Player)?.setAction(messageData.action, messageData.itemRef, messageData.slotId);
    }

    @SubscribeMessage(ClientPacketType.ClearAction)
    async handleClearAction(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "slotId": "int32" });
        const entity = Maps.getEntity(socket, socket.entityId);
        (entity as Player)?.clearAction(messageData.slotId);
    }

    @SubscribeMessage(ClientPacketType.Equip)
    async handleEquip(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ 
            "type": "byte", "itemId": "string", 
            "itemRef": "string", "ring02": "boolean" 
        });

        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && !entity.isDead && !entity.removed){
            (entity as Player)?.equip(
                messageData.type, messageData.itemId, 
                messageData.itemRef, messageData.ring02
            );
        }
    }

    @SubscribeMessage(ClientPacketType.Desequip)
    async handleDesequip(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "type": "byte", "slotId": "int32", "ring02": "bool" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && !entity.isDead && !entity.removed)
            (entity as Player)?.desequip(messageData.type, messageData.ring02, true, messageData.slotId);
    }

    @SubscribeMessage(ClientPacketType.AutoAttack)
    async handleAutoAttack(@ConnectedSocket() socket: any){
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && !entity.isDead && !entity.removed)
            entity?.broadcast(packetAutoAttack);
    }

    @SubscribeMessage(ClientPacketType.ChatMessage)
    async handleChatMessage(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "message": "string", "type": "byte" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity instanceof Player)
            (entity as Player).chatMessage(messageData.type, messageData.message);
    }

    @SubscribeMessage(ClientPacketType.Interact)
    async handleInteract(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "type": "byte", "payload": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && !entity.isDead && !entity.removed)
            Interact.interact((entity as Player), messageData.type, messageData.payload);
    }

    @SubscribeMessage(ClientPacketType.Skinning)
    async handleSkinning(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "entityId": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);
        const entitySkinning = Maps.getEntity(socket, messageData.entityId);

        if(entity && entitySkinning && !entity.isDead && !entity.removed && entity instanceof Player)
            (entitySkinning as Creature).skinning(entity as Player);
    }

    @SubscribeMessage(ClientPacketType.Collect)
    async handleCollect(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && !entity.isDead && !entity.removed)
            (entity as Player)?.collect();
    }

    @SubscribeMessage(ClientPacketType.PlayerStatics)
    async handlePlayerStatics(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player && !entity.isDead && !entity.removed)
            packetPlayerStatics.send((entity as Player));
    }

    @SubscribeMessage(ClientPacketType.AddStat)
    async handleAddStat(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "type": "byte" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            entity.addStat(messageData.type);
    }

    @SubscribeMessage(ClientPacketType.CraftItem)
    async handleCraftItem(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "recipe": "string", "amount": "int32" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player && !entity.isDead && !entity.removed)
            entity.craftItem(messageData.recipe, messageData.amount);
    }

    @SubscribeMessage(ClientPacketType.BuyItem)
    async handleBuyItem(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "namespace": "string", "amount": "int32" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player && !entity.isDead && !entity.removed)
            (entity as Player).buyItem(messageData.namespace, messageData.amount);
    }

    @SubscribeMessage(ClientPacketType.SellItem)
    async handleSellItem(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "namespace": "string", "amount": "int32" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player && !entity.isDead && !entity.removed)
            (entity as Player).sellItem(messageData.namespace, messageData.amount);
    }

    @SubscribeMessage(ClientPacketType.RequestParty)
    async handleRequestParty(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "characterId": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).requestJoinParty(messageData.characterId);
    }

    @SubscribeMessage(ClientPacketType.ConfirmParty)
    async handleConfirmParty(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "sessionId": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).confirmPartyRequest(messageData.sessionId);
    }

    @SubscribeMessage(ClientPacketType.FinishQuest)
    async handleFinishQuest(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "namespace": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);
        
        if(entity && entity instanceof Player)
            (entity as Player).finishQuest(messageData.namespace);
    }

    @SubscribeMessage(ClientPacketType.QuestFav)
    async handleQuestFav(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "namespace": "string", "status": "bool" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).favQuest(messageData.namespace, messageData.status);
    }

    @SubscribeMessage(ClientPacketType.RequestTrade)
    async handleRequestTrade(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "characterId": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).requestTrade(messageData.characterId);
    }

    @SubscribeMessage(ClientPacketType.AcceptTrade)
    async handleAcceptTrade(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "sessionId": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).acceptTrade(messageData.sessionId);
    }

    @SubscribeMessage(ClientPacketType.NotAcceptTrade)
    async handleNotAcceptTrade(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "sessionId": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).notAcceptTrade(messageData.sessionId);
    }

    @SubscribeMessage(ClientPacketType.ChangeStatusTrade)
    async handleChangeStatusTrade(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "sessionId": "string", "status": "bool" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).changeStatusTrade(messageData.sessionId, messageData.status);
    }

    @SubscribeMessage(ClientPacketType.CancelTrade)
    async handleCancelTrade(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "sessionId": "string" });
        const entity = Maps.getEntity(socket, socket.entityId);

        if(entity && entity instanceof Player)
            (entity as Player).cancelTrade(messageData.sessionId);
    }

    @SubscribeMessage(ClientPacketType.PlayerActions)
    async handlePlayerActions(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "type": "byte", "metadata": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);
            const metadata = (messageData.metadata) ? JSON.parse(messageData.metadata) : null;

            if(entity && entity instanceof Player && metadata)
                (entity as Player).playerActions(messageData.type, metadata);
        }
        catch(e){}        
    }

    @SubscribeMessage(ClientPacketType.Waipoint)
    async handleWaipoint(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "map": "string", "waypoint": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).teleport(messageData.map, messageData.waypoint);
        }
        catch(e){}        
    }

    @SubscribeMessage(ClientPacketType.AppendCard)
    async handleAppendCard(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "equipament": "string", "itemref": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).appendCard(messageData.equipament, messageData.itemref);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.CreateGuild)
    async handleCreateGuild(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ 
                "guildName": "string", "banner": "int32",
                "pattern": "int32", "symbol" : "int32",
                "bannerColor": "string", "patternColor": "string", 
                "symbolColor": "string"
            });

            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).createGuild(messageData);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.GuildsList)
    async handleGuildsList(@ConnectedSocket() socket: any){
        try{
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).guildList();
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.CreateEventInstance)
    async handleCreateEventInstance(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "eventType": "byte" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).createEvent(messageData.eventType);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.GetGuildData)
    async handleGetGuildData(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "guildId": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).guildData(messageData.guildId);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.RequestGuildJoin)
    async handleRequestGuildJoin(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "guildId": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).guildRequestJoin(messageData.guildId);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.AcceptGuildRequest)
    async handleAcceptGuildRequest(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "requestid": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).guildAcceptRequest(messageData.requestid);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.DenyGuildRequest)
    async handleDenyGuildRequest(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "requestid": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).guildDenyRequest(messageData.requestid);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.RemoveGuildMember)
    async handleRemoveGuildMember(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        try{
            const messageData = data.readDataFromBuffer({ "characterId": "string" });
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).removeGuildMember(messageData.characterId);
        }
        catch{}        
    }

    @SubscribeMessage(ClientPacketType.LeaveGuild)
    async handleLeaveGuild(@ConnectedSocket() socket: any){
        try{
            const entity = Maps.getEntity(socket, socket.entityId);

            if(entity && entity instanceof Player)
                (entity as Player).leaveGuild();
        }
        catch{}        
    }
}
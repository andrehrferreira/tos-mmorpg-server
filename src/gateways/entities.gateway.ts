import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

import { 
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    WebSocketGateway
} from "@nestjs/websockets";

import { ClientPacketType, EventType } from "@enums";
import { Vector3, Rotator, Maps, ByteBuffer, Creature, Humanoid } from "@engine";

@WebSocketGateway(3011, { cors: { origin: "*" }})
export class EntitiesGateway {
    constructor(
        @InjectQueue('gameserver') private gameServerQueue: Queue
    ){ }

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
}

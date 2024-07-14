import { 
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    WebSocketGateway
} from "@nestjs/websockets";

import { ClientPacketType } from "@enums";
import { Maps, ByteBuffer, Player, Containers } from "@engine";

@WebSocketGateway(3011, { cors: { origin: "*" }})
export class ContainersGateway {
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
}
import { 
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    WebSocketGateway
} from "@nestjs/websockets";

import { ClientPacketType } from "@enums";
import { Maps, ByteBuffer, Interact, Player, Creature } from "@engine";
import { packetPlayerStatics } from "@network";

import {
    packetAutoAttack
} from "@network"

@WebSocketGateway(3011, { cors: { origin: "*" }})
export class PlayerGateway {
    @SubscribeMessage(ClientPacketType.SetAction)
    async handleSetAction(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ 
            "action": "string", "itemRef": "string",
            "slotId": "int32"
        });

        const entity = Maps.getEntity(socket, socket.entityId);
        entity?.setAction(messageData.action, messageData.itemRef, messageData.slotId);
    }

    @SubscribeMessage(ClientPacketType.ClearAction)
    async handleClearAction(@ConnectedSocket() socket: any, @MessageBody() data: ByteBuffer){
        const messageData = data.readDataFromBuffer({ "slotId": "int32" });
        const entity = Maps.getEntity(socket, socket.entityId);
        entity?.clearAction(messageData.slotId);
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
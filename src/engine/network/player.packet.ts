import { Packet, PacketDirectSocket } from "./packet";
import { ByteBuffer, Entity, Humanoid, Player, QueueBuffer } from "@engine";
import { ChatChannel, ServerPacketType, SkillName } from "@enums";
import { ISkillValue } from "@interfaces";

export class PacketCharacterList extends PacketDirectSocket {
    public override type = ServerPacketType.CharacterList;
}

export class PacketFullCharacter extends PacketDirectSocket {
    public override type = ServerPacketType.FullCharacter;
}

export class PacketUnstuck extends PacketDirectSocket {
    public override type = ServerPacketType.Unstuck;
}

export class PacketCreateCharacter extends Packet {
    public override type = ServerPacketType.CreateCharacter;
    
    public override send(owner: Player, entity: Entity){
        const humanoid = (owner as Humanoid);
        const selfEntity = (entity instanceof Player) ? 
        (entity.characterId === owner.characterId) : false;
        
        if(humanoid && entity.socket && !selfEntity){
            const buffer = new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putString(owner.name.substring(0, 14))
            .putString(humanoid.visual)
            .putString(JSON.stringify({
                helmet: humanoid.helmet ? humanoid.helmet.ItemName : null,
                chest: humanoid.chest ? humanoid.chest.ItemName : null,
                gloves: humanoid.gloves ? humanoid.gloves.ItemName : null,
                pants: humanoid.pants ? humanoid.pants.ItemName : null,
                boots: humanoid.boots ? humanoid.boots.ItemName : null,
                robe: humanoid.robe ? humanoid.robe.ItemName : null,
                cloak: humanoid.cloak ? humanoid.cloak.ItemName : null,
                mainhand: humanoid.mainhand ? humanoid.mainhand.ItemName : null,
                offhand: humanoid.offhand ? humanoid.offhand.ItemName : null
            }))
            .putInt32(owner.getStates(entity, "PacketCreateCharacter").getCurrentFlags())
            .putInt32(owner.transform.position.x)
            .putInt32(owner.transform.position.y)
            .putInt32(owner.transform.position.z)
            .putInt32(owner.transform.rotation.yaw)
            .putInt32(owner.maxLife)
            .putInt32(owner.life)
            .putString(owner.characterId)
            .putInt32(owner.buffsDebuffsState.getCurrentFlags())
            .putString(owner.guild ? owner.guild.Name : "")

            QueueBuffer.addBuffer(entity.mapIndex, buffer);
            //entity.socket.send(buffer.getBuffer());
        }
    }
}

export class PacketSystemMessage extends Packet {
    public override type = ServerPacketType.SystemMessage;

    public override send(owner: Entity, message: string){
        if(owner && owner.socket){
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(message).getBuffer()
            );
        }        
    }

    public sendDirectSocket(socket: any, message: string){
        if(socket && typeof socket.send === "function"){
            socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(message).getBuffer()
            );  
        }
    }
}

export class PacketPlayerStats extends Packet {
    public override type = ServerPacketType.PlayerStats;
    
    public override send(owner: Player){
        if(owner.socket && !owner.removed){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putInt32(owner.life)
            .putInt32(owner.mana)
            .putInt32(owner.stamina)

            owner.socket.send(buffer.getBuffer());
            //QueueBuffer.addBuffer(owner.mapIndex, buffer);
        }
    }
}

export class PacketEquip extends Packet {
    public override type = ServerPacketType.Equip;
    
    public override send(owner: Player, entity: Entity, data: { type: number, itemId: string }){
        if(entity.socket && !owner.removed && !owner.isDead){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putId(owner.mapIndex)
            .putByte(data.type)
            .putString(data.itemId)

            entity.socket.send(buffer.getBuffer());
        }
    }
}

export class PacketDesequip extends Packet {
    public override type = ServerPacketType.Desequip;
    
    public override send(owner: Player, entity: Entity, data: { type: number, ring02: boolean }){
        if(entity.socket && !owner.removed && !owner.isDead){
            const ring02 = (data.ring02 === true);

            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putId(owner.mapIndex)
            .putByte(data.type)
            .putBool(ring02)

            entity.socket.send(buffer.getBuffer());
        }
    }
}

export class PacketAutoAttack extends Packet {
    public override type = ServerPacketType.AutoAttack;
    
    public override send(owner: Player, entity: Entity){
        if(entity.socket && !owner.removed && !owner.isDead){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putId(owner.mapIndex)

            //entity.socket.send(buffer.getBuffer());
            QueueBuffer.addBuffer(entity.mapIndex, buffer);
        }
    }
}

export class PacketUpdateStats extends Packet {
    public override type = ServerPacketType.UpdateStats;
    
    public override send(owner: Player){
        if(owner.socket && !owner.removed){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putInt32(owner.str)
            .putInt32(owner.dex)
            .putInt32(owner.int)
            .putInt32(owner.vig)
            .putInt32(owner.agi)
            .putInt32(owner.luc)

            owner.socket.send(buffer.getBuffer());
            //QueueBuffer.addBuffer(owner.mapIndex, buffer);
        }
    }
}

export class PacketSkillExperience extends Packet {
    public override type = ServerPacketType.UpdateSkillExperience;
    
    public override send(owner: Entity, skillName: SkillName, skill: ISkillValue){
        if(owner.socket){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putByte(skillName)
            .putInt32(skill.value)
            .putInt32(skill.experience)
            .putInt32(skill.cap)

            owner.socket.send(buffer.getBuffer());
        }
    }
}

export class PacketStartSkinning extends Packet {
    public override type = ServerPacketType.StartSkinning;
    
    public override send(owner: Entity){
        if(owner.socket){       
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .getBuffer());
        }
    }
}

export class PacketCancelInteract extends Packet {
    public override type = ServerPacketType.CancelInteract;
    
    public override send(owner: Entity){
        if(owner.socket){       
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .getBuffer()
            );
        }
    }
}

export class PacketPlayerStatics extends Packet {
    public override type = ServerPacketType.PlayerStatics;
    
    public override send(owner: Player){
        if(owner.socket && !owner.removed && !owner.isDead){       
            const buffer = new ByteBuffer()
                .putByte(this.type)
                .putString(owner.getStaticsPlayer())

            owner.socket.send(buffer.getBuffer());
            //QueueBuffer.addBuffer(owner.mapIndex, buffer);
        }
    }
}

export class PacketUpdateTick extends Packet {
    public override type = ServerPacketType.UpdateTick;
    
    public override send(owner: Entity, ref: string, tick: number){
        if(owner.socket){      
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(ref)
                .putInt32(tick)
                .getBuffer()
            );
        }
    }
}

export class PacketFinishCollect extends Packet {
    public override type = ServerPacketType.FinishCollect;
    
    public override send(owner: Entity, ref: string){
        if(owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(ref)
                .getBuffer()
            );
        }
    }
}

export class PacketRequestParty extends Packet {
    public override type = ServerPacketType.RequestParty;
    
    public override send(owner: Entity, sessionId: string, ownerName: string){
        if(owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(sessionId)
                .putString(ownerName)
                .getBuffer()
            );
        }
    }
}

export class PacketPartyData extends Packet {
    public override type = ServerPacketType.PartyData;
    
    public override send(owner: Entity, data: string){
        if(owner.socket){    
            const buffer = new ByteBuffer()
                .putByte(this.type)
                .putString(data)
         
            owner.socket.send(buffer.getBuffer());
            //QueueBuffer.addBuffer(owner.mapIndex, buffer);
        }
    }
}

export class PacketChatMessage extends Packet {
    public override type = ServerPacketType.ChatMessage;
    
    public override send(
        entity: Entity, 
        data: { 
            senderName: string, 
            entityId: string, 
            messageRef: string, 
            message: string, 
            channel: ChatChannel 
        }
    ){
        if(entity.socket && data.message !== "" && data.message !== undefined && data.message !== null){    
            const buffer = new ByteBuffer()
            .putByte(this.type)
            .putString(data.senderName)
            .putId(data.entityId)
            .putString(data.messageRef)
            .putString(data.message)
            .putByte(data.channel)

            QueueBuffer.addBuffer(entity.mapIndex, buffer);            
        }
    }
}

export class PacketLoadLevel extends Packet {
    public override type = ServerPacketType.LoadLevel;
    
    public override send(owner: Entity, data: {
        levelName: string, 
        waypoint: string
    }){
        if(owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(data.levelName)
                .putString(data.waypoint)
                .getBuffer()
            );
        }
    }
}

export class PacketRequestTrade extends Packet {
    public override type = ServerPacketType.RequestTrade;
    
    public override send(owner: Entity, sessionId: string, ownerName: string){
        if(owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(sessionId)
                .putString(ownerName)
                .getBuffer()
            );
        }
    }
}

export class PacketChangeStatusTrade extends Packet {
    public override type = ServerPacketType.ChangeStatusTrade;
    
    public override send(owner: Entity, status: boolean){
        if(owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putBool(status)
                .getBuffer()
            );
        }
    }
}

export class PacketUpdateSkillInfo extends Packet {
    public override type = ServerPacketType.UpdateSkillInfo;
    
    public override send(owner: Entity){
        if(owner && owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(owner.serializeSkills())
                .getBuffer()
            );
        }
    }
}

export class PacketGoTo extends Packet {
    public override type = ServerPacketType.GoTo;
    
    public override send(owner: Entity, data: {
        levelName: string, 
        x: number,
        y: number,
        z: number
    }){
        if(owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(data.levelName)
                .putInt32(data.x)
                .putInt32(data.y)
                .putInt32(data.z)
                .getBuffer()
            );
        }
    }
}

export class PacketSay extends Packet {
    public override type = ServerPacketType.Say;
    
    public override send(entity: Entity, data: {
        speaker: Entity,
        message: string, 
        color: string
    }){
        if(entity.socket){    
            const buffer = new ByteBuffer()
                .putByte(this.type)
                .putId(data.speaker.mapIndex)
                .putString(data.message)
                .putString(data.color);

            QueueBuffer.addBuffer(entity.mapIndex, buffer); 
        }
    }
}

export class PacketJoinGuild extends Packet {
    public override type = ServerPacketType.JoinGuild;
    
    public override send(owner: Entity, data: {
        entityId: string,
        guildId: string, 
        guildName: string
    }){
        if(owner.socket){    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putId(data.entityId)
                .putString(data.guildId)
                .putString(data.guildName)
                .getBuffer()
            );
        }
    }
}

export class PacketGuildsList extends Packet {
    public override type = ServerPacketType.GuildsList;
    
    public override send(owner: Entity, data: string){
        if(owner.socket) {    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(data)
                .getBuffer()
            );
        }
    }
}

export class PacketGuildData extends Packet {
    public override type = ServerPacketType.GuildData;
    
    public override send(owner: Entity, data: string){
        if(owner.socket) {    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(data)
                .getBuffer()
            );
        }
    }
}

export class PacketSteamArchivement extends Packet {
    public override type = ServerPacketType.SteamArchivement;
    
    public override send(owner: Player, archivementName: string){
        if(owner.socket) {    
            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(archivementName)
                .getBuffer()
            );
        }
    }
}

export let packetCharacterList = new PacketCharacterList();
export let packetCreateCharacter = new PacketCreateCharacter();
export let packetFullCharacter = new PacketFullCharacter();
export let packetUnstuck = new PacketUnstuck();
export let packetSystemMessage = new PacketSystemMessage();
export let packetPlayerStats = new PacketPlayerStats();
export let packetEquip = new PacketEquip();
export let packetDesequip = new PacketDesequip();
export let packetAutoAttack = new PacketAutoAttack();
export let packetUpdateStats = new PacketUpdateStats();
export let packetSkillExperience = new PacketSkillExperience();
export let packetStartSkinning = new PacketStartSkinning();
export let packetCancelInteract = new PacketCancelInteract();
export let packetPlayerStatics = new PacketPlayerStatics();
export let packetUpdateTick = new PacketUpdateTick();
export let packetFinishCollect = new PacketFinishCollect();
export let packetRequestParty = new PacketRequestParty();
export let packetPartyData = new PacketPartyData();
export let packetChatMessage = new PacketChatMessage();
export let packetLoadLevel = new PacketLoadLevel();
export let packetRequestTrade = new PacketRequestTrade();
export let packetChangeStatusTrade = new PacketChangeStatusTrade();
export let packetUpdateSkillInfo = new PacketUpdateSkillInfo();
export let packetGoTo = new PacketGoTo();
export let packetSay = new PacketSay();
export let packetJoinGuild = new PacketJoinGuild();
export let packetGuildsList = new PacketGuildsList();
export let packetGuildData = new PacketGuildData();
export let packetSteamArchivement = new PacketSteamArchivement();
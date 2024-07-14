import { Packet } from "./packet";
import { Entity, ByteBuffer, Vector3, QueueBuffer } from "@engine";
import { DamageType, HealType, ServerPacketType } from "@enums";

export class PacketCreateEntity extends Packet {
    public override type = ServerPacketType.CreateEntity;

    public override send(owner: Entity, entity: Entity){
        if(entity.socket){
            const buffer = new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putString(owner.name)
            .putString(JSON.stringify({ staticMesh: owner.customVisual ? owner.customVisual : owner.namespace }))
            .putInt32(owner.getStates(entity, "PacketCreateEntity").getCurrentFlags())              
            .putInt32(owner.transform.position.x)
            .putInt32(owner.transform.position.y)
            .putInt32(owner.transform.position.z)
            .putInt32(owner.maxLife)
            .putInt32(owner.life)
            .putInt32(owner.speed)
            .putInt32(owner.buffsDebuffsState.getCurrentFlags())  
            .putString(owner.guild ? owner.guild.Name : "")

            entity.socket.send(buffer.getBuffer());
        }
    }
}

export class PacketUpdateEntity extends Packet {
    public override type = ServerPacketType.UpdateEntity;

    public override send(owner: Entity, entity: Entity, tp: boolean = false){
        if(owner.socket && !owner.isDead && !entity.removed && owner.mapIndex !== entity.mapIndex){
            const buffer = new ByteBuffer()
            .putByte(this.type)
            .putId(entity.mapIndex)
            .putInt32(entity.getStates(owner, "PacketUpdateEntity").getCurrentFlags())            
            .putInt32(entity.transform.position.x)
            .putInt32(entity.transform.position.y)
            .putInt32(entity.transform.position.z)
            .putInt32(entity.life)
            .putInt32(owner.buffsDebuffsState.getCurrentFlags());

            QueueBuffer.addBuffer(owner.mapIndex, buffer);
        }
    }
}

export class PacketRemoveEntity extends Packet {
    public override type = ServerPacketType.RemoveEntity;

    public override send(owner: Entity, entity: Entity){
        if(owner.socket && entity.mapIndex !== ""){
            owner.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(entity.mapIndex)
            .getBuffer());
        }
    }
}

export class PacketEntityDie extends Packet {
    public override type = ServerPacketType.Die;

    public override send(owner: Entity, entity: Entity){
        if(entity && entity.socket) {
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .getBuffer());
        }
    }
}

export class PacketEventEntity extends Packet {
    public override type = ServerPacketType.SyncEvent;

    public override send(owner: Entity, entity: Entity, type: number){
        if(entity.socket && owner.mapIndex != entity.mapIndex){
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putByte(type)
            .getBuffer());
        }
    }
}

export class PacketEventReviveEntity extends Packet {
    public override type = ServerPacketType.SyncEvent;

    public override send(owner: Entity, type: number){
        if(owner && owner.socket){
            owner.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putByte(type)
            .getBuffer());
        }
    }
}

export class PacketPlayMontageEntity extends Packet {
    public override type = ServerPacketType.PlayMontage;

    public override send(owner: Entity, entity: Entity, index: number){
        if(entity.socket && owner.mapIndex != entity.mapIndex){
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putInt32(index)
            .getBuffer());
        }
        else if(owner.socket){
            owner.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putInt32(index)
            .getBuffer());
        }
    }
}

export class PacketActionEntity extends Packet {
    public override type = ServerPacketType.Action;

    public override send(owner: Entity, entity: Entity, index: number){
        if(entity.socket){
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putByte(index)
            .getBuffer());
        }
    }
}

export class PacketActionAreaEntity extends Packet {
    public override type = ServerPacketType.ActionArea;

    public override send(owner: Entity, entity: Entity, data : { index: number, position: Vector3 }){
        if(entity.socket){
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putByte(data.index)
            .putInt32(data.position.x)
            .putInt32(data.position.y)
            .putInt32(data.position.z)
            .getBuffer());
        }
    }
}

export class PacketSelectTargetEntity extends Packet {
    public override type = ServerPacketType.SelectTarget;

    public override send(owner: Entity, entity: Entity, target: string){
        if(entity.socket){
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .putId(target)
            .getBuffer());
        }
    }
}

export class PacketCancelTargetEntity extends Packet {
    public override type = ServerPacketType.CancelTarget;

    public override send(owner: Entity, entity: Entity){
        if(entity.socket && owner.mapIndex != entity.mapIndex){
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putId(owner.mapIndex)
            .getBuffer());
        }
    }
}

export class PacketTakeDamageEntity extends Packet {
    public override type = ServerPacketType.TakeDamage;

    public send(
        owner: Entity, 
        entity: Entity, 
        data: { damage: number, damageType: DamageType, causer: Entity }
    ){
        if(entity.socket){
            const buffer = new ByteBuffer()
                .putByte(this.type)
                .putId(owner.mapIndex)
                .putId(data.causer.mapIndex)
                .putInt32(data.damage)
                .putByte(data.damageType);

            QueueBuffer.addBuffer(entity.mapIndex, buffer);
        }
    }
}

export class PacketTakeMissEntity extends Packet {
    public override type = ServerPacketType.TakeMiss;

    public send(owner: Entity, entity: Entity){
        if(entity.socket){
            const buffer = new ByteBuffer()
                .putByte(this.type)
                .putId(owner.mapIndex);

            QueueBuffer.addBuffer(entity.mapIndex, buffer);
        }
    }
}

export class PacketHealEntity extends Packet {
    public override type = ServerPacketType.Heal;

    public send(owner: Entity, entity: Entity, data: { caster?: Entity, value: number, type: HealType }){
        if(entity.socket){
            if(!data.type)
                data.type = HealType.Life;

            const buffer = new ByteBuffer()
                .putByte(this.type)
                .putId(owner.mapIndex)
                .putInt32(data.value)                
                .putId((data.caster) ? data.caster.mapIndex : "")
                .putByte(data.type);

            QueueBuffer.addBuffer(entity.mapIndex, buffer);
        }
    }
}

export class PacketDissolveEntity extends Packet {
    public override type = ServerPacketType.Dissolve;

    public send(owner: Entity, entity: Entity){
        if(entity.socket){
            entity.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putId(owner.mapIndex)
                .getBuffer());
        }
    }
}

export let packetCreateEntity = new PacketCreateEntity();
export let packetUpdateEntity = new PacketUpdateEntity();
export let packetRemoveEntity = new PacketRemoveEntity();
export let packetEntityDie = new PacketEntityDie();
export let packetEventEntity = new PacketEventEntity();
export let packetEventReviveEntity = new PacketEventReviveEntity();
export let packetPlayMontageEntity = new PacketPlayMontageEntity();
export let packetActionEntity = new PacketActionEntity();
export let packetSelectTargetEntity = new PacketSelectTargetEntity();
export let packetCancelTargetEntity = new PacketCancelTargetEntity();
export let packetTakeDamageEntity = new PacketTakeDamageEntity();
export let packetTakeMissEntity = new PacketTakeMissEntity();
export let packetHealEntity = new PacketHealEntity();
export let packetActionAreaEntity = new PacketActionAreaEntity();
export let packetDissolveEntity = new PacketDissolveEntity();
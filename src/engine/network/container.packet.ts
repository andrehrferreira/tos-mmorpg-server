import { Packet } from "./packet";
import { ByteBuffer, ContainerType, Entity, WindowType } from "@engine";
import { ServerPacketType } from "@enums";

export class PacketOpenContainer extends Packet {
    public override type = ServerPacketType.OpenContainer;

    public send(owner: Entity, data: {
        containerId: string, 
        type: ContainerType,
        entityId: string
    }){
        if(owner.socket){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putByte(data.type)
                .putString(data.containerId)
                .putId(data.entityId)
                .getBuffer());
        }
    }
}

export class PacketCloseContainer extends Packet {
    public override type = ServerPacketType.CloseContainer;

    public send(owner: Entity, type: ContainerType){
        if(owner.socket){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putByte(type)
                .getBuffer());
        }
    }
}

export class PacketAddItemContainer extends Packet {
    public override type = ServerPacketType.AddItemContainer;
    
    public override send(
        owner: Entity, 
        data: { 
            containerId: string, 
            slotId: number, 
            itemRef: string,
            itemName: string,
            amount: number,
            itemRarity: number,
            goldCost: number,
            weight: number
        },
        showHint: boolean = true
    ){
        if(owner.socket){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putString(data.containerId)
            .putInt32(data.slotId)
            .putString(data.itemRef)
            .putString(data.itemName)
            .putInt32(data.amount)
            .putByte(data.itemRarity)
            .putInt32(data.goldCost)
            .putInt32(data.weight)
            .putBool(showHint)

            owner.socket.send(buffer.getBuffer());
        }
    }
}

export class PacketRemoveItemContainer extends Packet {
    public override type = ServerPacketType.RemoveItemContainer;
    
    public override send(
        owner: Entity, 
        data: { 
            containerId: string, 
            slotId: number, 
            itemRef: string
        }
    ){
        if(owner.socket){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putString(data.containerId)
            .putInt32(data.slotId)
            .putString(data.itemRef)

            owner.socket.send(buffer.getBuffer());
        }
    }
}

export class PacketChangeItemAmountContainer extends Packet {
    public override type = ServerPacketType.ChangeAmountItemContainer;
    
    public override send(
        owner: Entity, 
        data: { 
            containerId: string, 
            slotId: number, 
            amount: number
        }
    ){
        if(owner.socket){
            const buffer = new ByteBuffer()
            .putByte(this.type)            
            .putString(data.containerId)
            .putInt32(data.slotId)
            .putInt32(data.amount)

            owner.socket.send(buffer.getBuffer());
        }
    }
}

export let packetOpenContainer = new PacketOpenContainer();
export let packetCloseContainer = new PacketCloseContainer();
export let packetAddItemContainer = new PacketAddItemContainer();
export let packetRemoveItemContainer = new PacketRemoveItemContainer();
export let packetChangeItemAmountContainer = new PacketChangeItemAmountContainer();

import { Packet } from "./packet";
import { ByteBuffer, CraftRecipe, Entity, Player, WindowType } from "@engine";
import { ServerPacketType, SkillName } from "@enums";

export class PacketOpenWindow extends Packet {
    public override type = ServerPacketType.OpenWindow;

    public send(owner: Entity, type: WindowType){
        if(owner && owner.socket){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putByte(type)
                .getBuffer());
        }
    }
}

export class PacketCloseWindow extends Packet {
    public override type = ServerPacketType.CloseWindow;

    public send(owner: Entity, type: WindowType){
        if(owner && owner.socket){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putByte(type)
                .getBuffer());
        }
    }
}

export class PacketCraftingList extends Packet {
    public override type = ServerPacketType.CraftingList;

    public send(owner: Entity, skillName: SkillName){
        if(owner && owner.socket && CraftRecipe.RecipesList[skillName]){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putString(JSON.stringify(CraftRecipe.RecipesList[skillName]))
                .getBuffer());
        }
    }
}

export class PacketCraftingLog extends Packet {
    public override type = ServerPacketType.CraftLog;

    public send(owner: Entity, message: string, status: boolean){
        if(owner && owner.socket){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putString(message)
                .putBool(status)
                .getBuffer());
        }
    }
}

export class PacketVendorInteract extends Packet {
    public override type = ServerPacketType.VendorWindow;

    public send(owner: Entity, data: any){
        if(owner && owner.socket && typeof data === "object"){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putString(JSON.stringify(data))
                .getBuffer());
        }
    }
} 

export class PacketOpenTradeWindow extends Packet {
    public override type = ServerPacketType.OpenTradeWindow;

    public send(owner: Entity, data: {
        tradeId: string
        ownerContainer: string, 
        otherContainer: string,
        isOwner: boolean
    }){
        if(owner && owner.socket){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putString(data.tradeId)
                .putString(data.ownerContainer)
                .putString(data.otherContainer)
                .putBool(data.isOwner)
                .getBuffer());
        }
    }
}

export class PacketSpecialMessage extends Packet {
    public override type = ServerPacketType.SpecialMessage;

    public send(owner: Entity, message: string){
        if(owner && owner.socket){
            owner.socket.send(new ByteBuffer()
                .putByte(this.type)
                .putString(message)
                .getBuffer());
        }
    }
}

export class PacketTooltip extends Packet {
    public override type = ServerPacketType.Tooltip;
    
    public override send(owner: Player, itemRef: string, data: string){
        if(owner.socket && !owner.tooltipSended.includes(itemRef)){     
            owner.tooltipSended.push(itemRef);

            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(itemRef)
                .putString(JSON.stringify(data))
                .getBuffer()
            );
        }
    }
}

export class PacketRefreshTooltip extends Packet {
    public override type = ServerPacketType.Tooltip;
    
    public override send(owner: Player, itemRef: string, data: string){
        if(owner.socket){     
            owner.tooltipSended.push(itemRef);

            owner.socket.send(
                new ByteBuffer()
                .putByte(this.type)
                .putString(itemRef)
                .putString(JSON.stringify(data))
                .getBuffer()
            );
        }
    }
}

export let packetOpenWindow = new PacketOpenWindow();
export let packetCloseWindow = new PacketCloseWindow();
export let packetCraftingList = new PacketCraftingList();
export let packetVendorInteract = new PacketVendorInteract();
export let packetOpenTradeWindow = new PacketOpenTradeWindow();
export let packetCraftingLog = new PacketCraftingLog();
export let packetSpecialMessage = new PacketSpecialMessage();
export let packetTooltip = new PacketTooltip();
export let packetRefreshTooltip = new PacketRefreshTooltip();
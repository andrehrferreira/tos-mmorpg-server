import { ByteBuffer } from "../core/bytebuffer";
import { ServerPacketType, ClientPacketType } from "../../enums";
import { Entity } from "../entities";

export class Packet {
    public static packetsServer: Map<ServerPacketType, Packet> = new Map<ServerPacketType, Packet>();
    public static packetsClient: Map<ClientPacketType, Packet> = new Map<ClientPacketType, Packet>();

    public type: ServerPacketType | ClientPacketType;

    public data(){
        return null;
    }

    public send(entity: Entity, data: any = null, extra: any = null){
        if(entity.socket)
            entity.socket.send(new ByteBuffer()
            .putByte(this.type)
            .putString(JSON.stringify(data))
            .getBuffer());
    }

    public sendBuffer(socket: any, data: any = null, extra: any = null){
        if(socket)
            socket.send(data);
    }

    public static send(type: ServerPacketType, socket: any, data: any = null){
        if(Packet.packetsServer.has(type))
            Packet.packetsServer.get(type).send(socket, data);
    }
}

export class PacketDirectSocket extends Packet {
    public override send(socket: any, data: any = null){
        if(socket)
            socket.send(new ByteBuffer().putByte(this.type).putString(data).getBuffer());
    }
}
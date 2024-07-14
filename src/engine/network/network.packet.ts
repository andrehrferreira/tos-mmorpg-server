import { PacketDirectSocket } from "./packet";
import { ServerPacketType } from "@enums";

export class PacketPong extends PacketDirectSocket {
    public override type = ServerPacketType.Pong;
}

export class PacketLogin extends PacketDirectSocket {
    public override type = ServerPacketType.LoginToken;
}

export class PacketEnterToWorld extends PacketDirectSocket {
    public override type = ServerPacketType.EnterToWorld;
}

export class PacketGetServerList extends PacketDirectSocket {
    public override type = ServerPacketType.GetServerList;
}

export class PacketMapData extends PacketDirectSocket {
    public override type = ServerPacketType.LoadMapData;
}

export class PacketCreateCharacterError extends PacketDirectSocket {
    public override type = ServerPacketType.CreateCharacterError;
}

export class PacketCreateCharacterFinish extends PacketDirectSocket {
    public override type = ServerPacketType.CreateCharacterFinish;
}

export let packetPong = new PacketPong();
export let packetLogin = new PacketLogin();
export let packetEnterToWorld = new PacketEnterToWorld();
export let packetGetServerList = new PacketGetServerList();
export let packetMapData = new PacketMapData();
export let packetCreateCharacterError = new PacketCreateCharacterError();
export let packetCreateCharacterFinish = new PacketCreateCharacterFinish();
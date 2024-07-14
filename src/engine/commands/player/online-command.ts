import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("online", Plevel.Player, (params: string[], socket: any, server: any) => { 
    Player.refreshOnlinePlayer();   
    packetSystemMessage.sendDirectSocket(socket, `There are currently ${Player.onlinePlayers.size} players online.`);
});
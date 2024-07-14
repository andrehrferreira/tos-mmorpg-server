import { Logger } from "@nestjs/common";
import { Plevel } from "@enums";
import { packetSystemMessage, packetGoTo } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";


Commands.add("kick", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const commandSender = Maps.getEntity(socket, socket.entityId);
        const playerTagName = params[0];
        const player = Player.getPlayerByTag(playerTagName);
        
        if(player && commandSender){
            player.disconnect();
            packetSystemMessage.sendDirectSocket(socket, `You disconnected the player ${playerTagName}`);
            Logger.verbose(`The ${commandSender.name} kick ${playerTagName}`);
        }     
        else
            packetSystemMessage.sendDirectSocket(socket, `Player ${playerTagName} does not exist or is not currently available`);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
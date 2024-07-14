import { Plevel } from "@enums";
import { packetSystemMessage, packetGoTo } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("goto", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const commandSender = Maps.getEntity(socket, socket.entityId);
        const playerTagName = params[0];
        const player = Player.getPlayerByTag(playerTagName);
        
        if(player && commandSender){
            packetGoTo.send(commandSender, { 
                levelName: player.map.namespace, 
                x: player.transform.position.x,
                y: player.transform.position.y,
                z: player.transform.position.z
            });

            packetSystemMessage.sendDirectSocket(socket, `You went to player ${playerTagName}'s position`);
        }     
        else
            packetSystemMessage.sendDirectSocket(socket, `Player ${playerTagName} does not exist or is not currently available`);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
}, "gt");
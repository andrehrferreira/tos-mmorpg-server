import { Plevel } from "@enums";
import { packetSystemMessage, packetGoTo } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("pull", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const commandSender = Maps.getEntity(socket, socket.entityId);
        const playerTagName = params[0];
        const player = Player.getPlayerByTag(playerTagName);
        
        if(player && commandSender) {
            player.transform.position.x = commandSender.transform.position.x;
            player.transform.position.y = commandSender.transform.position.y;
            player.transform.position.z = commandSender.transform.position.z;
            player.save();
            player.saveToDatabase();

            packetGoTo.send(player, { 
                levelName: commandSender.map.namespace, 
                x: commandSender.transform.position.x,
                y: commandSender.transform.position.y,
                z: commandSender.transform.position.z
            });

            packetSystemMessage.sendDirectSocket(socket, `Player ${playerTagName} was pulled into position`);
        }     
        else
            packetSystemMessage.sendDirectSocket(socket, `Player ${playerTagName} does not exist or is not currently available`);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
}, "gt");
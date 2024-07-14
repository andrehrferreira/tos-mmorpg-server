import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("removeparty", Plevel.Player, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const commandSender = Maps.getEntity(socket, socket.entityId);
        const playerTagName = params[0];
        const player = Player.getPlayerByTag(playerTagName);
        
        if(player && player.party && player.party.owner.characterId === commandSender.characterId){
            player.leaveParty();
            packetSystemMessage.sendDirectSocket(socket, `You removed ${player.name} from the group`);
            packetSystemMessage.sendDirectSocket(player.socket, `${commandSender.name} removed you from the party`);        
        }                  
        else
            packetSystemMessage.sendDirectSocket(socket, `Unable to remove member ${playerTagName} from the party`);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
}, "w");
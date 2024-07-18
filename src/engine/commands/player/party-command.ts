import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("party", Plevel.Player, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        
        if(entity.targetActor && entity.targetActor instanceof Player)
            (entity as Player).requestJoinParty(entity.targetActor.characterId);        
        else 
            packetSystemMessage.sendDirectSocket(socket, `Select a target to party`);  
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
}, "p");
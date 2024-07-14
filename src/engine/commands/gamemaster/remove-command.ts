import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";

Commands.add("remove", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        
        if(entity.targetActor && entity.targetActor.respawn)
            entity.targetActor.respawn.removeRespawn();        
        else 
            packetSystemMessage.sendDirectSocket(socket, `Select a target to remove`);        
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
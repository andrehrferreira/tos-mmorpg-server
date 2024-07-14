import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";

Commands.add("kill", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        
        if(entity.targetActor)
            entity.targetActor.die(entity);        
        else 
            packetSystemMessage.sendDirectSocket(socket, `Select a target to kill`);        
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
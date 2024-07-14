import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("leave", Plevel.Player, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        
        if(entity && entity.party)
            (entity as Player).leaveParty();               
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
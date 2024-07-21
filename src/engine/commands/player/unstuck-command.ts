import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";
import { Commands } from "../commands";

import { Maps } from "../../maps";
import { Player } from "../../entities";

Commands.add("unstuck", Plevel.Player, (params: string[], socket: any, server: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        
        if(entity){
            if(entity.isDead){
                (entity as Player).life = 100;
                (entity as Player).revive(); 
            }

            (entity as Player).save();
            (entity as Player).saveToDatabase();

            const map = Maps.getMap("1_Tutorial");
            map.teleportTo(entity as Player, "Start");     
        }     
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
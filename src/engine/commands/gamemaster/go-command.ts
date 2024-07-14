import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("go", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        const mapName = params[0];
        const mapWaypoint = (params[1]) ? params[1] : "Start";
        
        if(entity){
            const map = Maps.getMap(mapName);

            if(mapName !== undefined && mapName !== null){
                if(map)
                    map.teleportTo(entity as Player, mapWaypoint);            
                else
                    packetSystemMessage.sendDirectSocket(socket, `Map '${mapName}' not exists.`);
            }
        }            
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}.`);
    }
});
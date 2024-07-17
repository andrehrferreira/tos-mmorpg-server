import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Entity } from "../../entities/entity";
import { Commands } from "../commands";

Commands.add("respawn", Plevel.Administrator, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        const entityName = params[0];
        const newEntity = Entity.create(entityName);

        if(newEntity)
            entity.map.createRespawn(entity.transform.position.copy(), (newEntity.respawnCustomList) ? newEntity.respawnCustomList : entityName);        
        else 
            packetSystemMessage.sendDirectSocket(socket, `Creature '${entityName}' not exists`);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Maps } from "../../maps";
import { Entity } from "../../entities/entity";
import { Commands } from "../commands";

Commands.add("summon", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const commandSender = Maps.getEntity(socket, socket.entityId);
        const creatureName = params[0];
        const creatureAmount = params.length > 1 ? parseInt(params[1]) : 1;

        for(let i = 0; i < creatureAmount; i++) {
            const newEntity = Entity.create(creatureName);

            if(newEntity){
                const angle = Math.random() * 2 * Math.PI;
                const radius = Math.random() * 2000;
                const offsetX = radius * Math.cos(angle);
                const offsetY = radius * Math.sin(angle);

                newEntity.transform = commandSender.transform.copy();
                newEntity.respawnPosition = commandSender.transform.position.copy();
                newEntity.transform.position.x += offsetX;
                newEntity.transform.position.y += offsetY;

                commandSender.map.joinMap(newEntity);
            }
            else {
                packetSystemMessage.sendDirectSocket(socket, `Creature '${creatureName}' not exists`);
            }
        }
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
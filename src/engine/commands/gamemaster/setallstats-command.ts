import { Plevel } from "@enums";
import { packetSystemMessage, packetUpdateStats } from "@network";
import { Player } from "../../entities/player";
import { Commands } from "../commands";
import { Maps } from "../../maps";

Commands.add("setallstats", Plevel.GameMaster, (params: string[], socket: any, server: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        const value = parseInt(params[0]);

        if(value > 0 && entity){
            entity.str = value; 
            entity.dex = value; 
            entity.int = value; 
            entity.vig = value; 
            entity.agi = value; 
            entity.luc = value; 
            entity.calculateStats();
            entity.restoreStats();
            entity.save();

            packetUpdateStats.send(entity as Player);
            packetSystemMessage.sendDirectSocket(socket, `All your statuses have been changed to ${value}`);
        }
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
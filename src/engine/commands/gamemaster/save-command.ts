import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("save", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        Player.players.forEach((player) => {
            player.save();
            player.saveToDatabase();
            packetSystemMessage.sendDirectSocket(player.socket, `Your character has been saved in the database`);
        });  
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
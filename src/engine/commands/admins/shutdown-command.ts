import { Plevel } from "@enums";
import { packetSystemMessage, packetSpecialMessage } from "@network";

import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("shutdown", Plevel.Administrator, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        let timer = 60;

        Player.players.forEach((player) => {
            packetSystemMessage.sendDirectSocket(player.socket, `The server will restart in 60s`);
            packetSpecialMessage.send(player, `The server will restart in 60s`);
        });  

        let timerEvent = setInterval(() => {
            timer--;

            if(timer % 10 === 0 || timer < 10){
                Player.players.forEach((player) => {
                    packetSystemMessage.sendDirectSocket(player.socket, `The server will restart in ${timer}s`);
                    packetSpecialMessage.send(player, `The server will restart in ${timer}s`);
                });
            }

            if(timer === 0){
                clearInterval(timerEvent);
                Player.players.forEach((player) => player.disconnect());
                setTimeout(() => { process.exit(1); }, 10000);
            }
        }, 1000);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
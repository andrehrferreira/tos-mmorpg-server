import { Logger } from "@nestjs/common";
import { Plevel } from "@enums";
import { packetSystemMessage, packetGoTo } from "@network";
import { AuthService } from "@services";
import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";


Commands.add("ban", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const commandSender = Maps.getEntity(socket, socket.entityId);
        const playerTagName = params[0];
        const playerMessage = params.slice(1).join(" ");
        const player = Player.getPlayerByTag(playerTagName);
         
        if(player && commandSender && playerMessage){
            await (services.authService as AuthService).banAccount(player.accountId, playerMessage, (commandSender as Player).accountId);
            
            player.disconnect();

            packetSystemMessage.sendDirectSocket(socket, `You ban the player ${playerTagName}`);
            Logger.verbose(`The ${commandSender.name} ban ${playerTagName}`);
        }     
        else if(!playerMessage)
            packetSystemMessage.sendDirectSocket(socket, `To ban the player, please provide the reason.`);
        else
            packetSystemMessage.sendDirectSocket(socket, `Player ${playerTagName} does not exist or is not currently available`);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
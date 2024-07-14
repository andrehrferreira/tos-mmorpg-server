import { ChatChannel, Plevel } from "@enums";
import { packetSystemMessage, packetChatMessage } from "@network";
import { GUID } from "@utils";

import { Maps } from "../../maps";
import { Commands } from "../commands";
import { Player } from "../../entities";

Commands.add("whisper", Plevel.Player, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const commandSender = Maps.getEntity(socket, socket.entityId);
        const playerTagName = params[0];
        const playerMessage = params.slice(1).join(" ");
        const player = Player.getPlayerByTag(playerTagName);
        
        if(player && commandSender){
            const messageId = GUID.Generate();

            packetChatMessage.send(player, {
                senderName: commandSender.name,
                entityId: commandSender.mapIndex,
                channel: ChatChannel.Whisper,
                messageRef: messageId,
                message: playerMessage
            });

            packetChatMessage.send(commandSender, {
                senderName: commandSender.name,
                entityId: commandSender.mapIndex,
                channel: ChatChannel.Whisper,
                messageRef: messageId,
                message: playerMessage
            });
        }     
        else
            packetSystemMessage.sendDirectSocket(socket, `Player ${playerTagName} does not exist or is not currently available`);
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
}, "w");
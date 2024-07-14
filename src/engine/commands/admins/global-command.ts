import { Plevel } from "@enums";
import { packetSystemMessage, packetSpecialMessage } from "@network";
import { Commands } from "../commands";

Commands.add("global", Plevel.Player, (params: string[], socket: any, server: any) => {  
    const message = params.slice(1).join(" ");

    for(let key in server.clients) {
        packetSystemMessage.sendDirectSocket(server.clients[key], message);
        packetSpecialMessage.send(server.clients[key], message);
    }
        
}, "g");
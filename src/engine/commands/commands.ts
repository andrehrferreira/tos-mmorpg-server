import { Plevel } from "@enums";
import { packetSystemMessage } from "@network";

class CommandContainer {
    public plevel: Plevel;
    public cb: Function;

    constructor(plevel: Plevel, cb: Function){
        this.plevel = plevel;
        this.cb = cb;
    }
}

export class Commands {
    public static commands: Map<string, CommandContainer> = new Map<string, CommandContainer>();
    public static access: Map<string, Plevel> = new Map<string, Plevel>();

    public static parseCommand(command: string, socket: any, server: any, services: any){
        const parsed = command.replace("/", "").toLowerCase();
        const commandParsed = parsed.split(" ").length > 0 ? 
        parsed.split(" ") : [parsed];

        const params = (commandParsed.length > 1) ? 
        commandParsed.slice(1, commandParsed.length) : [];
        
        if(Commands.commands.has(commandParsed[0])) {
            const cc = Commands.commands.get(commandParsed[0]);

            if(socket.plevel < cc.plevel)
                packetSystemMessage.sendDirectSocket(socket, "You do not have the permission to execute this command");
            else if(typeof cc.cb === "function")
                cc.cb(params, socket, server, services);
        } 
        else {
            packetSystemMessage.sendDirectSocket(socket, "Command not exits");
        }           
    }

    public static add(command: string, plevel: Plevel, callback: any, alias: string = null){
        if(!Commands.commands.has(command))
            Commands.commands.set(command, new CommandContainer(plevel, callback));
        
        if(!Commands.commands.has(alias) && alias !== "" && alias !== null)
            Commands.commands.set(alias, new CommandContainer(plevel, callback));
    }
}
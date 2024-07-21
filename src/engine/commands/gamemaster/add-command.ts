import { Plevel } from "@enums";
import { packetSystemMessage, packetTooltip } from "@network";
import { ItemsService } from "@services";
import { Commands } from "../commands";
import { Maps } from "../../maps";
import { Equipament, Items, MountItem, PetItem, PowerScroll } from "../../items";
import { Player } from "../../entities";

Commands.add("add", Plevel.GameMaster, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        const itemName = params[0];
        const itemAmount = params.length > 1 ? parseInt(params[1]) : 1;

        if(Items.hasItemBase(itemName) && entity){
            const baseItem = Items.createItem(itemName, null, entity.name);
            let props = null;
            
            if(
                baseItem instanceof Equipament || baseItem instanceof PowerScroll || 
                baseItem instanceof PetItem || baseItem instanceof MountItem
            ) {
                props = baseItem.serealize();
            }
            
            const itemRef = await (services.itemsService as ItemsService).createItem(
                entity.inventory.containerId,
                entity.characterId,
                baseItem.Namespace,
                itemAmount,
                "command",
                `${entity.name} [${entity.characterId}]`,
                props
            );

            const item = Items.getItemByRef(itemRef);
            
            if(
                item instanceof Equipament || item instanceof PowerScroll || 
                item instanceof PetItem || item instanceof MountItem
            ) {
                packetTooltip.send(entity as Player, itemRef, item.serealize()); 
            }

            entity.inventory.addItem(itemRef, itemAmount, -1);
            entity.save();
        }
        else if(!entity){
            packetSystemMessage.sendDirectSocket(socket, `Invalid Entity`);
        }   
        else {
            packetSystemMessage.sendDirectSocket(socket, `Item '${itemName}' not exists`);
        }
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
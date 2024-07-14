import { Plevel } from "@enums";
import { packetSystemMessage, packetTooltip } from "@network";
import { ItemsService } from "@services";
import { Equipament, Items, PowerScroll, PetItem, MountItem } from "../../items";
import { Player } from "../../entities";

import { Maps } from "../../maps";
import { Commands } from "../commands";

Commands.add("give", Plevel.Administrator, async (params: string[], socket: any, server: any, services: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        const itemName = params[0];
        const itemAmount = params.length > 1 ? parseInt(params[1]) : 1;

        if(Items.hasItemBase(itemName) && entity.targetActor){
            const baseItem = Items.createItem(itemName, null, entity.targetActor.name);
            
            const itemRef = await (services.itemsService as ItemsService).createItem(
                entity.inventory.containerId,
                entity.characterId,
                baseItem.Namespace,
                itemAmount,
                "command",
                `${entity.name} [${entity.characterId}]`,
                baseItem.serealize()
            );

            const item = Items.getItemByRef(itemRef);
            
            if(
                item instanceof Equipament || item instanceof PowerScroll || 
                item instanceof PetItem || item instanceof MountItem
            ) {
                packetTooltip.send(entity as Player, itemRef, item.serealize()); 
            }

            packetSystemMessage.sendDirectSocket(entity.targetActor.socket, `${entity.name} gave the item ${itemName} to you`);
            packetSystemMessage.sendDirectSocket(socket, `${entity.targetActor.name} received the item`);
            entity.targetActor.inventory.addItem(itemRef, itemAmount, -1);
            entity.targetActor.save();
        }
        else {
            packetSystemMessage.sendDirectSocket(socket, `Item '${itemName}' not exists`);
        }       
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});
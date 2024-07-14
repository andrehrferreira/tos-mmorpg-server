import { 
    packetAddItemContainer, 
    packetDissolveEntity, 
    packetOpenContainer, 
    packetPlayMontageEntity, 
    packetStartSkinning,
    packetCraftingList, 
    packetTooltip,
    packetVendorInteract
} from "@network";

import { ContainerType, Containers } from "./core";
import { Player } from "./entities";
import { Maps } from "./maps";
import { CraftRecipe, Equipament, BaseVendor, PowerScroll, PetItem, MountItem } from ".";
import { getSkillNameFromFormattedString } from "@enums";

export enum InteractType {
    Stash,
    Loot,
    Gathering,
    Crafting,
    Vendor
}

export abstract class Interact {
    public static interacts: Map<InteractType, Interact> = new Map<InteractType, Interact>();

    public static interact(player: Player, type: InteractType, payload: string){
        if(Interact.interacts.has(type))
            Interact.interacts.get(type).onInteract(player, payload);
    }

    public abstract onInteract(player: Player, payload: string);
}

export class StashInteract extends Interact {
    public onInteract(player: Player, payload: string) {
        const containerId = `${player.characterId}::${payload}`.substring(0, 12);
        
        packetOpenContainer.send(player, {            
            containerId, 
            type: ContainerType.Stash,
            entityId: player.mapIndex
        });

        const container = Containers.get(containerId);

        if(container){
            container.slots?.forEach((item, slotId) => {
                packetAddItemContainer.send(player, {
                    amount: item.Amount,
                    containerId: container.containerId,
                    itemName: item.Namespace,
                    itemRef: item.Ref,
                    slotId,
                    itemRarity: item.Rarity,
                    goldCost: item.GoldCost,
                    weight: item.Weight 
                });

                if(
                    item instanceof Equipament || item instanceof PowerScroll || 
                    item instanceof PetItem || item instanceof MountItem
                ) {
                    packetTooltip.send(player, item.Ref, item.serealize());
                }
            });
        }
    }
}

export class LootInteract extends Interact {
    public onInteract(player: Player, payload: string) {
        const entity = Maps.getEntity(player.socket, payload);

        if(entity){
            if(entity.loot && entity.loot.count() > 0){
                packetOpenContainer.send(player, {
                    containerId: entity.loot.containerId, 
                    type: ContainerType.Loot, 
                    entityId: entity.mapIndex
                });

                setTimeout(() => {
                    entity.loot.slots?.forEach((item, slotId) => {
                        packetAddItemContainer.send(player, {
                            amount: item.Amount,
                            containerId: entity.loot.containerId,
                            itemName: item.Namespace,
                            itemRef: item.Ref,
                            slotId,
                            itemRarity: item.Rarity,
                            goldCost: item.GoldCost,
                            weight: item.Weight 
                        });

                        if(
                            item instanceof Equipament || item instanceof PowerScroll || 
                            item instanceof PetItem || item instanceof MountItem
                        ) {
                            packetTooltip.send(player, item.Ref, item.serealize());
                        }
                    });
                }, 300);
            }
            else if(entity.skinnerTick > 0) {
                packetStartSkinning.send(player);
                player.areaOfInterece.map((entity) => packetPlayMontageEntity.send(player, entity, 12));
            }
            else {
                packetDissolveEntity.send(entity, player);
                entity.areaOfInterece.map((otherEntity) => packetDissolveEntity.send(entity, otherEntity));
                entity.destroy();
            }
        }
    }
}

export class GatheringInteract extends Interact {
    public onInteract(player: Player, payload: string) {
        player.startGathering(payload);
    }
}

export class CraftingInteract extends Interact {
    public onInteract(player: Player, payload: string) {
        const skill = getSkillNameFromFormattedString(payload); 

        if(skill && CraftRecipe.RecipesList[skill])
            packetCraftingList.send(player, skill);      
    }
}

export class VendorInteract extends Interact {
    public onInteract(player: Player, payload: string) {        
        if(BaseVendor.VendorList[payload]){
            player.vendorList = BaseVendor.VendorList[payload];
            packetVendorInteract.send(player, BaseVendor.VendorList[payload]);
        }              
    }
}

Interact.interacts.set(InteractType.Stash, new StashInteract());
Interact.interacts.set(InteractType.Loot, new LootInteract());
Interact.interacts.set(InteractType.Gathering, new GatheringInteract());
Interact.interacts.set(InteractType.Crafting, new CraftingInteract());
Interact.interacts.set(InteractType.Vendor, new VendorInteract());
import { IGatherable } from "@interfaces"
import { Stick, Wood } from "@items";
import { SkillName } from "@enums";
import { ItemsService } from "@services";
import { Maps } from "./maps";

import { 
    packetSystemMessage, 
    packetUpdateTick,
    packetFinishCollect
} from "@network";

import { 
    BloodBerry, CopperOre, DemonMushroom, EdgyRoot, 
    Fiber, FireFlower, Garlic, GoldOre, 
    IronOre, Items, Leaves, ManaMushroom, OilPlant, 
    Player, Random, RedFruit, Root, SilverOre, Stone, Tin, 
    Vector3, Weapon, WeaponType, YellowFlower,
    Cotton, IpeWood, OakWood, ArcaneFiber, MapleWood, 
    DarkOre, HeavenlyOre, Emerald, Diamond, Ametist, Ruby, 
    Sunstone, EquipamentType, ItemStates, Gemstone 
} from ".";

export enum GatherableType {
    Tree,
    Stone,
    Bush,
    BigStone,
    IronSpot,
    CooperSpot,
    SilverSpot,
    GoldSpot,
    Coal,
    DarkSpot,
    MithrilSpot,
    HeavenlySpot
}

export class Gatherable {
    public settings: IGatherable;
    public map: Maps = null;
    public entityRespawned: GatherableResource = null;

    constructor(settings: IGatherable){
        this.settings = settings;
        this.map = Maps.getMap(settings.map);

        if(settings.respawnOnStart)
            this.createEntity();
    }

    collected(){
        this.entityRespawned = null;
        this.settings.timeout = new Date().getTime() + (this.settings.timer * 1000);
        Maps
    }

    tick(){
        if(!this.entityRespawned && new Date().getTime() > this.settings.timeout){
            this.settings.timeout = new Date().getTime() + (this.settings.timer * 1000);
            this.createEntity();   
        }            
    }

    createEntity(){
        if(this.entityRespawned)
            this.entityRespawned.destroy();

        const randomIndex = Math.floor(Math.random() * this.settings.entities.length);
        const gatheringName = this.settings.entities[randomIndex];
        let newResource = GatherableResource.create(gatheringName, 0);

        if(newResource){
            newResource.settings = this.settings;
            newResource.map = this.map;
            this.entityRespawned = newResource;
            this.map.addFoliage(this, newResource);
        }           
    }
}

export class GatherableResource {
    public settings: IGatherable;
    public map: Maps = null;
    public foliageId: string;
    public tick: number = Random.MinMaxInt(10, 20);
    public instanceId: number;
    public resourcePerLevel = {};
    public resourceWithWrongEquipament: { new (): any };
    public indexGreatLevel = 0;
    public skill: SkillName = SkillName.None;
    public equipamentNeed: EquipamentType = EquipamentType.None;
    public consumeAllTicks: boolean = false;
    public maxSkillGain: number = 5;

    public static Resources: Map<GatherableType, { new (): any }> = new Map<GatherableType, { new (): any }>();

    public async collect(player: Player) {
        if(this.tick <= 0){
            packetFinishCollect.send(player, this.settings.foliageId);
            player.gatherableInteract = null;            
        }            

        if(this.tick > 0) {
            let position = new Vector3(this.settings.x, this.settings.y, this.settings.z);
            let skill = Math.abs(player.getSkillValue(this.skill));
            let bonusCollect = 1;
            let withoutEquipament = true;

            if(skill <= 1)
                skill = 1;

            let resouces = [{ Item: this.resourceWithWrongEquipament, Chance: 100 }];

            switch(this.equipamentNeed){
                case EquipamentType.AxeTool: 
                    if(player.axetool){
                        const axetoolItem = Items.getItemByRef(player.axetool.ItemRef);

                        if(axetoolItem && axetoolItem.Flags.dontHasFlag(ItemStates.Broken)){
                            resouces = this.resourcePerLevel[Math.round(skill)];
                            resouces = (!resouces) ? this.resourcePerLevel[this.indexGreatLevel] : resouces;
                            withoutEquipament = false;
                            bonusCollect = Math.round(Math.max(player.bonusCollectsWood, 0));
                        }
                    }
                break;
                case EquipamentType.PickaxeTool: 
                    if(player.pickaxetool) {
                        const pickaxetoolItem = Items.getItemByRef(player.pickaxetool.ItemRef);

                        if(pickaxetoolItem && pickaxetoolItem.Flags.dontHasFlag(ItemStates.Broken)){
                            resouces = this.resourcePerLevel[Math.round(skill)];
                            resouces = (!resouces) ? this.resourcePerLevel[this.indexGreatLevel] : resouces;
                            withoutEquipament = false;
                            bonusCollect = Math.round(Math.max(player.bonusCollectsMineral, 0));
                        }
                    }
                break;
                case EquipamentType.ScytheTool: 
                    if(player.scythetool){
                        const scythetoolItem = Items.getItemByRef(player.scythetool.ItemRef);

                        if(scythetoolItem && scythetoolItem.Flags.dontHasFlag(ItemStates.Broken)){
                            resouces = this.resourcePerLevel[Math.round(skill)];
                            resouces = (!resouces) ? this.resourcePerLevel[this.indexGreatLevel] : resouces;
                            withoutEquipament = false;
                            bonusCollect = Math.round(Math.max(player.bonusCollectsSkins, 0));
                        }
                    }
                break;
            }

            if(
                Array.isArray(resouces) && 
                resouces.length > 0 && 
                this.skill != SkillName.None &&
                position.distanceTo(player.transform.position) < 1000
            ) {
                const generateTicks = (this.consumeAllTicks) ? this.tick : 1;

                for(let i = 0; i < generateTicks; i++){
                    const itemBase = this.selectRandomItem(resouces);
                    const max = Math.max(itemBase.Max ? itemBase.Max : 1, skill);

                    if(bonusCollect < 0)
                        bonusCollect = 1;

                    let amount = Random.MinMaxInt(1, max) + Math.max(Math.round(max * (bonusCollect / 100)), 0);

                    if(amount < 1 || isNaN(amount) || itemBase instanceof Gemstone)
                        amount = 1;

                    const baseItem = new itemBase.Item();                    
                    const hasStackableItem = player.inventory.hasStackableItem(baseItem);
                    this.tick--;

                    const itemRef = await (player.socket.services.itemsService as ItemsService).createItem(
                        player.inventory.containerId,
                        player.characterId,
                        baseItem.Namespace,
                        amount,
                        "collect",
                        null, null, 
                        (hasStackableItem === -1)
                    );

                    packetUpdateTick.send(player, this.foliageId, this.tick);
                    packetSystemMessage.sendDirectSocket(player.socket, `You received +${amount}x ${baseItem.Name.trim()}`);
                    player.inventory.addItem(itemRef, amount);
                }
                
                if(!withoutEquipament){
                    const playerSkill = player.getSkillValue(this.skill);

                    if(playerSkill < this.maxSkillGain)
                        player.gainSkillExperiencie(this.skill);

                    switch(this.equipamentNeed){
                        case EquipamentType.AxeTool: Items.reduceDurability(player.axetool.ItemRef, player); break;
                        case EquipamentType.PickaxeTool: Items.reduceDurability(player.pickaxetool.ItemRef, player); break;
                        case EquipamentType.ScytheTool: Items.reduceDurability(player.scythetool.ItemRef, player); break;
                    }
                }
                    
                player.save();

                if(this.tick <= 0){
                    packetFinishCollect.send(player, this.settings.foliageId);

                    this.map.entitiesMapIndex.forEach((entity) => {
                        if(entity instanceof Player)
                            packetFinishCollect.send(entity as Player, this.settings.foliageId);
                    });
                }                
            }
        }
        else {
            packetFinishCollect.send(player, this.settings.foliageId);
            packetSystemMessage.sendDirectSocket(player.socket, `The resource has been exhausted and can no longer be collected`);

            this.map.entitiesMapIndex.forEach((entity) => {
                if(entity instanceof Player)
                    packetFinishCollect.send(entity as Player, this.settings.foliageId);
            });
        }
    }

    public static add(type: GatherableType, cls: any){
        GatherableResource.Resources.set(type, cls);
    }

    public static create(type: GatherableType, instanceId: number) : GatherableResource | null {
        if(GatherableResource.Resources.has(type)){
            const base = GatherableResource.Resources.get(type);
            const tmpResource = new base();
            tmpResource.instanceId = instanceId;
            return tmpResource;
        }

        return null
    }

    protected selectRandomItem(items: { Item: any; Chance: number, Max?: number }[]): { Item: { new (): any }, Max: number } {
        const totalChances = items.reduce((acc, curr) => acc + curr.Chance, 0);
        let random = Math.random() * totalChances;
        let Max = 1;

        for (const item of items) {
            random -= item.Chance;

            try{
                Max = item.Max;
            } catch { }

            if (random <= 0) 
                return { Item: item.Item, Max };
        }

        try{
            Max = items[items.length - 1].Max;
        } catch { }

        return { Item: items[items.length - 1].Item, Max: 1 };
    }

    public setEntityId(foliageId: string){
        this.foliageId = foliageId;
    }

    public destroy(){
        this.map.removeFoliage(this.foliageId);
    }
}

export class TreeSpot extends GatherableResource {
    public override skill = SkillName.Lumberjack;
    public override indexGreatLevel = 5;
    public override equipamentNeed = EquipamentType.AxeTool;
    public override resourceWithWrongEquipament = Stick;
    public override maxSkillGain = 5;

    public override resourcePerLevel = {
        1: [
            { Item: Stick, Chance: 16, Max: 20 }, 
            { Item: Wood, Chance: 80, Max: 20 }, 
            { Item: Leaves, Chance: 5, Max: 20 }
        ],
        2: [
            { Item: Stick, Chance: 5, Max: 20 }, 
            { Item: Wood, Chance: 90, Max: 20 }, 
            { Item: Leaves, Chance: 5, Max: 20 }
        ],
        3: [
            { Item: Stick, Chance: 10, Max: 20 }, 
            { Item: Wood, Chance: 80, Max: 20 }, 
            { Item: Leaves, Chance: 5, Max: 20 }, 
            { Item: IpeWood, Chance: 5, Max: 20 }
        ],
        4: [
            { Item: Wood, Chance: 75, Max: 20 },
            { Item: Root, Chance: 5, Max: 20 }, 
            { Item: IpeWood, Chance: 20, Max: 20 }
        ],
        5: [
            { Item: Wood, Chance: 30, Max: 20 },  
            { Item: IpeWood, Chance: 40, Max: 20 }, 
            { Item: OakWood, Chance: 25, Max: 20 }, 
            { Item: MapleWood, Chance: 5, Max: 20 }
        ]
    };    
}

export class StoneSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override indexGreatLevel = 4;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 5;

    public resourcePerLevel = {
        1: [
            { Item: Stone, Chance: 70, Max: 20 }, 
            { Item: Tin, Chance: 5, Max: 20 }, 
            { Item: CopperOre, Chance: 25, Max: 20 }
        ],
        2: [
            { Item: Stone, Chance: 45, Max: 20 }, 
            { Item: CopperOre, Chance: 25, Max: 20 }, 
            { Item: IronOre, Chance: 25, Max: 20 }, 
            { Item: Tin, Chance: 5, Max: 20 }
        ],
        3: [
            { Item: Stone, Chance: 10, Max: 20 }, 
            { Item: CopperOre, Chance: 35, Max: 20 }, 
            { Item: IronOre, Chance: 35, Max: 20 }, 
            { Item: Tin, Chance: 20, Max: 20 }
        ],
        4: [
            { Item: Stone, Chance: 10, Max: 20 }, 
            { Item: CopperOre, Chance: 35, Max: 20 }, 
            { Item: IronOre, Chance: 35, Max: 20 }, 
            { Item: Tin, Chance: 10, Max: 20 }, 
            { Item: SilverOre, Chance: 9, Max: 10 }, 
            { Item: GoldOre, Chance: 1, Max: 5 }
        ]
    };
}

export class BigStoneSpot extends StoneSpot {
    public override skill = SkillName.Mining;
    public override tick: number = Random.MinMaxInt(30, 40);
    public override maxSkillGain = 5;
}

export class BushSpot extends GatherableResource {
    public override skill = SkillName.Herbalism;
    public override indexGreatLevel = 5;
    public override equipamentNeed = EquipamentType.ScytheTool;
    public override resourceWithWrongEquipament = Fiber;
    public override consumeAllTicks = false;
    public override maxSkillGain = 5;

    public resourcePerLevel = {
        1: [            
            { Item: Fiber, Chance: 45 }, 
            { Item: Cotton, Chance: 30 }, 
            { Item: Root, Chance: 5 }, 
            { Item: DemonMushroom, Chance: 5 }, 
            { Item: Leaves, Chance: 10 },
            { Item: BloodBerry, Chance: 5 },
            { Item: FireFlower, Chance: 5 },
            { Item: RedFruit, Chance: 5 },
            { Item: YellowFlower, Chance: 5 },
            { Item: ManaMushroom, Chance: 5 },
            { Item: Garlic, Chance: 1 },
            { Item: OilPlant, Chance: 1 },
            { Item: EdgyRoot, Chance: 1 }
        ],
        2: [            
            { Item: Fiber, Chance: 45 }, 
            { Item: Cotton, Chance: 30 }, 
            { Item: Root, Chance: 5 }, 
            { Item: DemonMushroom, Chance: 5 }, 
            { Item: Leaves, Chance: 10 },
            { Item: BloodBerry, Chance: 5 },
            { Item: FireFlower, Chance: 5 },
            { Item: RedFruit, Chance: 5 },
            { Item: YellowFlower, Chance: 5 },
            { Item: ManaMushroom, Chance: 5 },
            { Item: Garlic, Chance: 1 },
            { Item: OilPlant, Chance: 1 },
            { Item: EdgyRoot, Chance: 1 }
        ],
        3: [            
            { Item: Fiber, Chance: 45 }, 
            { Item: Cotton, Chance: 30 }, 
            { Item: Root, Chance: 5 }, 
            { Item: DemonMushroom, Chance: 5 }, 
            { Item: Leaves, Chance: 10 },
            { Item: BloodBerry, Chance: 5 },
            { Item: FireFlower, Chance: 5 },
            { Item: RedFruit, Chance: 5 },
            { Item: YellowFlower, Chance: 5 },
            { Item: ManaMushroom, Chance: 5 },
            { Item: Garlic, Chance: 1 },
            { Item: OilPlant, Chance: 1 },
            { Item: EdgyRoot, Chance: 1 }
        ],
        4: [            
            { Item: Fiber, Chance: 45 }, 
            { Item: Cotton, Chance: 30 }, 
            { Item: Root, Chance: 5 }, 
            { Item: DemonMushroom, Chance: 5 }, 
            { Item: Leaves, Chance: 10 },
            { Item: BloodBerry, Chance: 5 },
            { Item: FireFlower, Chance: 5 },
            { Item: RedFruit, Chance: 5 },
            { Item: YellowFlower, Chance: 5 },
            { Item: ManaMushroom, Chance: 5 },
            { Item: Garlic, Chance: 1 },
            { Item: OilPlant, Chance: 1 },
            { Item: EdgyRoot, Chance: 1 }
        ],
        5: [            
            { Item: Fiber, Chance: 45 }, 
            { Item: Cotton, Chance: 30 }, 
            { Item: ArcaneFiber, Chance: 5 }, 
            { Item: Root, Chance: 5 }, 
            { Item: DemonMushroom, Chance: 5 }, 
            { Item: Leaves, Chance: 10 },
            { Item: BloodBerry, Chance: 5 },
            { Item: FireFlower, Chance: 5 },
            { Item: RedFruit, Chance: 5 },
            { Item: YellowFlower, Chance: 5 },
            { Item: ManaMushroom, Chance: 5 },
            { Item: Garlic, Chance: 1 },
            { Item: OilPlant, Chance: 1 },
            { Item: EdgyRoot, Chance: 1 },
        ],
    };
}

export class CooperSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(10, 20);
    public override indexGreatLevel = 2;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 5;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 10 }, { Item: CopperOre, Chance: 90 }],
        2: [
            { Item: CopperOre, Chance: 90 }, 
            { Item: Tin, Chance: 10 },
            { Item: Emerald, Chance: 1 },
            { Item: Diamond, Chance: 0.1 },
            { Item: Ametist, Chance: 0.1 },
            { Item: Ruby, Chance: 0.1 },
            { Item: Sunstone, Chance: 0.1 }
        ]
    };
}

export class IronSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(10, 20);
    public override indexGreatLevel = 4;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 5;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100, Max: 20 }],
        2: [
            { Item: Stone, Chance: 50, Max: 20 }, 
            { Item: IronOre, Chance: 40, Max: 20 }, 
            { Item: CopperOre, Chance: 10, Max: 20 }
        ],
        3: [
            { Item: Stone, Chance: 20, Max: 20 }, 
            { Item: IronOre, Chance: 70, Max: 20 }, 
            { Item: CopperOre, Chance: 10, Max: 20 }
        ],
        4: [
            { Item: IronOre, Chance: 100, Max: 20 },
            { Item: Emerald, Chance: 1, Max: 1 },
            { Item: Diamond, Chance: 0.1, Max: 1 },
            { Item: Ametist, Chance: 0.1, Max: 1 },
            { Item: Ruby, Chance: 0.1, Max: 1 },
            { Item: Sunstone, Chance: 0.1, Max: 1 }
        ],
    };
}

export class SilverSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(5, 10);
    public override indexGreatLevel = 5;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 6;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100, Max: 20 }],
        2: [{ Item: Stone, Chance: 100, Max: 20 }],
        3: [{ Item: Stone, Chance: 100, Max: 20 }],
        4: [
            { Item: Stone, Chance: 80, Max: 20 }, 
            { Item: SilverOre, Chance: 20, Max: 20 }
        ],
        5: [
            { Item: SilverOre, Chance: 98, Max: 20 },
            { Item: Emerald, Chance: 1, Max: 1 },
            { Item: Diamond, Chance: 0.1, Max: 1 },
            { Item: Ametist, Chance: 0.1, Max: 1 },
            { Item: Ruby, Chance: 0.1, Max: 1 },
            { Item: Sunstone, Chance: 0.1, Max: 1 }
        ],
    };
}

export class GoldSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(5, 10);
    public override indexGreatLevel = 6;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 8;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100, Max: 20 }],
        2: [{ Item: Stone, Chance: 100, Max: 20 }],
        3: [{ Item: Stone, Chance: 100, Max: 20 }],
        4: [{ Item: Stone, Chance: 100, Max: 20 }],
        5: [
            { Item: GoldOre, Chance: 5, Max: 20 }, 
            { Item: Stone, Chance: 95, Max: 20 }
        ],
        6: [
            { Item: GoldOre, Chance: 95, Max: 20 },
            { Item: Emerald, Chance: 1, Max: 1 },
            { Item: Diamond, Chance: 1, Max: 1 },
            { Item: Ametist, Chance: 1, Max: 1 },
            { Item: Ruby, Chance: 1, Max: 1 },
            { Item: Sunstone, Chance: 1, Max: 1 }
        ],
    };
}

export class DarkSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(2, 5);
    public override indexGreatLevel = 7;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 10;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100, Max: 20 }],
        2: [{ Item: Stone, Chance: 100, Max: 20 }],
        3: [{ Item: Stone, Chance: 100, Max: 20 }],
        4: [{ Item: Stone, Chance: 100, Max: 20 }],
        5: [{ Item: Stone, Chance: 100, Max: 20 }],
        6: [{ Item: Stone, Chance: 100, Max: 20 }],
        7: [
            { Item: DarkOre, Chance: 90, Max: 20 },
            { Item: Emerald, Chance: 2, Max: 1 },
            { Item: Diamond, Chance: 2, Max: 1 },
            { Item: Ametist, Chance: 2, Max: 1 },
            { Item: Ruby, Chance: 2, Max: 1 },
            { Item: Sunstone, Chance: 2, Max: 1 }
        ],
    };
}

export class MithrilSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(1, 3);
    public override indexGreatLevel = 9;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 11;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100, Max: 20 }],
        2: [{ Item: Stone, Chance: 100, Max: 20 }],
        3: [{ Item: Stone, Chance: 100, Max: 20 }],
        4: [{ Item: Stone, Chance: 100, Max: 20 }],
        5: [{ Item: Stone, Chance: 100, Max: 20 }],
        6: [{ Item: Stone, Chance: 100, Max: 20 }],
        7: [{ Item: Stone, Chance: 100, Max: 20 }],
        8: [{ Item: Stone, Chance: 100, Max: 20 }],
        9: [
            { Item: MithrilSpot, Chance: 80, Max: 10 },
            { Item: Emerald, Chance: 5, Max: 1 },
            { Item: Diamond, Chance: 5, Max: 1 },
            { Item: Ametist, Chance: 5, Max: 1 },
            { Item: Ruby, Chance: 3, Max: 1 },
            { Item: Sunstone, Chance: 2, Max: 1 }
        ],
    };
}

export class HeavenlySpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = 1;
    public override indexGreatLevel = 11;
    public override equipamentNeed = EquipamentType.PickaxeTool;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 13;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100, Max: 20 }],
        2: [{ Item: Stone, Chance: 100, Max: 20 }],
        3: [{ Item: Stone, Chance: 100, Max: 20 }],
        4: [{ Item: Stone, Chance: 100, Max: 20 }],
        5: [{ Item: Stone, Chance: 100, Max: 20 }],
        6: [{ Item: Stone, Chance: 100, Max: 20 }],
        7: [{ Item: Stone, Chance: 100, Max: 20 }],
        8: [{ Item: Stone, Chance: 100, Max: 20 }],
        9: [{ Item: Stone, Chance: 100, Max: 20 }],
        10: [
            { Item: HeavenlyOre, Chance: 10, Max: 5 }, 
            { Item: Stone, Chance: 90, Max: 20 }
        ],
        11: [
            { Item: HeavenlyOre, Chance: 80, Max: 5 },
            { Item: Emerald, Chance: 5, Max: 1 },
            { Item: Diamond, Chance: 5, Max: 1 },
            { Item: Ametist, Chance: 5, Max: 1 },
            { Item: Ruby, Chance: 3, Max: 1 },
            { Item: Sunstone, Chance: 2, Max: 1 }
        ],
    };
}

GatherableResource.add(GatherableType.Tree, TreeSpot);
GatherableResource.add(GatherableType.Stone, StoneSpot);
GatherableResource.add(GatherableType.Bush, BushSpot);
GatherableResource.add(GatherableType.BigStone, BigStoneSpot);
GatherableResource.add(GatherableType.CooperSpot, CooperSpot);
GatherableResource.add(GatherableType.IronSpot, IronSpot);
GatherableResource.add(GatherableType.SilverSpot, SilverSpot);
GatherableResource.add(GatherableType.GoldSpot, GoldSpot);
GatherableResource.add(GatherableType.DarkSpot, DarkSpot);
GatherableResource.add(GatherableType.MithrilSpot, MithrilSpot);
GatherableResource.add(GatherableType.HeavenlySpot, HeavenlySpot);
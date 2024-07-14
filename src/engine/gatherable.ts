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
    DarkOre, HeavenlyOre, Emerald, Diamond, Ametist, Ruby, Sunstone 
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
    public equipamentNeed: WeaponType = WeaponType.None;
    public equipamentNeed2: WeaponType = WeaponType.None;
    public consumeAllTicks: boolean = false;
    public maxSkillGain: number = 5;

    public static Resources: Map<GatherableType, { new (): any }> = new Map<GatherableType, { new (): any }>();

    public async collect(player: Player) {
        if(this.tick <= 0)
            player.gatherableInteract = null;

        if(this.tick > 0) {
            let position = new Vector3(this.settings.x, this.settings.y, this.settings.z);
            let skill = Math.abs(player.getSkillValue(this.skill));
            const mainHandEquipament = (player.mainhand) ? Items.getItemByRef(player.mainhand.ItemRef) : null;
            let withoutEquipament = true;

            if(skill <= 1)
                skill = 1;

            let resouces = [{ Item: this.resourceWithWrongEquipament, Chance: 100 }];

            if(
                mainHandEquipament && 
                ((mainHandEquipament as Weapon).WeaponType === this.equipamentNeed ||
                (mainHandEquipament as Weapon).WeaponType === this.equipamentNeed2)
            ){
                resouces = this.resourcePerLevel[Math.round(skill)];
                resouces = (!resouces) ? this.resourcePerLevel[this.indexGreatLevel] : resouces;
                withoutEquipament = false;
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
                    const amount = Random.MinMaxInt(1, skill);
                    const baseItem = new itemBase();                    
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
                }
                    
                player.save();

                if(this.tick <= 0){
                    packetFinishCollect.send(player, this.foliageId);

                    this.map.entitiesMapIndex.forEach((entity) => {
                        if(entity instanceof Player)
                            packetFinishCollect.send(entity as Player, this.foliageId);
                    });
                }                
            }
        }
        else {
            packetFinishCollect.send(player, this.foliageId);

            this.map.entitiesMapIndex.forEach((entity) => {
                if(entity instanceof Player)
                    packetFinishCollect.send(entity as Player, this.foliageId);
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

    protected selectRandomItem(items: { Item: any; Chance: number }[]): { new (): any } {
        const totalChances = items.reduce((acc, curr) => acc + curr.Chance, 0);
        let random = Math.random() * totalChances;

        for (const item of items) {
            random -= item.Chance;
            if (random <= 0) {
                return item.Item;
            }
        }

        return items[items.length - 1].Item;
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
    public override equipamentNeed = WeaponType.Axe;
    public override equipamentNeed2 = WeaponType.TwoHandedAxe;
    public override resourceWithWrongEquipament = Stick;
    public override maxSkillGain = 5;

    public override resourcePerLevel = {
        1: [{ Item: Stick, Chance: 16 }, { Item: Wood, Chance: 80 }, { Item: Leaves, Chance: 5 }],
        2: [{ Item: Stick, Chance: 5 }, { Item: Wood, Chance: 90 }, { Item: Leaves, Chance: 5 }],
        3: [
            { Item: Stick, Chance: 10 }, 
            { Item: Wood, Chance: 80 }, 
            { Item: Leaves, Chance: 5 }, 
            { Item: IpeWood, Chance: 5 }
        ],
        4: [
            { Item: Wood, Chance: 75 },
            { Item: Root, Chance: 5 }, 
            { Item: IpeWood, Chance: 20 }
        ],
        5: [
            { Item: Wood, Chance: 60 },  
            { Item: IpeWood, Chance: 25 }, 
            { Item: OakWood, Chance: 10 }, 
            { Item: MapleWood, Chance: 1 }
        ]
    };    
}

export class StoneSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override indexGreatLevel = 4;
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 5;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 70 }, { Item: Tin, Chance: 5 }, { Item: CopperOre, Chance: 25 }],
        2: [{ Item: Stone, Chance: 45 }, { Item: CopperOre, Chance: 25 }, { Item: IronOre, Chance: 25 }, { Item: Tin, Chance: 5 }],
        3: [
            { Item: Stone, Chance: 10 }, { Item: CopperOre, Chance: 35 }, 
            { Item: IronOre, Chance: 35 }, { Item: Tin, Chance: 20 }
        ],
        4: [
            { Item: Stone, Chance: 10 }, { Item: CopperOre, Chance: 35 }, 
            { Item: IronOre, Chance: 35 }, { Item: Tin, Chance: 10 }, 
            { Item: SilverOre, Chance: 9 }, { Item: GoldOre, Chance: 1 }
        ]
    };
}

export class BigStoneSpot extends StoneSpot {
    public override skill = SkillName.Mining;
    public override tick: number = Random.MinMaxInt(20, 30);
}

export class BushSpot extends GatherableResource {
    public override skill = SkillName.Herbalism;
    public override indexGreatLevel = 5;
    public override equipamentNeed = WeaponType.Dagger;
    public override equipamentNeed2 = WeaponType.Sword;
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
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
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
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 5;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100 }],
        2: [
            { Item: Stone, Chance: 50 }, 
            { Item: IronOre, Chance: 40 }, 
            { Item: CopperOre, Chance: 10 }
        ],
        3: [
            { Item: Stone, Chance: 20 }, 
            { Item: IronOre, Chance: 70 }, 
            { Item: CopperOre, Chance: 10 }
        ],
        4: [
            { Item: IronOre, Chance: 100 },
            { Item: Emerald, Chance: 1 },
            { Item: Diamond, Chance: 0.1 },
            { Item: Ametist, Chance: 0.1 },
            { Item: Ruby, Chance: 0.1 },
            { Item: Sunstone, Chance: 0.1 }
        ],
    };
}

export class SilverSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(5, 10);
    public override indexGreatLevel = 5;
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 6;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100 }],
        2: [{ Item: Stone, Chance: 100 }],
        3: [{ Item: Stone, Chance: 100 }],
        4: [
            { Item: Stone, Chance: 80 }, 
            { Item: SilverOre, Chance: 20 }
        ],
        5: [
            { Item: SilverOre, Chance: 100 },
            { Item: Emerald, Chance: 1 },
            { Item: Diamond, Chance: 0.1 },
            { Item: Ametist, Chance: 0.1 },
            { Item: Ruby, Chance: 0.1 },
            { Item: Sunstone, Chance: 0.1 }
        ],
    };
}

export class GoldSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(5, 10);
    public override indexGreatLevel = 6;
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 7;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100 }],
        2: [{ Item: Stone, Chance: 100 }],
        3: [{ Item: Stone, Chance: 100 }],
        4: [{ Item: Stone, Chance: 100 }],
        5: [
            { Item: GoldOre, Chance: 5 }, 
            { Item: Stone, Chance: 95 }
        ],
        6: [
            { Item: GoldOre, Chance: 100 },
            { Item: Emerald, Chance: 1 },
            { Item: Diamond, Chance: 0.1 },
            { Item: Ametist, Chance: 0.1 },
            { Item: Ruby, Chance: 0.1 },
            { Item: Sunstone, Chance: 0.1 }
        ],
    };
}

export class DarkSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(2, 5);
    public override indexGreatLevel = 7;
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 10;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100 }],
        2: [{ Item: Stone, Chance: 100 }],
        3: [{ Item: Stone, Chance: 100 }],
        4: [{ Item: Stone, Chance: 100 }],
        5: [{ Item: Stone, Chance: 100 }],
        6: [{ Item: Stone, Chance: 100 }],
        7: [
            { Item: DarkOre, Chance: 100 },
            { Item: Emerald, Chance: 1 },
            { Item: Diamond, Chance: 0.1 },
            { Item: Ametist, Chance: 0.1 },
            { Item: Ruby, Chance: 0.1 },
            { Item: Sunstone, Chance: 0.1 }
        ],
    };
}

export class MithrilSpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = Random.MinMaxInt(1, 3);
    public override indexGreatLevel = 9;
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 11;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100 }],
        2: [{ Item: Stone, Chance: 100 }],
        3: [{ Item: Stone, Chance: 100 }],
        4: [{ Item: Stone, Chance: 100 }],
        5: [{ Item: Stone, Chance: 100 }],
        6: [{ Item: Stone, Chance: 100 }],
        7: [{ Item: Stone, Chance: 100 }],
        8: [{ Item: Stone, Chance: 100 }],
        9: [
            { Item: MithrilSpot, Chance: 80 },
            { Item: Emerald, Chance: 5 },
            { Item: Diamond, Chance: 5 },
            { Item: Ametist, Chance: 5 },
            { Item: Ruby, Chance: 3 },
            { Item: Sunstone, Chance: 2 }
        ],
    };
}

export class HeavenlySpot extends GatherableResource {
    public override skill = SkillName.Mining;
    public override tick = 1;
    public override indexGreatLevel = 11;
    public override equipamentNeed = WeaponType.Pickaxe;
    public override equipamentNeed2 = WeaponType.Pickaxe;
    public override resourceWithWrongEquipament = Stone;
    public override maxSkillGain = 13;

    public resourcePerLevel = {
        1: [{ Item: Stone, Chance: 100 }],
        2: [{ Item: Stone, Chance: 100 }],
        3: [{ Item: Stone, Chance: 100 }],
        4: [{ Item: Stone, Chance: 100 }],
        5: [{ Item: Stone, Chance: 100 }],
        6: [{ Item: Stone, Chance: 100 }],
        7: [{ Item: Stone, Chance: 100 }],
        8: [{ Item: Stone, Chance: 100 }],
        9: [{ Item: Stone, Chance: 100 }],
        10: [
            { Item: HeavenlyOre, Chance: 10 }, 
            { Item: Stone, Chance: 90 }
        ],
        11: [
            { Item: HeavenlyOre, Chance: 80 },
            { Item: Emerald, Chance: 5 },
            { Item: Diamond, Chance: 5 },
            { Item: Ametist, Chance: 5 },
            { Item: Ruby, Chance: 3 },
            { Item: Sunstone, Chance: 2 }
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
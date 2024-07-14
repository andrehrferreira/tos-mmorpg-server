import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { Meat, Hides, Milk, Ribs, Horn, Bone, PetCowItem, PetCow2Item, PetCow3Item } from "@items";

export class Cow extends Creature {
    public override namespace = "Cow";
    public override name = "Cow";
    public override skinnerResources = Hides;
    public override skinnerAmount = Random.MinMaxInt(1, 3);
    public override skinnerTick = 3;
    public override skinnerGainExp = 1;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 2000;
    public override speed = 300;
    public override respawnCustomList = ["Cow", "Cow2", "Cow3"];

    //Taming
    public override tamable = true;
    public override skillTamingMin = 2;
    public override petSockets = 2;
    public override maxSkillTamingUp = 3;
    public override itemTamingFinish = PetCowItem;

    constructor(){
        super();

        this.setLife(20);
        this.setStr(10, 20);
        this.setDex(1, 5);
        this.setVig(5, 10);
        
        this.loot.dropChance(Meat, 100, 10, 20);
        this.loot.dropChance(Milk, 50, 1, 2);
        this.loot.dropChance(Ribs, 1, 1);
        this.loot.dropChance(Horn, 1, 1);
        this.loot.dropChance(Bone, 30, 1);
    }
}

export class Cow2 extends Cow {
    public override namespace = "Cow2";
    public override customVisual = "Cow2";
    public override itemTamingFinish = PetCow2Item;
}

export class Cow3 extends Cow {
    public override namespace = "Cow3";
    public override customVisual = "Cow3";
    public override itemTamingFinish = PetCow3Item;
}

Entity.addEntityBase("Cow", Cow);
Entity.addEntityBase("Cow2", Cow2);
Entity.addEntityBase("Cow3", Cow3);
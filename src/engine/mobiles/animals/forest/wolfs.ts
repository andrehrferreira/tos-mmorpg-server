import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";

import { 
    Hides, Meat, PetWolfItem, PetWolf2Item, 
    PetWolf3Item, PetWolf4Item 
} from "@items";

import { Dices } from "@enums";

export class Wolf extends Creature {
    public override namespace = "Wolf";
    public override name = "Wolf";
    public override skinnerResources = Hides;
    public override skinnerAmount = Random.MinMaxInt(1, 5);
    public override skinnerTick = 2;
    public override skinnerGainExp = 3;
    public override passive = false;
    public override movementDistance: number = 1000;
    public override maxDistanceToRespawn: number = 5000;
    public override pawnSenseRadius: number = 1500;
    public override baseDamage = Dices.D4D6;
    public override speed = 800;
    public override respawnCustomList = ["Wolf", "Wolf2", "Wolf3", "Wolf4"];

    //Taming
    public override tamable = true;
    public override skillTamingMin = 4;
    public override petSockets = 3;
    public override maxSkillTamingUp = 5;
    public override itemTamingFinish = PetWolfItem;

    constructor(){
        super();

        this.setLife(50, 80);
        this.setStr(25, 35);
        this.setDex(30, 45);
        
        this.loot.dropChance(Meat, 100, 5, 10);
    }
}

export class Wolf2 extends Wolf {
    public override namespace = "Wolf2";
    public override customVisual = "Wolf2";
    public override itemTamingFinish = PetWolf2Item;
}

export class Wolf3 extends Wolf {
    public override namespace = "Wolf3";
    public override customVisual = "Wolf3";
    public override itemTamingFinish = PetWolf3Item;
}

export class Wolf4 extends Wolf {
    public override namespace = "Wolf4";
    public override customVisual = "Wolf4";
    public override itemTamingFinish = PetWolf4Item;
}

Entity.addEntityBase("Wolf", Wolf);
Entity.addEntityBase("Wolf2", Wolf2);
Entity.addEntityBase("Wolf3", Wolf3);
Entity.addEntityBase("Wolf4", Wolf4);
import { Creature, Entity } from "../../../entities";

import { 
    Feather, RawChickenLeg, Egg, 
    PetChickenBlackItem, PetChickenBrownItem,
    PetChickenWhiteItem, PetChickenFromHellItem 
} from "@items";

export class Chicken extends Creature {
    public override namespace = "Chicken";
    public override name = "Chicken";
    public override customVisual = "Chicken";
    public override movementDistance: number = 100;
    public override maxDistanceToRespawn: number = 2000;
    public override speed = 600;
    public override respawnCustomList = ["Chicken", "ChickenBlack", "ChickenWhite"];

    //Taming
    public override tamable = true;
    public override skillTamingMin = 0;
    public override petSockets = 1;
    public override maxSkillTamingUp = 2;
    public override itemTamingFinish = PetChickenBrownItem;

    constructor(){
        super();

        this.setLife(5);
        this.setStr(1, 5);
        this.setDex(5, 8);
        this.setVig(1, 5);
        
        this.loot.dropChance(RawChickenLeg, 100, 2);
        this.loot.dropChance(Feather, 100, 20, 30);
        this.loot.dropChance(Egg, 50, 1, 2);
    }
}

export class ChickenBlack extends Chicken {
    public override customVisual = "Chicken2";
    public override itemTamingFinish = PetChickenBlackItem;
}

export class ChickenWhite extends Chicken {
    public override customVisual = "Chicken3";
    public override itemTamingFinish = PetChickenWhiteItem;
}

export class ChickenFromHell extends Creature {
    public override namespace = "ChickenFromHell";
    public override name = "Chicken From Hell";
    public override movementDistance: number = 100;
    public override maxDistanceToRespawn: number = 2000;
    public override customVisual = "ChickenFromHell";
    public override speed = 1500;

    //Taming
    public override tamable = true;
    public override skillTamingMin = 12;
    public override petSockets = 1;
    public override itemTamingFinish = PetChickenFromHellItem;

    constructor(){
        super();

        this.setLife(1000);
        this.setStr(50);
    }
}

Entity.addEntityBase("Chicken", Chicken);
Entity.addEntityBase("ChickenBlack", ChickenBlack);
Entity.addEntityBase("ChickenWhite", ChickenWhite);
Entity.addEntityBase("ChickenFromHell", ChickenFromHell);
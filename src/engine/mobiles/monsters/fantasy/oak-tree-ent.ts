import { BasePlant } from "../../";
import { Entity } from "../../../entities";

import { 
    ManaMushroom, BloodBerry,
    BlackMushroom, BlueFlower, DemonMushroom,
    Leaves, NatureEssence
} from "@items";

export class OakTreeEnt extends BasePlant {
    namespace = "OakTreeEnt";
    name = "Oak Tree Ent";

    constructor(){
        super();

        this.setStr(150, 250);
        this.setDex(5, 10);
        this.setVig(10, 30);

        this.loot.dropChance(ManaMushroom, 25, 10, 20);
        this.loot.dropChance(DemonMushroom, 25, 10, 20);
        this.loot.dropChance(BloodBerry, 25, 5, 10);
        this.loot.dropChance(BlackMushroom, 25, 1, 3);
        this.loot.dropChance(BlueFlower, 25, 1, 3);  
        this.loot.dropChance(Leaves, 100, 10, 30); 
        this.loot.dropChance(NatureEssence, 50, 5, 10);
    }
}

Entity.addEntityBase("OakTreeEnt", OakTreeEnt);
import { Dices } from "@enums";
import { BasePlant } from "../../";
import { Entity } from "../../../entities";

import { 
    ManaMushroom, BloodBerry,
    BlackMushroom, BlueFlower, DemonMushroom,
    Leaves, NatureEssence, CardPlantMonster
} from "@items";

export class PlantMonster extends BasePlant {
    public override namespace = "PlantMonster";
    public override name = "Plant Monster";
    public override passive = false;

    public override baseDamage = Dices.D1D12;
    public override speed: 700;

    public override multipleVisual = [
        "PlantMonster", "PlantMonster2", "PlantMonster3",
        "PlantMonster4", "PlantMonster5", "PlantMonster6",
        "PlantMonster7", "PlantMonster8", "PlantMonster9",
        "PlantMonster10"
    ];

    constructor(){
        super();

        this.setLife(60, 200);
        this.setStr(13, 25);
        this.setDex(8, 15);
        this.setInt(20, 35);
        this.setVig(12, 20);

        this.addAction("Poisonbolt", 50);
        this.addAction("Poison", 50);

        this.loot.dropChance(ManaMushroom, 80, 5, 10);
        this.loot.dropChance(DemonMushroom, 80, 5, 10);
        this.loot.dropChance(BloodBerry, 80, 5, 10);
        this.loot.dropChance(BlackMushroom, 10, 1, 3);
        this.loot.dropChance(BlueFlower, 10, 1, 3);  
        this.loot.dropChance(Leaves, 10, 1, 3); 
        this.loot.dropChance(NatureEssence, 5, 1, 2); 
        this.loot.dropChance(CardPlantMonster, 1, 1);     
    }
}

Entity.addEntityBase("PlantMonster", PlantMonster);
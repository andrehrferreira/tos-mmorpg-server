import { BasePlant } from "../../";
import { Entity } from "../../../entities";
import { ActionType } from "../../../actions"
import { Dices } from "@enums";

import { 
    ManaMushroom, BloodBerry,
    BlackMushroom, BlueFlower, DemonMushroom,
    Leaves, NatureEssence, CardMushroomMonster,
    CardMushroomMonsterShine
} from "@items";

export class MushroomMonster extends BasePlant {
    public override namespace = "MushroomMonster";
    public override name = "Mushroom Monster";
    public override passive = true;
    public override baseDamage = Dices.D1D12;
    public override speed: 400;

    public override multipleVisual = [
        "MushroomMonsterBlack", "MushroomMonsterBlue", "MushroomMonsterCold",
        "MushroomMonsterGreen", "MushroomMonsterJungle", "MushroomMonsterOrange",
        "MushroomMonsterPurple", "MushroomMonsterRed", "MushroomMonsterYellow"
    ];

    constructor(){
        super();

        this.setLife(50, 100);
        this.setStr(13, 25);
        this.setDex(8, 15);
        this.setInt(12, 20);
        this.setVig(12, 20);

        this.addAction("Poisonbolt", 30);
        this.addAction("Heal", 30, ActionType.TargetSelf);
       
        this.loot.dropChance(ManaMushroom, 25, 5, 10);
        this.loot.dropChance(DemonMushroom, 25, 5, 10);
        this.loot.dropChance(BloodBerry, 25, 5, 10);
        this.loot.dropChance(BlackMushroom, 5, 1, 3);
        this.loot.dropChance(BlueFlower, 5, 1, 3);  
        this.loot.dropChance(Leaves, 5, 1, 3);    
        this.loot.dropChance(NatureEssence, 5, 1, 2);  
        this.loot.dropChance(CardMushroomMonster, 1, 1);
        this.loot.dropChance(CardMushroomMonsterShine, 0.1, 1);
    }
}

Entity.addEntityBase("MushroomMonster", MushroomMonster);
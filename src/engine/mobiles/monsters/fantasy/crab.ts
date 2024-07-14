import { BaseWaterMonster } from "../..";
import { Entity } from "../../../entities";

import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";

import { 
    CardCrab,
    ColdEssence, ElementalDust, 
    FragmentGreenCrystal, FragmentWhiteCrystal, 
    MoonStone, NatureEssence 
} from "@items";

export class Crab extends BaseWaterMonster {
    public override namespace = "Crab";
    public override name = "Crab";
    public override customVisual = "Crab";
    public override passive = false;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 1000;
    public override baseDamage = Dices.D6D8;
    public override speed = 500;

    constructor(){
        super();

        this.setLife(250, 500);
        this.setStr(150, 200);
        this.setDex(10, 30);
        this.setVig(12, 20);

        this.loot.dropChance(NatureEssence, 80, 2, 3);
        this.loot.dropChance(ColdEssence, 100, 1, 3);
        this.loot.dropChance(ElementalDust, 10, 1, 2);
        this.loot.dropChance(MoonStone, 1, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 5, 1);
        this.loot.dropChance(FragmentGreenCrystal, 0.1, 1);
        this.loot.dropChance(CardCrab, 1, 1);
    }
}

Entity.addEntityBase("Crab", Crab);
import { Creature, Entity } from "../../../entities";
import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";

import { 
    DarknessEssence,
    Diamond,
    Emerald,
    FragmentGreenCrystal, FragmentWhiteCrystal, 
    GoldCoin, MoonStone, NatureEssence, Ruby, Sunstone 
} from "@items";

export class Troll extends Creature {
    public override namespace = "Troll";
    public override name = "Troll";
    public override passive = false;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 1000;
    public override baseDamage = Dices.D6D8;
    public override speed = 1200;

    constructor(){
        super();

        this.setLife(1500, 2500);
        this.setStr(80, 100);
        this.setDex(10, 30);
        this.setVig(12, 20);

        this.loot.dropChance(GoldCoin, 100, 500, 1000);
        this.loot.dropChance(MoonStone, 10, 10);
        this.loot.dropChance(FragmentWhiteCrystal, 100, 1, 3);
        this.loot.dropChance(FragmentGreenCrystal, 50, 1);
        this.loot.dropChance(DarknessEssence, 80, 1);
        this.loot.dropChance(NatureEssence, 100, 1, 10);
        this.loot.dropChance(Diamond, 20, 1);
        this.loot.dropChance(Emerald, 20, 1);
        this.loot.dropChance(Ruby, 20, 1);
        this.loot.dropChance(Sunstone, 1, 1);
    }
}

Entity.addEntityBase("Troll", Troll);
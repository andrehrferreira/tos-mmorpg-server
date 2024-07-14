import { Random } from "../../../core";
import { BaseWaterMonster } from "../..";
import { Entity } from "../../../entities";

import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";

import { 
    BlackMushroom, BloodBerry, ColdEssence, DemonMushroom, 
    ElementalDust, FragmentBlueCrystal, FragmentGreenCrystal, 
    FragmentWhiteCrystal, GoldCoin, ManaMushroom, MoonStone, 
    NatureEssence, SpinedHides 
} from "@items";

export class Fungoid extends BaseWaterMonster {
    public override namespace = "Fungoid";
    public override name = "Fungoid";
    public override passive = false;

    public override skinnerResources = SpinedHides;
    public override skinnerAmount = Random.MinMaxInt(3, 10);
    public override skinnerGainExp = 5;
    public override skinnerTick = Random.MinMaxInt(1, 5);

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 1000;
    public override baseDamage = Dices.D4D12;
    public override speed = 1000;

    constructor(){
        super();

        this.setLife(2000, 3500);
        this.setStr(150, 200);
        this.setDex(10, 30);
        this.setVig(12, 20);

        this.loot.dropChance(GoldCoin, 100, 100, 300);
        this.loot.dropChance(NatureEssence, 100, 5, 10);
        this.loot.dropChance(ColdEssence, 100, 1, 3);
        this.loot.dropChance(ElementalDust, 20, 1, 5);
        this.loot.dropChance(MoonStone, 25, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 100, 1, 5);
        this.loot.dropChance(FragmentGreenCrystal, 20, 1);
        this.loot.dropChance(FragmentBlueCrystal, 1, 1);
        this.loot.dropChance(ManaMushroom, 25, 5, 10);
        this.loot.dropChance(DemonMushroom, 25, 5, 10);
        this.loot.dropChance(BloodBerry, 25, 5, 10);
        this.loot.dropChance(BlackMushroom, 5, 1, 3);
    }
}

Entity.addEntityBase("Fungoid", Fungoid);
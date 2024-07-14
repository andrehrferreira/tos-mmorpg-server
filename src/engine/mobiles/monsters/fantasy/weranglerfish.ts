import { DefaultLootType, Random } from "../../../core";
import { BaseWaterMonster } from "../..";
import { Entity } from "../../../entities";

import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";

import { 
    ColdEssence, ElementalDust, Fin, FragmentGreenCrystal, 
    FragmentWhiteCrystal, MoonStone, NatureEssence, SpinedHides 
} from "@items";

export class Weranglerfish extends BaseWaterMonster {
    public override namespace = "Weranglerfish";
    public override name = "Weranglerfish";
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
    public override speed = 700;

    constructor(){
        super();

        this.setLife(500, 900);
        this.setStr(150, 200);
        this.setDex(10, 30);
        this.setVig(12, 20);

        this.loot.setBaseType(DefaultLootType.Poor);
        this.loot.dropChance(Fin, 100, 1);
        this.loot.dropChance(NatureEssence, 80, 5, 10);
        this.loot.dropChance(ColdEssence, 100, 1, 3);
        this.loot.dropChance(ElementalDust, 5, 1, 2);
        this.loot.dropChance(MoonStone, 1, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 40, 1, 3);
        this.loot.dropChance(FragmentGreenCrystal, 1, 1);
    }
}

Entity.addEntityBase("Weranglerfish", Weranglerfish);
import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";
import { ScaledHides, GoldCoin, FishRaw, NatureEssence, FragmentWhiteCrystal } from "@items";

export class Fishman extends Creature {
    public override namespace = "Fishman";
    public override name = "Fishman";
    public override passive = false;
    public override skinnerResources = ScaledHides;
    public override skinnerAmount = Random.MinMaxInt(2, 5);
    public override skinnerTick = 2;
    public override skinnerGainExp = 1;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 300;
    public override maxDistanceToRespawn: number = 2000;
    public override pawnSenseRadius = 800;
    public override baseDamage = Dices.D2D8;
    public override speed: 600;

    constructor(){
        super();

        this.setStr(50, 100);
        this.setDex(8, 15);
        this.setInt(12, 20);
        this.setVig(12, 20);

        this.loot.dropChance(GoldCoin, 50, 5, 10);
        this.loot.dropChance(FishRaw, 25, 1, 3);
        this.loot.dropChance(NatureEssence, 25, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 20, 1, 3);
    }
}

Entity.addEntityBase("Fishman", Fishman);
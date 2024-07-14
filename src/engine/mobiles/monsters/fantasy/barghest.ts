import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";
import { GoldCoin, DarknessHides, DarknessEssence } from "@items";

export class Barghest extends Creature {
    public override namespace = "Barghest";
    public override name = "Barghest";
    public override passive = false;
    public override skinnerResources = DarknessHides;
    public override skinnerAmount = Random.MinMaxInt(2, 5);
    public override skinnerTick = 3;
    public override skinnerGainExp = 6;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 800;
    public override baseDamage = Dices.D3D8;
    public override speed = 800;

    constructor(){
        super();

        this.setStr(200, 350);
        this.setDex(20, 30);
        this.setVig(12, 20);

        this.loot.dropChance(GoldCoin, 50, 20, 100);
        this.loot.dropChance(DarknessEssence, 50, 1);
    }
}

Entity.addEntityBase("Barghest", Barghest);
import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";
import { DarknessHides } from "@items";

export class DarknessWarlord extends Creature {
    public override namespace = "DarknessWarlord";
    public override name = "Darkness Warlord";
    public override passive = false;
    public override skinnerResources = DarknessHides;
    public override skinnerAmount = Random.MinMaxInt(10, 25);
    public override skinnerTick = 1;
    public override skinnerGainExp = 6;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 300;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 800;
    public override baseDamage = Dices.D5D8;
    public override speed = 200;
    public override minDistanceTarget = -300;

    constructor(){
        super();

        this.setStr(50, 80);
        this.setDex(8, 15);
        this.setVig(30, 40);
    }
}

Entity.addEntityBase("DarknessWarlord", DarknessWarlord);
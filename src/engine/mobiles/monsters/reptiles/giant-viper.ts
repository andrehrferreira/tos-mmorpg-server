import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { CreatureCombatMode, Dices } from "@enums";

import { 
    NatureEssence, OilPlant, SulfurousAsh, 
    ScaledHides, ViperTooth 
} from "@items";

export class GiantViper extends Creature {
    public override namespace = "GiantViper";
    public override name = "Giant Viper";
    public override passive = true;
    public override speed: number = 600;
    public override skinnerResources = ScaledHides;
    public override skinnerAmount = Random.MinMaxInt(2, 5);
    public override skinnerTick = 1;
    public override skinnerGainExp = 3;

    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 400;
    public override maxDistanceToRespawn: number = 2000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D2D4;
    
    public override multipleVisual = [
        "GiantViper", "GiantViper2", 
        "GiantViper3", "GiantViper4", 
    ]

    constructor(){
        super();

        this.setLife(60, 80);
        this.setStr(10, 30);
        this.setPoisonResistence(100);

        this.addAction("Poison", 50);

        this.loot.dropChance(NatureEssence, 5, 1, 2);
        this.loot.dropChance(OilPlant, 50, 1, 10);
        this.loot.dropChance(SulfurousAsh, 50, 1, 10);
        this.loot.dropChance(ViperTooth, 5, 1);
    }
}

Entity.addEntityBase("GiantViper", GiantViper);
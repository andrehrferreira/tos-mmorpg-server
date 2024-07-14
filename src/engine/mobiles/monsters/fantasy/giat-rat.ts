import { Creature, Entity } from "../../../entities";
import { CreatureCombatMode, Dices } from "@enums";
import { CheeseWedge, Meat, Hides } from "@items";

export class GiatRat extends Creature {
    public override namespace = "GiatRat";
    public override name = "Giat Rat";
    public override skinnerResources = Hides;
    public override skinnerAmount = 1;
    public override skinnerTick = 1;
    public override skinnerGainExp = 3;
    public override passive = false;
    public override speed: number = 600;

    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 300;
    public override maxDistanceToRespawn: number = 2000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D1D4;
    
    constructor(){
        super();

        this.setLife(50, 80);
        this.setStr(1, 10);
        this.setVig(5, 10);

        this.loot.dropChance(CheeseWedge, 25, 1);
        this.loot.dropChance(Meat, 100, 1);
    }
}

Entity.addEntityBase("GiatRat", GiatRat);
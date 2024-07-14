import { Creature, Entity } from "../../../entities";
import { CreatureCombatMode, Dices } from "@enums";

export class ExecutionerMobile extends Creature {
    public override namespace = "Executioner";
    public override name = "Executioner";
    public override passive = false;
    public override speed: number = 300;

    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 0;
    public override maxDistanceToRespawn: number = 100;
    public override pawnSenseRadius = 1000;
    public override baseDamage = Dices.D1D8;
    
    constructor(){
        super();

        this.setLife(10000);
    }
}

Entity.addEntityBase("Executioner", ExecutionerMobile);
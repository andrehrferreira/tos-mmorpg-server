import { BaseDragon } from "../../bases-creature";
import { Entity } from "../../../entities";
import { CreatureCombatMode, Dices } from "@enums";

export class IrvalTheWyvern extends BaseDragon {
    public override namespace = "IrvalTheWyvern";
    public override name = "Wyvern";
    public override passive = false;
    public override speed: number = 2000; 

    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 6000;
    public override pawnSenseRadius = 2000;
    public override minDistanceTarget: number = 200;
    public override baseDamage = Dices.D1D8;
    
    constructor(){
        super();

        this.setLife(10000);
    }
}

Entity.addEntityBase("IrvalTheWyvern", IrvalTheWyvern);
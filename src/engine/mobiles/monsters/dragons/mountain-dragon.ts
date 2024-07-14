import { BaseDragon } from "../../bases-creature";
import { Creature, Entity } from "../../../entities";
import { CreatureCombatMode, Dices } from "@enums";
import { CardMoutainDragon } from "@items";

export class MountainDragon extends BaseDragon {
    public override namespace = "MountainDragon";
    public override name = "Mountain Dragon";
    public override passive = false;
    public override speed: number = 600;

    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 0;
    public override maxDistanceToRespawn: number = 100;
    public override pawnSenseRadius = 1000;
    public override baseDamage = Dices.D1D8;
    
    constructor(){
        super();

        this.setLife(10000);
        this.loot.dropChance(CardMoutainDragon, 0.1, 1);
    }
}

Entity.addEntityBase("MountainDragon", MountainDragon);
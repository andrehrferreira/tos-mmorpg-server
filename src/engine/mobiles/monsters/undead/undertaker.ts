import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices 
} from "@enums";

import { BaseUndead } from "../..";
import { Entity } from "../../../entities";

import { 
    GoldCoin
} from "@items";

export class Undertaker extends BaseUndead {
    public override namespace = "Undertaker";
    public override name = "Undertaker";
    public override passive = false;

    public override targetMode = CreatureTargetMode.DamageCaused;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 1000;
    public override maxDistanceToRespawn: number = 3000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D6D12;
    public override speed = 1000;

    constructor(){
        super();

        this.setLife(2000, 3500);

        this.setStr(20, 30);
        this.setDex(5, 12); 
        this.setInt(10, 12);
        this.setVig(10, 20);

        this.loot.dropChance(GoldCoin, 100, 200, 500);
    }
}

Entity.addEntityBase("Undertaker", Undertaker);
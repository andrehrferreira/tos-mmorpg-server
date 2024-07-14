import { Creature, Entity } from "../../../entities";
import { BaseAction, CardSlime, NatureEssence } from "../../../";
import { CreatureCombatMode, DamageType, Dices } from "@enums";
import { Apple, Stone, Stick } from "@items";

export class Slime extends Creature {
    public override namespace = "Slime";
    public override name = "Slime";
    public override passive = true;
    public override speed: number = 200;

    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 2000;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D1D4;
    
    public override multipleVisual = [
        "Slime", "Slime2", "Slime3", "Slime4", 
        "Slime5", "Slime6", "Slime7", "Slime8",
        "Slime9"
    ]

    constructor(){
        super();

        this.setLife(30);
        this.setStr(1, 10);
        this.setVig(5, 10);

        this.loot.dropChance(Apple, 50, 1, 2);
        this.loot.dropChance(Stone, 50, 1, 10);
        this.loot.dropChance(Stick, 50, 1, 10);
        this.loot.dropChance(CardSlime, 1, 1);
        this.loot.dropChance(NatureEssence, 0.1, 1);
    }

    public override takeDamage(causer: Entity, dice: Dices, damageType: DamageType, bonusDamage: number = 0, action: BaseAction = null){
        if(damageType === DamageType.Physic)
            super.takeDamage(causer, Dices.D1D4, damageType, 0);
        else
            super.takeDamage(causer, dice, damageType, bonusDamage, action);
    }
}

Entity.addEntityBase("Slime", Slime);
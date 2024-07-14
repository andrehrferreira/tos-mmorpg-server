import { BaseUndead } from "../../";
import { Entity } from "../../../entities";

import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { 
    Bandage, GoldCoin
} from "@items";

export class Mummy extends BaseUndead {
    public override namespace = "Mummy";
    public override name = "Mummy";
    public override passive = false;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 100;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D2D8;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(100, 120);

        this.setStr(20, 30);
        this.setDex(5, 12); 
        this.setInt(30, 50);
 
        this.setSkill(SkillName.CombatWithWeapons, 5);

        this.loot.dropChance(Bandage, 70, 5, 10);
        this.loot.dropChance(GoldCoin, 60, 30, 100);
    }
}

Entity.addEntityBase("Mummy", Mummy);
import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class BladeStorm extends BaseAction {
    public override id = 19;
    public override name = "Blade Storm";
    public override namespace = "BladeStorm";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 80;
    public override damage = Dices.D2D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.CombatWithWeapons;
    public override skillRequeriment = 6;
    public override weaponAmplify = WeaponType.Dagger;
    public override preCastTime = 0.1;

    public override exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner);                    
    }
}

Actions.addAction(new BladeStorm());
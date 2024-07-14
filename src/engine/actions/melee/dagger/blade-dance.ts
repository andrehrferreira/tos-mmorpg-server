import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class BladeDance extends BaseAction {
    public override id = 18;
    public override name = "Blade Dance";
    public override namespace = "BladeDance";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 100;
    public override damage = Dices.D3D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.CombatWithWeapons;
    public override skillRequeriment = 9;
    public override weaponAmplify = WeaponType.Dagger;
    public override preCastTime = 0.1;

    public override exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner);                    
    }
}

Actions.addAction(new BladeDance());
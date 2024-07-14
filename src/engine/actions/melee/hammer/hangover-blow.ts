import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates } from "@engine";

export class HangoverBlow extends BaseAction {
    public override id = 43;
    public override name = "Hangover Blow";
    public override namespace = "HangoverBlow";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 50;
    public override damage = Dices.D5D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.TwoHandedWeapons;
    public override skillRequeriment = 5;
    public override weaponAmplify = WeaponType.Hammer;
    public override preCastTime = 0.1;
}

Actions.addAction(new HangoverBlow());
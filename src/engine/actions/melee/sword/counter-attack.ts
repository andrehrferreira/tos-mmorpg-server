import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class CounterAttack extends BaseAction {
    public override id = 46;
    public override name = "Counter Attack";
    public override namespace = "CounterAttack";
    public override type = ActionType.TargetSelf;
    public override costType = ActionCostType.Stamina;
    public override cost = 30;
    public override damage = Dices.D4D6;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.CombatWithWeapons;
    public override skillRequeriment = 2;
    public override weaponAmplify = WeaponType.Sword;
    public override preCastTime = 0.1;
}

Actions.addAction(new CounterAttack());
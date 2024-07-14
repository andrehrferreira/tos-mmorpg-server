import { BaseAction, Actions, ActionType } from "..";
import { ActionCostType, DamageType, SkillName } from "@enums";

export class Dash extends BaseAction {
    public override id = 25;
    public override name = "Dash";
    public override namespace = "Dash";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 30;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.CombatWithWeapons;
    public override skillRequeriment = 1;
    public override preCastTime = 0.1;
}

Actions.addAction(new Dash());
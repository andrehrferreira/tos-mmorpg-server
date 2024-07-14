import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates } from "@engine";

export class StunningBlow extends BaseAction {
    public override id = 40;
    public override name = "Stunning Blow";
    public override namespace = "StunningBlow";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 20;
    public override damage = Dices.D5D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.TwoHandedWeapons;
    public override skillRequeriment = 2;
    public override weaponAmplify = WeaponType.Hammer;
    public override preCastTime = 0.1;

    public override exec(owner: Entity, target: Entity){
        if(target){
            if(owner.transform.position.distanceTo(target.transform.position) <= 300) {
                target.applyCondition(new Condition(ConditionType.Stunned, 3, owner, 0));
                target.states.addFlag(EntityStates.Stunned);
            }
        }
    }
}

Actions.addAction(new StunningBlow());
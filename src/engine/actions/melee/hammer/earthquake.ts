import { WeaponType } from "@items";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates, Vector3 } from "@engine";
import { BaseAction, Actions, ActionType } from "../..";

export class Earthquake extends BaseAction {
    public override id = 39;
    public override name = "Earthquake";
    public override namespace = "Earthquake";
    public override type = ActionType.DirectionalCamera;
    public override costType = ActionCostType.Stamina;
    public override cost = 60;
    public override damage = Dices.D5D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.TwoHandedWeapons;
    public override skillRequeriment = 7;
    public override weaponAmplify = WeaponType.Hammer;
    public override preCastTime = 0.1;

    public override exec(owner: Entity, target: Entity){        
        if(target){
            target.applyCondition(new Condition(ConditionType.Stunned, 3, owner, 0));
            target.states.addFlag(EntityStates.Stunned);       
        }
    }
}

Actions.addAction(new Earthquake());
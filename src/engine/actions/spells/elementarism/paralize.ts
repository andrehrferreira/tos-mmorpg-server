import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates } from "@engine";

export class Paralize extends BaseAction {
    public override id = 30;
    public override name = "Paralize";
    public override namespace = "Paralize";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 35;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 4;
    public override preCastTime = 3;
    public override castSay = "Nikto Motrixt";
    
    public override exec(owner: Entity, target: Entity){
        if(target){
            target.applyCondition(new Condition(ConditionType.Stunned, 10, owner, 0));
            target.states.addFlag(EntityStates.Stunned);
            this.gainSkillExperience(owner); 
        }
    }
}

Actions.addAction(new Paralize());
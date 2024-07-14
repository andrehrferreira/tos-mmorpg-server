import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, SkillName } from "@enums";

export class NightSight extends BaseAction {
    public override id = 49;
    public override name = "Night Sight";
    public override namespace = "NightSight";
    public override type = ActionType.TargetSelf;
    public override costType = ActionCostType.Mana;
    public override cost = 30;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 2;
    public override preCastTime = 0.1;
    public override castSay = "Advium Luminir";

    public exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner); 
    }
}

Actions.addAction(new NightSight());
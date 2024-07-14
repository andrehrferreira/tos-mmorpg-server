import { ActionCostType, SkillName } from "@enums";
import { BaseAction, Actions, ActionType } from "..";
import { Entity } from "../../entities/entity";

export class Evade extends BaseAction {
    public override id = 26;
    public override name = "Evade";
    public override namespace = "Evade";
    public override type = ActionType.DirectionalCamera;
    public override costType = ActionCostType.Stamina;
    public override cost = 20;
    public override skill = SkillName.LongRangeWeapons;
    public override skillRequeriment = 1;

    public override exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner);                    
    }
}

Actions.addAction(new Evade());
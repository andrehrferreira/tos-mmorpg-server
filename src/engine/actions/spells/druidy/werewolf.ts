import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, SkillName } from "@enums";

export class Werewolf extends BaseAction {
    public override id = 6;
    public override name = "Werewolf";
    public override namespace = "Werewolf";
    public override type = ActionType.TargetSelf;
    public override costType = ActionCostType.Mana;
    public override cost = 20;
    public override skill = SkillName.Druidy;
    public override skillRequeriment = 4;
    public override preCastTime = 0.1;

    public exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner); 
    }
}

Actions.addAction(new Werewolf());
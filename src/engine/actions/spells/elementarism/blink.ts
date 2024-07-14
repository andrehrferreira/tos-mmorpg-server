import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, SkillName } from "@enums";

export class Blink extends BaseAction {
    public override id = 5;
    public override name = "Blink";
    public override namespace = "Blink";
    public override type = ActionType.DirectionalCamera;
    public override costType = ActionCostType.Mana;
    public override cost = 10;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 3;
    public override preCastTime = 0.1;
    public override castSay = "Impus Locare";

    public exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner); 
    }
}

Actions.addAction(new Blink());
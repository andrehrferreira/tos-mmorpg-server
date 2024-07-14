import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, SkillName } from "@enums";
import { Entity } from "@engine";

export class DivineRessurection extends BaseAction {
    public override id = 14;
    public override name = "Divine Ressurection";
    public override namespace = "DivineRessurection";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 150;
    public override skill = SkillName.Spirituality;
    public override skillRequeriment = 8;    
    public override preCastTime = 10;

    public override exec(owner: Entity, target: Entity){
        if(target && target.isDead){
            target.revive();
            target.life = Math.min(owner.life / 2, owner.maxLife);
            owner.life = Math.max(owner.life / 2, 1);
            this.gainSkillExperience(owner); 
        }
    }
}

Actions.addAction(new DivineRessurection());
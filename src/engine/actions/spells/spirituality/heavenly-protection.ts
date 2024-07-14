import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, DamageType, SkillName } from "@enums";
import { BuffDebuff, BuffDebuffStates, Entity } from "@engine";

export class HeavenlyProtection extends BaseAction {
    public override id = 27;
    public override name = "Heavenly Protection";
    public override namespace = "HeavenlyProtection";
    public override type = ActionType.TargetSelf;
    public override costType = ActionCostType.Mana;
    public override cost = 20;
    public override skill = SkillName.Spirituality;
    public override skillRequeriment = 3;
    public override preCastTime = 0.1;
    public override castSay = "Altharini Gardis";

    public override exec(owner: Entity, target: Entity) {
        if(target){
            target.applyBuffDebuff(new BuffDebuff(BuffDebuffStates.HeavenlyProtection, 5, owner, this)); 
            this.gainSkillExperience(owner); 
        }          
    }

    public override effectOnTakeDamage(owner: Entity,causer: Entity, damage: number, damageType: DamageType) {
        return 0;
    }
}

Actions.addAction(new HeavenlyProtection());
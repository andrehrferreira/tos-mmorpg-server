import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { BuffDebuff, BuffDebuffStates, Entity } from "@engine";

export class EchoOfTheDeath extends BaseAction {
    public override id = 36;
    public override name = "Echo Of The Death";
    public override namespace = "EchoOfTheDeath";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 80;
    public override skill = SkillName.Necromancy;
    public override skillRequeriment = 7;
    public override preCastTime = 0.1;
    public override castSay = "Voxium Ab Mortuir";

    public override exec(owner: Entity, target: Entity){
        if(target.mapIndex === owner.mapIndex || target.team.IsAllyOf(owner.team))
            target.applyBuffDebuff(new BuffDebuff(BuffDebuffStates.EchoOfTheDeath, 10, owner, this));
        
        this.gainSkillExperience(owner); 
    }

    public override effectOnTakeDamage(
        owner: Entity,
        causer: Entity, 
        damage: number, 
        damageType: DamageType        
    ) {
        causer.takeDamage(owner, Dices.D1D4, damageType, damage, this);
        return damage;
    }
}

Actions.addAction(new EchoOfTheDeath());
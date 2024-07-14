import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, DamageType, SkillName } from "@enums";
import { BuffDebuff, BuffDebuffStates, Entity } from "@engine";

export class ShatteringImpact extends BaseAction {
    public override id = 42;
    public override name = "Shattering Impact";
    public override namespace = "ShatteringImpact";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 30;
    public override skill = SkillName.TwoHandedWeapons;
    public override skillRequeriment = 2;
    public override preCastTime = 0.1;

    public override exec(owner: Entity, target: Entity) {
        if(target)
            target.applyBuffDebuff(new BuffDebuff(BuffDebuffStates.ShatteringImpact, 10, owner, this));           
    }

    public override effectOnHit(owner: Entity, causer: Entity, damage: number, damageType: DamageType) {
        owner.applyBuffDebuff(new BuffDebuff(BuffDebuffStates.ShatteringImpactEffect, 5, causer, new ShatteringImpactEffect()));           
        return damage;
    }
}

export class ShatteringImpactEffect extends BaseAction {
    public override id = 42;
    public override name = "Shattering Impact Effect";
    public override namespace = "ShatteringImpactEffect";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 0;

    public override effectOnTakeDamage(owner: Entity, causer: Entity, damage: number, damageType: DamageType) {
        return Math.round(Math.max(damage / 2, 0));
    }
}

Actions.addAction(new ShatteringImpact());
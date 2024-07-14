import { Dices, DamageType } from "@enums";
import { BaseAction } from "..";
import { Entity } from "../entities";
import { EntityStates, BuffDebuffStates } from "./flags";

export enum ConditionType {
    None,
    Burning,
    Bleeding,
    Electrified,
    Chilling,
    Poisoned,
    Healing,
    Stunned,
    Slowed,
    Snared,
    Frozen,
    Feared
}

export class Condition {
    public Dealer: Entity;
    public Lifetime: number;
    public Type: ConditionType;
    public Value: Dices;
    public DamageBonus: number = 0;

    constructor(type: ConditionType, lifetime: number, dealer: Entity, value: Dices = Dices.None, damageBonus: number = 0){
        this.Type = type;
        this.Lifetime = lifetime * 1000;
        this.Dealer = dealer;
        this.Value = value;
        this.DamageBonus = damageBonus;
    }

    public apply(c: Entity){
        switch(this.Type){
            case ConditionType.Burning: c.states.addFlag(EntityStates.Burning); break;
            case ConditionType.Bleeding: c.states.addFlag(EntityStates.Bleeding); break;
            case ConditionType.Poisoned: c.states.addFlag(EntityStates.Poisoned); break;
            case ConditionType.Slowed: break;
            case ConditionType.Frozen: c.states.addFlag(EntityStates.Frozen); break;
            case ConditionType.Stunned: c.states.addFlag(EntityStates.Stunned); break;
            case ConditionType.Feared: 
                c.states.addFlag(EntityStates.Feared); 
            break;
        }
    }

    public refresh(c: Entity, dealer: Entity, newLifetime: number, newValue: Dices){
        switch(this.Type){
            case ConditionType.Burning:
            case ConditionType.Bleeding:
            case ConditionType.Poisoned:
                this.Lifetime = newLifetime + (this.Lifetime % 1);
                this.Value = newValue;
            break;
        }
    }

    public remove(c: Entity){
        switch(this.Type){
            case ConditionType.Burning: c.states.removeFlag(EntityStates.Burning); break;
            case ConditionType.Bleeding: c.states.removeFlag(EntityStates.Bleeding); break;
            case ConditionType.Poisoned: c.states.removeFlag(EntityStates.Poisoned); break;
            case ConditionType.Frozen: c.states.removeFlag(EntityStates.Frozen); break;
            case ConditionType.Stunned: c.states.removeFlag(EntityStates.Stunned); break;
            case ConditionType.Feared: c.states.removeFlag(EntityStates.Feared); break;
        }
    }

    public update(c: Entity){
        let previousLifetime = this.Lifetime;
        this.Lifetime -= 1000;

        switch(this.Type){
            case ConditionType.Burning: 
                if(Math.trunc(this.Lifetime) < Math.trunc(previousLifetime))
                    c.takeDamage(this.Dealer, this.Value, DamageType.Fire, this.DamageBonus);                
            break;
            case ConditionType.Poisoned: 
                if(Math.trunc(this.Lifetime) < Math.trunc(previousLifetime))
                    c.takeDamage(this.Dealer, this.Value, DamageType.Poison, this.DamageBonus);                
            break;
            case ConditionType.Bleeding: 
                if(Math.trunc(this.Lifetime) < Math.trunc(previousLifetime))
                    c.takeDamage(this.Dealer, this.Value, DamageType.Bleed, this.DamageBonus);                
            break;
            case ConditionType.Healing:
                if(Math.trunc(this.Lifetime) < Math.trunc(previousLifetime))
                    c.heal(this.Dealer, c.rollDice(this.Value));
            break;
        }
    }
}

export class BuffDebuff {
    public Type: BuffDebuffStates;
    public Dealer: Entity;
    public Lifetime: number;
    public Action: BaseAction
 
    constructor(type: BuffDebuffStates, lifetime: number, dealer: Entity, action: BaseAction){
        this.Type = type;
        this.Lifetime = lifetime * 1000;
        this.Dealer = dealer;
        this.Action = action;
    }

    public apply(c: Entity) {
        c.buffsDebuffsState.addFlag(this.Type);
    }

    public refresh(c: Entity, newLifetime: number){
        this.Lifetime = newLifetime + (this.Lifetime % 1);
    }

    public remove(c: Entity) {
        c.buffsDebuffsState.removeFlag(this.Type);
    }

    public update(c: Entity) {
        this.Lifetime -= 1000;
    }
}
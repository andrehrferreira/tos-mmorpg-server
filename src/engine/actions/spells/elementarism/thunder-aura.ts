import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { BuffDebuff, BuffDebuffStates, Entity } from "@engine";

export class ThunderAura extends BaseAction {
    public override id = 48;
    public override name = "Thunder Aura";
    public override namespace = "ThunderAura";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 50;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 6;
    public override preCastTime = 0.1;
    public override damage = Dices.D3D6;
    public override castSay = "Aurion Voltaris";

    public override damagePerLevel = new Map<number, Dices>([
        [0, Dices.D1D6],
        [1, Dices.D1D8],
        [2, Dices.D1D10],
        [3, Dices.D2D6],
        [4, Dices.D2D8],
        [5, Dices.D2D10],
        [6, Dices.D3D6],
        [7, Dices.D3D8],
        [8, Dices.D3D10],
        [9, Dices.D4D6],
        [10, Dices.D4D8],
        [11, Dices.D4D10],
        [12, Dices.D5D6],
    ]);

    public override exec(owner: Entity, target: Entity){
        if(target.mapIndex === owner.mapIndex || target.team.IsAllyOf(owner.team)){
            target.applyBuffDebuff(new BuffDebuff(BuffDebuffStates.ThunderAura, 20, owner, this));  
            this.gainSkillExperience(owner); 
        }                    
    }

    public override effectOnTakeDamage(
        owner: Entity,
        causer: Entity, 
        damage: number, 
        damageType: DamageType        
    ) {
        causer.takeDamage(owner, this.damage, DamageType.Energy);
        return (damageType === DamageType.Energy) ? Math.abs(Math.max(damage / 2, 0)) : damage;
    }
}

Actions.addAction(new ThunderAura());
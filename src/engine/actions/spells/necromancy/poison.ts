import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates } from "@engine";

export class Poison extends BaseAction {
    public override id = 0x4;
    public override name = "Poison";
    public override namespace = "Poison";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 10;
    public override skill = SkillName.Necromancy;
    public override skillRequeriment = 2;
    public override damage? = Dices.D1D4;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Poison;
    public override preCastTime = 3;
    public override castSay = "Zoratheri";
    
    public override exec(owner: Entity, target: Entity){
        if(target){
            const damageMods = this.getMods(owner, SkillName.Necromancy, this.weaponAmplify);
            target.takeDamage(owner, this.damage, DamageType.Poison, damageMods);
            target.applyCondition(new Condition(ConditionType.Poisoned, 12, owner, this.damage, damageMods));
            target.states.addFlag(EntityStates.Poisoned);
            this.gainSkillExperience(owner); 
        }
    }
}

Actions.addAction(new Poison());
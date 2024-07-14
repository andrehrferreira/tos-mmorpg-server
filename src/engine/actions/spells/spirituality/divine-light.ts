import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Condition, ConditionType, Creature, CreatureType, Entity, EntityStates } from "@engine";
import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";

export class DivineLight extends BaseAction {
    public override id = 34;
    public override name = "Divine Light";
    public override namespace = "DivineLight";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 30;
    public override skill = SkillName.Spirituality;
    public override skillRequeriment = 4;
    public override damage? = Dices.D4D8;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Light;
    public override preCastTime = 0.1;
    public override castSay = "Althara Lumini";

    public override exec(owner: Entity, target: Entity){
        if(target){
            setTimeout(() => {
                target.applyCondition(new Condition(ConditionType.Stunned, 3, owner, 0));
                target.states.addFlag(EntityStates.Stunned);
                
                const damageMods = this.getMods(owner, SkillName.Spirituality, this.weaponAmplify);

                if(target instanceof Creature){
                    if((target as Creature).creatureType === CreatureType.Undead)
                        target.takeDamage(owner, this.damage, DamageType.Light, damageMods * 2); 
                    else
                        target.takeDamage(owner, this.damage, DamageType.Light, damageMods);          
                }
                else
                    target.takeDamage(owner, this.damage, DamageType.Light, damageMods);  

                this.gainSkillExperience(owner); 
            }, 1500);                      
        }
    }
}

Actions.addAction(new DivineLight());
import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Creature, CreatureType, Entity } from "@engine";

export class ExorcistFlame extends BaseAction {
    public override id = 31;
    public override name = "Exorcist Flame";
    public override namespace = "ExorcistFlame";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 10;
    public override skill = SkillName.Spirituality;
    public override skillRequeriment = 0;
    public override damage? = Dices.D2D6;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Light;
    public override preCastTime = 0.5;
    public override castSay = "Xalith Flamini";
    
    public override exec(owner: Entity, target: Entity){
        if(target){
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
        }
    }
}

Actions.addAction(new ExorcistFlame());
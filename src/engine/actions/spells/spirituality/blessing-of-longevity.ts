import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Creature, CreatureType, Entity, EntityStates } from "@engine";
import { BaseHealAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";

export class BlessingOfLongevity extends BaseHealAction {
    public override id = 35;
    public override name = "Blessing Of Longevity";
    public override namespace = "BlessingOfLongevity";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 60;
    public override skill = SkillName.Spirituality;
    public override skillRequeriment = 6;
    public override damage? = Dices.D5D10;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Light;
    public override preCastTime = 0.1;
    public override castSay = "Longara Thalor";

    public override damagePerLevel = new Map<number, Dices>([
        [0, Dices.D3D6],
        [1, Dices.D3D8],
        [2, Dices.D3D10],
        [3, Dices.D4D6],
        [4, Dices.D4D8],
        [5, Dices.D4D10],
        [6, Dices.D5D6],
        [7, Dices.D5D8],
        [8, Dices.D5D10],
        [9, Dices.D5D12],
        [10, Dices.D6D6],
        [11, Dices.D6D8],
        [12, Dices.D6D10],
    ]);

    public override exec(owner: Entity, target: Entity){
        if(target){
            const skillLevel = owner.getSkillValue(SkillName.Spirituality);
            let totalHeal = 0;
            
            this.execActionInterval(skillLevel, 1000, () => {
                let effect = this.getEffectValue(owner);
                totalHeal += effect;
                target.heal(owner, effect); 
            }).then(() => {
                if(totalHeal > 0)
                    this.gainSkillExperience(owner);                
            });

            target.states.removeFlag(EntityStates.Burning);
            target.states.removeFlag(EntityStates.Poisoned);
            target.states.removeFlag(EntityStates.Frozen);  
            target.states.removeFlag(EntityStates.Stunned); 
            target.states.removeFlag(EntityStates.Feared); 
            
            this.gainSkillExperience(owner); 
        }
    }
}

Actions.addAction(new BlessingOfLongevity());
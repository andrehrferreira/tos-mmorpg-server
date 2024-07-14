import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates, Random } from "@engine";

export class Poisonbolt extends BaseAction {
    public override id = 13;
    public override name = "Poisonbolt";
    public override namespace = "Poisonbolt";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 5;
    public override skill = SkillName.Druidy;
    public override skillRequeriment = 1;
    public override damage? = Dices.D1D4;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Poison;
    public override preCastTime = 0.1;
    public override castSay = "Zorath Itar";

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
        if(target){
            const skillValue = owner.getSkillValue(this.skill);
            const chancePoisonCondition = Random.MinMaxInt(1, 100);

            if(chancePoisonCondition < (10 + skillValue)){
                target.applyCondition(new Condition(ConditionType.Poisoned, 12, owner, this.damage));
                target.states.addFlag(EntityStates.Poisoned);
            }

            this.gainSkillExperience(owner); 
        }
    }
}

Actions.addAction(new Poisonbolt());
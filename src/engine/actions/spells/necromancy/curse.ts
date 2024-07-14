import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Condition, ConditionType, Entity } from "@engine";

export class Curse extends BaseAction {
    public override id = 17;
    public override name = "Curse";
    public override namespace = "Curse";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 10;
    public override skill = SkillName.Necromancy;
    public override skillRequeriment = 0;
    public override damage? = Dices.D1D4;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Dark;
    public override preCastTime = 3;
    public override castSay = "Bervini Malicus";

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
            const damageMods = this.getMods(owner, SkillName.Necromancy, this.weaponAmplify);
            target.takeDamage(owner, this.damage, DamageType.Dark, damageMods);
            this.gainSkillExperience(owner);       
        }
    }
}

Actions.addAction(new Curse());
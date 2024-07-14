import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";

export class LightningStrike extends BaseAction {
    public override id = 16;
    public override name = "Lightning Strike";
    public override namespace = "LightningStrike";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 10;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 3;
    public override damage? = Dices.D3D6;
    public override weaponAmplify = WeaponType.Staff;
    public override preCastTime = 1;
    public override castSay = "Voltaritar";

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
        if(target && target.team.IsEnemyOf(owner.team)){
            const damageMods = this.getMods(owner, SkillName.Elementarism, this.weaponAmplify);
            target.takeDamage(owner, this.damage, DamageType.Cold, damageMods, this)
            this.gainSkillExperience(owner);          
        }
    }
}

Actions.addAction(new LightningStrike());
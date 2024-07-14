import { BaseAction, Actions, ActionType } from "..";
import { WeaponType } from "../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Entity } from "@engine";

export class WaterStrike extends BaseAction {
    public override id = 51;
    public override name = "Water Strike";
    public override namespace = "WaterStrike";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 0;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 0;
    public override damage? = Dices.D6D8;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Cold;
    public override preCastTime = 3;
    public override castSay = "Aqus Malicus";

    public override exec(owner: Entity, target: Entity){
        if(target)
            target.takeDamage(owner, this.damage, DamageType.Cold, 20);      
    }
}

Actions.addAction(new WaterStrike());
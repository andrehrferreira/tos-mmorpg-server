import { ActionCostType, SkillName } from "@enums";
import { BaseAction, Actions, ActionType } from "..";
import { WeaponType } from "../../items";
import { Entity } from "../../entities/entity";

export class DoubleShot extends BaseAction {
    public override id = 11;
    public override name = "Double Shot";
    public override namespace = "DoubleShot";
    public override type = ActionType.Projectible;
    public override costType = ActionCostType.Stamina;
    public override cost = 20;
    public override skill = SkillName.LongRangeWeapons;
    public override skillRequeriment = 2;
    public override weaponAmplify = WeaponType.Bow;

    public override exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner);                    
    }
}

Actions.addAction(new DoubleShot());
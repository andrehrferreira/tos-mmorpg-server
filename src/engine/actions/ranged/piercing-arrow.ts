import { ActionCostType, SkillName } from "@enums";
import { BaseAction, Actions, ActionType } from "..";
import { WeaponType } from "../../items";
import { Entity } from "../../entities/entity";

export class PiercingArrow extends BaseAction {
    public override id = 23;
    public override name = "Piercing Arrow";
    public override namespace = "PiercingArrow";
    public override type = ActionType.Projectible;
    public override costType = ActionCostType.Stamina;
    public override cost = 20;
    public override skill = SkillName.LongRangeWeapons;
    public override skillRequeriment = 3;
    public override weaponAmplify = WeaponType.Bow;

    public override exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner);                    
    }
}

Actions.addAction(new PiercingArrow());
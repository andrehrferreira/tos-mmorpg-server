import { ActionCostType, SkillName } from "@enums";
import { BaseAction, Actions, ActionType } from "..";
import { WeaponType } from "../../items";
import { Entity } from "../../entities/entity";

export class TripleShot extends BaseAction {
    public override id = 24;
    public override name = "Triple Shot";
    public override namespace = "TripleShot";
    public override type = ActionType.Projectible;
    public override costType = ActionCostType.Stamina;
    public override cost = 30;
    public override skill = SkillName.LongRangeWeapons;
    public override skillRequeriment = 4;
    public override weaponAmplify = WeaponType.Bow;

    public override exec(owner: Entity, target: Entity){
        this.gainSkillExperience(owner);                    
    }
}

Actions.addAction(new TripleShot());
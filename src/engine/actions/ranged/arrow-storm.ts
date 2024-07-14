import { ActionCostType, DamageType, SkillName } from "@enums";
import { BaseAction, Actions, ActionType } from "..";
import { WeaponType } from "../../items";
import { Creature, CreatureType, Entity } from "@engine";

export class ArrowStorm extends BaseAction {
    public override id = 22;
    public override name = "Arrow Storm";
    public override namespace = "ArrowStorm";
    public override type = ActionType.Projectible;
    public override costType = ActionCostType.Stamina;
    public override cost = 100;
    public override skill = SkillName.LongRangeWeapons;
    public override skillRequeriment = 5;
    public override weaponAmplify = WeaponType.Bow;

    public override effectOnTakeDamage(
        owner: Entity, 
        causer: Entity, 
        damage: number, 
        damageType: DamageType
    ) {
        if(owner instanceof Creature){
            if((owner as Creature).creatureType === CreatureType.Undead)
                return damage / 2;
        }

        return damage;
    }
}

Actions.addAction(new ArrowStorm());
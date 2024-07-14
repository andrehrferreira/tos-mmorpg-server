import { BaseAction, Actions, ActionType } from "..";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";
import { WeaponType } from "../../items";
import { Creature, CreatureType, Entity } from "@engine";

export class ArrowAutoAttack extends BaseAction {
    public override id = 33;
    public override name = "Arrow Auto Attack";
    public override namespace = "ArrowAutoAttack";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 1;
    public override damage = Dices.D1D4;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.LongRangeWeapons;
    public override skillRequeriment = 0;
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

Actions.addAction(new ArrowAutoAttack());
import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class QuickStrike extends BaseAction {
    public override id = 21;
    public override name = "Quick Strike";
    public override namespace = "QuickStrike";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 10;
    public override damage = Dices.D3D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.CombatWithWeapons;
    public override skillRequeriment = 3;
    public override weaponAmplify = WeaponType.Dagger;
    public override preCastTime = 0.1;
}

Actions.addAction(new QuickStrike());
import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class PreciseCut extends BaseAction {
    public override id = 20;
    public override name = "Precise Cut";
    public override namespace = "PreciseCut";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 30;
    public override damage = Dices.D2D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.CombatWithWeapons;
    public override skillRequeriment = 5;
    public override weaponAmplify = WeaponType.Dagger;
    public override preCastTime = 0.1;
}

Actions.addAction(new PreciseCut());
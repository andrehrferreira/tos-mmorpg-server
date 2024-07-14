import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class BladeFury extends BaseAction {
    public override id = 29;
    public override name = "Blade Fury";
    public override namespace = "BladeFury";
    public override type = ActionType.DirectionalCamera;
    public override costType = ActionCostType.Stamina;
    public override cost = 60;
    public override damage = Dices.D3D8;
    public override damageType = DamageType.Physic;
    public override skill = SkillName.CombatWithWeapons;
    public override skillRequeriment = 6;
    public override weaponAmplify = WeaponType.Sword;
    public override preCastTime = 0.1;
}

Actions.addAction(new BladeFury());
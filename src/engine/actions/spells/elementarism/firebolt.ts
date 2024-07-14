import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class Firebolt extends BaseAction {
    public override id = 8;
    public override name = "Firebolt";
    public override namespace = "Firebolt";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 5;
    public override damage = Dices.D1D6;
    public override damageType = DamageType.Fire;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 0;
    public override weaponAmplify = WeaponType.Staff;
    public override preCastTime = 0.1;
    public override castSay = "Flaminitar";

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
}

Actions.addAction(new Firebolt());
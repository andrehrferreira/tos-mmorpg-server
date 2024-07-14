import { WeaponType } from "@items";
import { BaseHealAction, Actions, ActionType } from "../..";
import { ActionCostType, Dices, SkillName } from "@enums";

export class Heal extends BaseHealAction {
    public override id = 2;
    public override name = "Heal";
    public override namespace = "Heal";
    public override type = ActionType.TargetSelf;
    public override costType = ActionCostType.Mana;
    public override cost = 10;
    public override skill = SkillName.Spirituality;
    public override skillRequeriment = 2;
    public override damage? = Dices.D3D6;
    public override weaponAmplify = WeaponType.Staff;
    public override preCastTime = 1.5;
    public override castSay = "Vitanis";

    public override damagePerLevel = new Map<number, Dices>([
        [0, Dices.D3D6],
        [1, Dices.D3D8],
        [2, Dices.D3D10],
        [3, Dices.D4D6],
        [4, Dices.D4D8],
        [5, Dices.D4D10],
        [6, Dices.D5D6],
        [7, Dices.D5D8],
        [8, Dices.D5D10],
        [9, Dices.D5D12],
        [10, Dices.D6D6],
        [11, Dices.D6D8],
        [12, Dices.D6D10],
    ]);
}

Actions.addAction(new Heal());
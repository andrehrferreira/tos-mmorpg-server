import { WeaponType } from "@items";
import { BaseAction, Actions, ActionType } from "../..";
import { ActionCostType, Dices, DamageType, SkillName } from "@enums";

export class Fireball extends BaseAction {
    public override id = 1;
    public override name = "Fireball";
    public override namespace = "Fireball";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 10;
    public override damage = Dices.D4D10;
    public override damageType = DamageType.Fire;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 4;
    public override weaponAmplify = WeaponType.Staff;
    public override preCastTime = 1;
    public override castSay = "Flamini Iroth";

    public override damagePerLevel = new Map<number, Dices>([
        [0, Dices.D2D8],
        [1, Dices.D2D10],
        [2, Dices.D2D12],
        [3, Dices.D3D8],
        [4, Dices.D3D10],
        [5, Dices.D3D12],
        [6, Dices.D4D8],
        [7, Dices.D4D10],
        [8, Dices.D4D12],
        [9, Dices.D5D8],
        [10, Dices.D5D10],
        [11, Dices.D5D12],
        [12, Dices.D6D8],
    ]);
}

Actions.addAction(new Fireball());
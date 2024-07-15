import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Entity } from "@engine";

export class DrainVitality extends BaseAction {
    public override id = 38;
    public override name = "Drain Vitality";
    public override namespace = "DrainVitality";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 20;
    public override skill = SkillName.Necromancy;
    public override skillRequeriment = 3;
    public override weaponAmplify = WeaponType.Staff;
    public override castSay = "Essara Vitanis";

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

    public override exec(owner: Entity, target: Entity){
        if(target){
            if(owner.transform.position.distanceTo(target.transform.position) <= 2500) {
                const skillLevel = owner.getSkillValue(SkillName.Necromancy);
                const lifeDrained = this.rollDice(Dices.D2D8) + skillLevel;
                target.takeDamage(owner, Dices.D1D4, DamageType.Dark, lifeDrained);
                owner.heal(owner, lifeDrained);
                this.gainSkillExperience(owner); 
            }
        }
    }
}

Actions.addAction(new DrainVitality());
import { WeaponType } from "@items";
import { Entity } from "../../../entities/entity";
import { Actions, ActionType, BaseAction } from "../..";
import { ActionCostType, Dices, SkillName } from "@enums";
import { Vector3 } from "@engine";

export class Regeneration extends BaseAction {
    public override id = 12;
    public override name = "Regeneration";
    public override namespace = "Regeneration";
    public override type = ActionType.Area;
    public override costType = ActionCostType.Mana;
    public override cost = 15;
    public override skill = SkillName.Druidy;
    public override skillRequeriment = 0;
    public override damage? = Dices.D1D4;
    public override weaponAmplify = WeaponType.Staff;
    public override radius?: number = 400;
    public override preCastTime = 2;
    public override castSay = "Alvori Vitanis";

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

    public override exec(owner: Entity, position: Vector3){
        if(position){
            const skillLevel = owner.getSkillValue(SkillName.Druidy);
            this.gainSkillExperience(owner); 
            let totalHeal = 0;
            
            this.execActionInterval(skillLevel + 1, 1000, () => {
                const allys = this.getAllyInRadius(owner, position, this.radius, true);
                
                allys.map((entity) => {
                    let effect = this.getEffectValue(owner) / 2;
                    totalHeal += effect;
                    entity.heal(owner, effect);                    
                });
            });            
        }
    }
}

Actions.addAction(new Regeneration());
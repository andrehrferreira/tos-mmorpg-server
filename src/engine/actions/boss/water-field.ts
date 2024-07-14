import { BaseAction, Actions, ActionType } from "..";
import { Entity } from "../../entities/entity";
import { WeaponType } from "../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Vector3 } from "@engine";

export class WaterField extends BaseAction {
    public override id = 52;
    public override name = "Water Field";
    public override namespace = "WaterField";
    public override type = ActionType.Area;
    public override costType = ActionCostType.Mana;
    public override cost = 0;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 12;
    public override damage? = Dices.D2D10;
    public override radius?: number = 600;
    public override weaponAmplify: WeaponType = WeaponType.Staff;
    public override preCastTime: number = 1.8;
    public override castSay = "Aqus Fatal";

    public override exec(owner: Entity, position: Vector3){        
        if(position){
            const enemies = this.getEnemiesInRadius(owner, position, this.radius);
               
            enemies.map((entity) => {
                entity.takeDamage(owner, this.damage, DamageType.Cold, 20);
            });          
        }
    }
}

Actions.addAction(new WaterField());
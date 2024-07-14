import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Vector3 } from "@engine";

export class TouchOfDecomposition extends BaseAction {
    public override id = 47;
    public override name = "Touch Of Decomposition";
    public override namespace = "TouchOfDecomposition";
    public override type = ActionType.Area;
    public override costType = ActionCostType.Mana;
    public override cost = 40;
    public override skill = SkillName.Necromancy;
    public override skillRequeriment = 4;
    public override damage? = Dices.D1D4;
    public override radius?: number = 400;
    public override weaponAmplify: WeaponType = WeaponType.Staff;
    public override preCastTime: number = 2.3;
    public override castSay = "Dektor Tarnis";

    public override exec(owner: Entity, position: Vector3){        
        if(position){
            const damageMods = this.getMods(owner, SkillName.Necromancy, this.weaponAmplify);

            this.execActionInterval(6, 500, () => {
                const enemies = this.getEnemiesInRadius(owner, owner.transform.position, this.radius);
               
                enemies.map((entity) => {
                    entity.takeDamage(owner, this.damage, DamageType.Dark, damageMods);
                });
            }).then(() => {
                this.gainSkillExperience(owner);
            });            
        }
    }
}

Actions.addAction(new TouchOfDecomposition());
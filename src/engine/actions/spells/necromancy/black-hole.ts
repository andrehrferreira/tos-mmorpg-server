import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Vector3 } from "@engine";

export class BlackHole extends BaseAction {
    public override id = 0x3;
    public override name = "Black Hole";
    public override namespace = "BlackHole";
    public override type = ActionType.Area;
    public override costType = ActionCostType.Mana;
    public override cost = 50;
    public override skill = SkillName.Necromancy;
    public override skillRequeriment = 8;
    public override damage? = Dices.D1D10;
    public override radius?: number = 600;
    public override weaponAmplify: WeaponType = WeaponType.Staff;
    public override preCastTime: number = 1.8;

    public override exec(owner: Entity, position: Vector3){        
        if(position){
            const damageMods = this.getMods(owner, SkillName.Necromancy, this.weaponAmplify);

            this.execActionInterval(6, 500, () => {
                const enemies = this.getEnemiesInRadius(owner, position, this.radius);
               
                enemies.map((entity) => {
                    entity.takeDamage(owner, this.damage, DamageType.Dark, damageMods);
                    const direction = position.subtract(entity.transform.position).normalize();
                    entity.transform.position = entity.transform.position.add(direction.scale(10));
                });
            }).then(() => {
                const enemies = this.getEnemiesInRadius(owner, position, this.radius);
                enemies.map((entity) => entity.takeDamage(owner, this.damage, DamageType.Dark, damageMods + 10));
                this.gainSkillExperience(owner);
            });            
        }
    }
}

Actions.addAction(new BlackHole());
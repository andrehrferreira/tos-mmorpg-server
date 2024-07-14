import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Vector3 } from "@engine";

export class Blizzard extends BaseAction {
    public override id = 9;
    public override name = "Blizzard";
    public override namespace = "Blizzard";
    public override type = ActionType.Area;
    public override costType = ActionCostType.Mana;
    public override cost = 100;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 10;
    public override damage? = Dices.D3D12;
    public override radius?: number = 1500;
    public override weaponAmplify: WeaponType = WeaponType.Staff;
    public override preCastTime = 1;
    public override castSay = "Nivorix Baryn";

    public override exec(owner: Entity, position: Vector3){
        if(position){
            const damageMods = this.getMods(owner, SkillName.Elementarism, this.weaponAmplify);

            this.execActionInterval(7, 500, () => {
                const enemies = this.getEnemiesInRadius(owner, position, this.radius);
                
                enemies.map((entity) => {
                    entity.takeDamage(owner, this.damage, DamageType.Cold, damageMods);                    
                });
            }).then(() => {
                const enemies = this.getEnemiesInRadius(owner, position, this.radius);
                enemies.map((entity) => entity.takeDamage(owner, this.damage, DamageType.Cold, damageMods + 10));
                this.gainSkillExperience(owner);
            });            
        }
    }
}

Actions.addAction(new Blizzard());
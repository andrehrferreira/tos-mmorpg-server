import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates, Vector3 } from "@engine";
import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";

export class HammerOfTheGods extends BaseAction {
    public override id = 41;
    public override name = "Hammer Of The Gods";
    public override namespace = "HammerOfTheGods";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Stamina;
    public override cost = 30;
    public override skill = SkillName.TwoHandedWeapons;
    public override skillRequeriment = 4;
    public override damage? = Dices.D5D10;
    public override weaponAmplify = WeaponType.Hammer;
    public override damageType = DamageType.Physic;
    public override preCastTime = 0.1;
    public override radius = 400;

    public override exec(owner: Entity, position: Vector3){        
        if(position){
            const damageMods = this.getMods(owner, SkillName.TwoHandedWeapons, this.weaponAmplify);
            const enemies = this.getEnemiesInRadius(owner, position, this.radius);

            enemies.map((entity) => {
                entity.takeDamage(owner, this.damage, DamageType.Dark, damageMods + 10);
                entity.applyCondition(new Condition(ConditionType.Stunned, 1, owner, 0));
                entity.states.addFlag(EntityStates.Stunned);
            });          
        }
    }
}

Actions.addAction(new HammerOfTheGods());
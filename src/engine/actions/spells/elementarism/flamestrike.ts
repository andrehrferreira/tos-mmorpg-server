import { BaseAction, Actions, ActionType } from "../..";
import { WeaponType } from "../../../items/items";
import { ActionCostType, DamageType, Dices, SkillName } from "@enums";
import { Condition, ConditionType, Entity, EntityStates } from "@engine";

export class FlameStrike extends BaseAction {
    public override id = 28;
    public override name = "Flame Strike";
    public override namespace = "FlameStrike";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 50;
    public override skill = SkillName.Elementarism;
    public override skillRequeriment = 8;
    public override damage? = Dices.D5D10;
    public override weaponAmplify = WeaponType.Staff;
    public override damageType = DamageType.Fire;
    public override preCastTime = 2;
    public override castSay = "Vor Flamini Iroth";

    public override exec(owner: Entity, target: Entity){
        if(target && !owner.isDead){
            const damageMods = this.getMods(owner, SkillName.Elementarism, this.weaponAmplify);
            target.takeDamage(owner, this.damage, DamageType.Fire, damageMods);
            target.applyCondition(new Condition(ConditionType.Burning, 12, owner, Dices.D1D8));
            target.states.addFlag(EntityStates.Burning);
            this.gainSkillExperience(owner); 
        }
    }
}

Actions.addAction(new FlameStrike());
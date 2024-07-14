import { BaseAction, Actions, ActionType } from "../..";
import { Entity } from "../../../entities/entity";
import { ActionCostType, SkillName } from "@enums";
import { Condition, ConditionType, Vector3 } from "@engine";

export class Roots extends BaseAction {
    public override id = 32;
    public override name = "Roots";
    public override namespace = "Roots";
    public override type = ActionType.Area;
    public override costType = ActionCostType.Mana;
    public override cost = 50;
    public override skill = SkillName.Druidy;
    public override skillRequeriment = 5;
    public override radius?: number = 800;
    public override preCastTime: number = 0.1;
    public override castSay = "Ryndor Vareth";

    public override exec(owner: Entity, position: Vector3){        
        if(position){
            const enemies = this.getEnemiesInRadius(owner, position, this.radius);
            
            enemies.map((entity) => {
                entity.applyCondition(new Condition(ConditionType.Stunned, 10, owner))
                entity.selectTarget(owner.mapIndex, owner);
            });      
            
            this.gainSkillExperience(owner); 
        }
    }
}

Actions.addAction(new Roots());
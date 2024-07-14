import { ActionCostType, SkillName } from "@enums";
import { Vector3, BearSummon } from "@engine";

import { BaseSummonAction, Actions, ActionType } from "../..";
import { Player } from "../../../entities";

export class SummonBear extends BaseSummonAction {
    public override id = 7;
    public override name = "Summon Bear";
    public override namespace = "SummonBear";
    public override type = ActionType.Target;
    public override costType = ActionCostType.Mana;
    public override cost = 50;
    public override skill = SkillName.Druidy;
    public override skillRequeriment = 6;
    public override preCastTime = 10;

    public override exec(owner: Player, position: Vector3) {
        this.createSummon(owner, new BearSummon(owner), position);
        this.gainSkillExperience(owner); 
    }
}

Actions.addAction(new SummonBear());
import { Actions, BaseAction } from "..";
import { ActionCostType } from "@enums";

export class DanceGangnamStyle extends BaseAction {
    public override id = 0x0;
    public override name = "Gangnam Style";
    public override namespace = "GangnamStyle";
    public override costType = ActionCostType.None;
    public override cost = 0;
}

Actions.addAction(new DanceGangnamStyle());
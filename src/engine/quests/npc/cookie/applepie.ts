import { Quest, QuestType, IItemRef, IReward } from "../../quest";

import { ApplePie, GoldCoin } from "@items";

export class QuestApplePie extends Quest {
    public override namespace = "QuestApplePie";
    public override type = QuestType.Collect;
    public override name = "Apple Pie";
    public override description = `Today I woke up with a craving for apple pie, bring me 20 apples and I'll give you a fat slice and a reward.`;
    
    public override itemCollect: Array<IItemRef> = [
        { ItemName: "Apple", Quantity: 20 }
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 10 },
        { Item: ApplePie, Quantity: 1 }
    ]
}

Quest.AddQuest("QuestApplePie", QuestApplePie);
import { Quest, QuestType, IItemRef, IReward } from "../quest";

import { BetaGift } from "@items";

export class QuestBetaTicket extends Quest {
    public override namespace = "QuestBetaTicket";
    public override type = QuestType.Collect;
    public override name = "Welcome to Shadowland";
    public override description = `Welcome to Tales Of Shadowland, for being present at such an important moment in our history we will present you with some treats prepared by the Uzmi Games team that will be kept in your account in future tests and at the official launch.`;
    
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "BetaTicket", Quantity: 1 }
    ];

    public override rewards: Array<IReward> = [
        { Item: BetaGift, Quantity: 1 }
    ]
}

Quest.AddQuest("QuestBetaTicket", QuestBetaTicket);
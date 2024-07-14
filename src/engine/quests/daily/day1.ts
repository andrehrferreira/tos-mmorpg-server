import { DailyQuests } from "..";

import { 
    QuestBetaTicket
} from "../beta";

import { 
    QuestFeedingTheVillage, QuestHelpTheAlchemist,
    QuestHelpTheCarpenter, QuestBasicEquipment, 
    QuestVillageResources, QuestBasicWeapons,
    QuestJewelers, QuestTheAdventurer, QuestMoondance
} from "../0_tutorial";

DailyQuests.AddQuest(1, new DailyQuests([
    QuestVillageResources, QuestFeedingTheVillage,
    QuestHelpTheCarpenter, QuestHelpTheAlchemist,
    QuestBasicEquipment, QuestBasicWeapons,
    QuestJewelers, QuestTheAdventurer, QuestMoondance,
    QuestBetaTicket
]));
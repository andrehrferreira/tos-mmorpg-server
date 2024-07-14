import { Quest, QuestType, IItemRef, IReward } from "../quest";

import { 
    GoldCoin, Wheat, Potato, Water, Ham,
    Wine, Sandwich, ShepherdStaff, PlankShield,
    SmallManaPotion, SmallLifePotion, SmallStaminaPotion, 
    CommonVillagerChest, VillagerHood, LeatherBracer, 
    CommonBoots, LongBow, Hatchet, ShortSword,
    ForestStaff, SilverRing, SilkCloak, PetWaspPetItem,
    CardSkeleton  
} from "@items";

export class QuestVillageResources extends Quest {
    public override namespace = "QuestVillageResources";
    public override type = QuestType.Collect;
    public override name = "Village Resources";
    public override description = `The explorers who arrived before you have embarked on an ambitious project to establish a small village on the island. This nascent settlement is the first step towards creating a thriving community in an untouched and wild environment. To help the village grow and flourish, it is imperative to gather essential resources such as wood and stone.

Wood is needed for constructing the basic framework of the village buildings, including houses for the settlers, workshops for craftsmen, and storage facilities for supplies. It will also be used to build sturdy fences to protect the village from wild animals and to create pathways that make movement around the settlement safer and easier. The wooden structures will serve as the foundation upon which the village's future is built.
    
Stone, on the other hand, is vital for creating strong and durable foundations for the buildings. It will be used to pave roads, ensuring that the village remains accessible even during adverse weather conditions. Additionally, stone is crucial for constructing fireplaces and ovens, which will provide warmth and means for cooking food, essential for the villagers' survival and comfort.`;
    
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "Wood", Quantity: 50 },
        { ItemName: "Stone", Quantity: 50 }
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 100 },
        { Item: Water, Quantity: 30 },
        { Item: Wheat, Quantity: 30 },
        { Item: Potato, Quantity: 10 }
    ]
}

export class QuestFeedingTheVillage extends Quest {
    public override namespace = "QuestFeedingTheVillage";
    public override type = QuestType.Collect;
    public override name = "Feeding The Village";
    public override description = "The construction of the village requires a lot of physical effort from the workers. To ensure everyone is well-fed, help make bread and gather fruit. These foods will provide the necessary energy for the explorers to continue their hard work.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "Bread", Quantity: 10 },
        { ItemName: "Apple", Quantity: 10 },
        { ItemName: "Sausage", Quantity: 10 },
        { ItemName: "Meat", Quantity: 10 }
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 100 },
        { Item: Ham, Quantity: 2 },
        { Item: Wine, Quantity: 1 },
        { Item: Sandwich, Quantity: 2 }
    ]
}

export class QuestHelpTheCarpenter extends Quest {
    public override namespace = "QuestHelpTheCarpenter";
    public override type = QuestType.Collect;
    public override name = "Help The Carpenter";
    public override description = "The village carpenter is busy constructing furniture and other essential structures for the community. He needs a large amount of wood to continue his work. Help him gather the necessary wood to ensure the village's construction is not interrupted.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "Wood", Quantity: 100 }
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 100 },
        { Item: ShepherdStaff, Quantity: 1 },
        { Item: PlankShield, Quantity: 1 }
    ]
}

export class QuestHelpTheAlchemist extends Quest {
    public override namespace = "QuestHelpTheAlchemist";
    public override type = QuestType.Collect;
    public override name = "Help The Alchemist";
    public override description = "The village alchemist is preparing potions and remedies for the explorers. He needs various herbs for his mixtures. Help gather BloodBerries, YellowFlowers, and ManaMushrooms to ensure the potion supply is always full and everyone can stay healthy.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "BloodBerry", Quantity: 20 },
        { ItemName: "YellowFlower", Quantity: 20 },
        { ItemName: "ManaMushroom", Quantity: 20 }
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 100 },
        { Item: SmallLifePotion, Quantity: 10 },
        { Item: SmallStaminaPotion, Quantity: 10 },
        { Item: SmallManaPotion, Quantity: 10 }
    ]
}

export class QuestBasicEquipment extends Quest {
    public override namespace = "QuestBasicEquipment";
    public override type = QuestType.Collect;
    public override name = "Basic Equipment";
    public override description = "Wanterra is an island that holds many mysteries, so it is always important to be well equipped to explore unexplored places, with your hunting skills, acquire skin from animals such as deer, bears, extract their hide and manufacture leather.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "Leather", Quantity: 30 }
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 100 },
        { Item: CommonVillagerChest, Quantity: 1 },
        { Item: VillagerHood, Quantity: 1 },
        { Item: LeatherBracer, Quantity: 1 },
        { Item: CommonBoots, Quantity: 1 }
    ]
}

export class QuestBasicWeapons extends Quest {
    public override namespace = "QuestBasicWeapons";
    public override type = QuestType.Collect;
    public override name = "Basic Weapons";
    public override description = "To start your combat training and it is always important to have good weapons, the village armorer prepared a set of weapons for those who want to help keep the residents safe.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "Wood", Quantity: 20 },
        { ItemName: "Fiber", Quantity: 20 },
        { ItemName: "Stone", Quantity: 20 },
        { ItemName: "IronIngot", Quantity: 10 }
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 100 },
        { Item: LongBow, Quantity: 1 },
        { Item: Hatchet, Quantity: 1 },
        { Item: ShortSword, Quantity: 1 },
        { Item: ForestStaff, Quantity: 1 }
    ]
}

export class QuestJewelers extends Quest {
    public override namespace = "QuestJewelers";
    public override type = QuestType.Collect;
    public override name = "The Jeweler";
    public override description = "The village jeweler needs resources to train his skills and is rewarding anyone who gives him some ingots.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "GoldIngot", Quantity: 2 },
        { ItemName: "SilverIngot", Quantity: 10 },
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 500 },
        { Item: SilverRing, Quantity: 1 },
    ]
}

export class QuestTheAdventurer extends Quest {
    public override namespace = "QuestTheAdventurer";
    public override type = QuestType.Collect;
    public override name = "The Adventurer";
    public override description = "Adventuring around Wanterra generates great rewards, collect some peculiar items available on the island to complete your mission.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "Horn", Quantity: 1 },
        { ItemName: "Fin", Quantity: 1 },
        { ItemName: "DeerSkull", Quantity: 1 },
        { ItemName: "NatureEssence", Quantity: 10 },
        { ItemName: "Sand", Quantity: 50 },
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 1500 },
        { Item: SilkCloak, Quantity: 1 },
    ]
}

export class QuestMoondance extends Quest {
    public override namespace = "QuestMoondance";
    public override type = QuestType.Collect;
    public override name = "Moon Dance";
    public override description = "In the depths of Wanterra some beings have very rare items that can be worth a good reward, train to become strong and face them to earn your reward.";
    public override progress = 0;

    public override itemCollect: Array<IItemRef> = [
        { ItemName: "ElementalDust", Quantity: 10 },
        { ItemName: "NatureEssence", Quantity: 20 },
        { ItemName: "MoonStone", Quantity: 1 },
    ];

    public override rewards: Array<IReward> = [
        { Item: GoldCoin, Quantity: 5000 },
        { Item: PetWaspPetItem, Quantity: 1 },
        { Item: CardSkeleton, Quantity: 1 },
    ]
}

Quest.AddQuest("QuestVillageResources", QuestVillageResources);
Quest.AddQuest("QuestFeedingTheVillage", QuestFeedingTheVillage);
Quest.AddQuest("QuestHelpTheCarpenter", QuestHelpTheCarpenter);
Quest.AddQuest("QuestHelpTheAlchemist", QuestHelpTheAlchemist);
Quest.AddQuest("QuestBasicEquipment", QuestBasicEquipment);
Quest.AddQuest("QuestBasicWeapons", QuestBasicWeapons);
Quest.AddQuest("QuestJewelers", QuestJewelers);
Quest.AddQuest("QuestTheAdventurer", QuestTheAdventurer);
Quest.AddQuest("QuestMoondance", QuestMoondance);
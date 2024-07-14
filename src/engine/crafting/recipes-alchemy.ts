import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    SmallLifePotion, SmallManaPotion, SmallStaminaPotion,
    SmallCurePotion, SmallPoisonPotion, LifePotion, LargeLifePotion,
    RedHerbMix, BlueHerbMix, GreenHerbMix, YellowHerbMix, BlackHerbMix,
    StaminaPotion, LargeStaminaPotion, ManaPotion, LargeManaPotion,
    CurePotion, LargeCurePotion, PoisonPotion, LargePoisonPotion,
    OblivionPotion, SmallRestoreElixir, RestoreElixir, BigRestoreElixir,
    ShrinkagePotion 
} from "../items/resources";

//Life
CraftRecipe.addRecipe("SMALLLIFEPOTION", new CraftRecipe(
    SmallLifePotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "BloodBerry", Quantity: 3 }
    ], SkillName.Alchemy, 0, "Life Potions"
));

CraftRecipe.addRecipe("LIFEPOTION", new CraftRecipe(
    LifePotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "BloodBerry", Quantity: 10 },
    ], SkillName.Alchemy, 3, "Life Potions"
));

CraftRecipe.addRecipe("LARGELIFEPOTION", new CraftRecipe(
    LargeLifePotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "RedHerbMix", Quantity: 1 },
        { ItemName: "BloodBerry", Quantity: 10 },
    ], SkillName.Alchemy, 6, "Life Potions"
));

//Stamina
CraftRecipe.addRecipe("SMALLSTAMINAPOTION", new CraftRecipe(
    SmallStaminaPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "YellowFlower", Quantity: 3 }
    ], SkillName.Alchemy, 0, "Stamina Potions"
));

CraftRecipe.addRecipe("STAMINAPOTION", new CraftRecipe(
    StaminaPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "YellowFlower", Quantity: 10 }
    ], SkillName.Alchemy, 3, "Stamina Potions"
));

CraftRecipe.addRecipe("LARGESTAMINAPOTION", new CraftRecipe(
    LargeStaminaPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "YellowFlower", Quantity: 10 },
        { ItemName: "YellowHerbMix", Quantity: 1 }
    ], SkillName.Alchemy, 6, "Stamina Potions"
));

//Mana
CraftRecipe.addRecipe("SMALLMANAPOTION", new CraftRecipe(
    SmallManaPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "ManaMushroom", Quantity: 3 }
    ], SkillName.Alchemy, 1, "Mana Potions"
));

CraftRecipe.addRecipe("MANAPOTION", new CraftRecipe(
    ManaPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "ManaMushroom", Quantity: 10 }
    ], SkillName.Alchemy, 4, "Mana Potions"
));

CraftRecipe.addRecipe("LARGEMANAPOTION", new CraftRecipe(
    LargeManaPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "ManaMushroom", Quantity: 10 },
        { ItemName: "BlueHerbMix", Quantity: 1 }
    ], SkillName.Alchemy, 7, "Mana Potions"
));

//Cure
CraftRecipe.addRecipe("SMALLCUREPOTION", new CraftRecipe(
    SmallCurePotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "Root", Quantity: 3 }
    ], SkillName.Alchemy, 2, "Cure Potions"
));

CraftRecipe.addRecipe("CUREPOTION", new CraftRecipe(
    CurePotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "Root", Quantity: 10 },
        { ItemName: "BloodBerry", Quantity: 2 }
    ], SkillName.Alchemy, 4, "Cure Potions"
));

CraftRecipe.addRecipe("LARGECUREPOTION", new CraftRecipe(
    LargeCurePotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "Root", Quantity: 20 },
        { ItemName: "BloodBerry", Quantity: 10 }
    ], SkillName.Alchemy, 6, "Cure Potions"
));

//Poison
CraftRecipe.addRecipe("SMALLPOISONPOTION", new CraftRecipe(
    SmallPoisonPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "SulfurousAsh", Quantity: 1 },
        { ItemName: "OilPlant", Quantity: 1 },
        { ItemName: "SpiderFang", Quantity: 1 }
    ], SkillName.Alchemy, 3, "Poison Potions"
));

CraftRecipe.addRecipe("POISONPOTION", new CraftRecipe(
    PoisonPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "SulfurousAsh", Quantity: 5 },
        { ItemName: "OilPlant", Quantity: 5 },
        { ItemName: "SpiderFang", Quantity: 5 }
    ], SkillName.Alchemy, 6, "Poison Potions"
));

CraftRecipe.addRecipe("LARGEPOISONPOTION", new CraftRecipe(
    LargePoisonPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "SulfurousAsh", Quantity: 10 },
        { ItemName: "OilPlant", Quantity: 10 },
        { ItemName: "SpiderFang", Quantity: 10 },
        { ItemName: "Sting", Quantity: 1 }
    ], SkillName.Alchemy, 9, "Poison Potions"
));

//Elixir
CraftRecipe.addRecipe("SMALLRESTOREELIXIR", new CraftRecipe(
    SmallRestoreElixir, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "BlueHerbMix", Quantity: 1 },
        { ItemName: "RedHerbMix", Quantity: 1 },
        { ItemName: "YellowHerbMix", Quantity: 1 },
    ], SkillName.Alchemy, 5, "Restoration Elixir"
));

CraftRecipe.addRecipe("RESTOREELIXIR", new CraftRecipe(
    RestoreElixir, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "BlueHerbMix", Quantity: 3 },
        { ItemName: "RedHerbMix", Quantity: 3 },
        { ItemName: "YellowHerbMix", Quantity: 3 },
    ], SkillName.Alchemy, 8, "Restoration Elixir"
));

CraftRecipe.addRecipe("BIGRESTOREELIXIR", new CraftRecipe(
    BigRestoreElixir, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "BlueHerbMix", Quantity: 5 },
        { ItemName: "RedHerbMix", Quantity: 5 },
        { ItemName: "YellowHerbMix", Quantity: 5 },
    ], SkillName.Alchemy, 10, "Restoration Elixir"
));

//Extracts
CraftRecipe.addRecipe("REDHERBMIX", new CraftRecipe(
    RedHerbMix, 1, [
        { ItemName: "BloodBerry", Quantity: 10 },
        { ItemName: "RedAndBlackLeaves", Quantity: 1 },
        { ItemName: "FireFlower", Quantity: 1 },
    ], SkillName.Alchemy, 3, "Extracts"
));

CraftRecipe.addRecipe("BLUEHERBMIX", new CraftRecipe(
    BlueHerbMix, 1, [
        { ItemName: "ManaMushroom", Quantity: 10 },
        { ItemName: "BlueFlower", Quantity: 1 },
        { ItemName: "Root", Quantity: 1 },
    ], SkillName.Alchemy, 4, "Extracts"
));

CraftRecipe.addRecipe("YELLOWHERBMIX", new CraftRecipe(
    YellowHerbMix, 1, [
        { ItemName: "YellowFlower", Quantity: 10 },
        { ItemName: "OilPlant", Quantity: 1 },
        { ItemName: "SulfurousAsh", Quantity: 1 },
    ], SkillName.Alchemy, 5, "Extracts"
));

CraftRecipe.addRecipe("GREENHERBMIX", new CraftRecipe(
    GreenHerbMix, 1, [
        { ItemName: "Leaves", Quantity: 10 },
        { ItemName: "EdgyRoot", Quantity: 1 },
        { ItemName: "Garlic", Quantity: 1 },
    ], SkillName.Alchemy, 6, "Extracts"
));

CraftRecipe.addRecipe("BLACKHERBMIX", new CraftRecipe(
    BlackHerbMix, 1, [
        { ItemName: "BlackMushroom", Quantity: 10 },
        { ItemName: "BlackPlantWithThorns", Quantity: 1 },
        { ItemName: "Garlic", Quantity: 1 },
    ], SkillName.Alchemy, 7, "Extracts"
));

//Reset Stats
CraftRecipe.addRecipe("SHRINKAGEPOTION", new CraftRecipe(
    ShrinkagePotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "SoulStone", Quantity: 2 },
        { ItemName: "BlackHerbMix", Quantity: 4 },
        { ItemName: "WhiteFlower", Quantity: 10 },
    ], SkillName.Alchemy, 8, "Legendary Potions"
));

CraftRecipe.addRecipe("OBLIVIONPOTION", new CraftRecipe(
    OblivionPotion, 1, [
        { ItemName: "EmptyBottle", Quantity: 1 },
        { ItemName: "PhoenixFeather", Quantity: 1 },
        { ItemName: "SoulStone", Quantity: 1 },
        { ItemName: "BlackHerbMix", Quantity: 4 },
    ], SkillName.Alchemy, 10, "Legendary Potions"
));
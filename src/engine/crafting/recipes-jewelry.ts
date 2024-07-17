import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    ArcherRing, WarriorRing, WizardRing, SilverRing,
    RubySilverRing, SilverAndDiamondRing, SunstoneSilverRing,
    AmetistNecklace 
} from "../items";

CraftRecipe.addRecipe("SilverRing", new CraftRecipe(
    SilverRing, 1, [
        { ItemName: "SilverIngot", Quantity: 5 }
    ], SkillName.Jewelry, 0, "Rings"
));

CraftRecipe.addRecipe("RubySilverRing", new CraftRecipe(
    RubySilverRing, 1, [
        { ItemName: "SilverIngot", Quantity: 10 },
        { ItemName: "Ruby", Quantity: 1 }
    ], SkillName.Jewelry, 2, "Rings"
));

CraftRecipe.addRecipe("SilverAndDiamondRing", new CraftRecipe(
    SilverAndDiamondRing, 1, [
        { ItemName: "SilverIngot", Quantity: 10 },
        { ItemName: "Diamond", Quantity: 1 }
    ], SkillName.Jewelry, 3, "Rings"
));

CraftRecipe.addRecipe("SunstoneSilverRing", new CraftRecipe(
    SunstoneSilverRing, 1, [
        { ItemName: "SilverIngot", Quantity: 10 },
        { ItemName: "Sunstone", Quantity: 1 }
    ], SkillName.Jewelry, 3, "Rings"
));

//Class Ring
CraftRecipe.addRecipe("ArcherRing", new CraftRecipe(
    ArcherRing, 1, [
        { ItemName: "GoldIngot", Quantity: 1 },
        { ItemName: "SilverIngot", Quantity: 3 },
        { ItemName: "NatureEssence", Quantity: 10 }
    ], SkillName.Jewelry, 5, "Rings"
));

CraftRecipe.addRecipe("WarriorRing", new CraftRecipe(
    WarriorRing, 1, [
        { ItemName: "GoldIngot", Quantity: 1 },
        { ItemName: "SilverIngot", Quantity: 3 },
        { ItemName: "NatureEssence", Quantity: 10 }
    ], SkillName.Jewelry, 5, "Rings"
));

CraftRecipe.addRecipe("WizardRing", new CraftRecipe(
    WizardRing, 1, [
        { ItemName: "GoldIngot", Quantity: 1 },
        { ItemName: "SilverIngot", Quantity: 3 },
        { ItemName: "NatureEssence", Quantity: 10 }
    ], SkillName.Jewelry, 5, "Rings"
));

//Necklance
CraftRecipe.addRecipe("AmetistNecklace", new CraftRecipe(
    AmetistNecklace, 1, [
        { ItemName: "GoldIngot", Quantity: 10 },
        { ItemName: "SilverIngot", Quantity: 20 },
        { ItemName: "Ametist", Quantity: 1 }
    ], SkillName.Jewelry, 6, "Necklace"
));
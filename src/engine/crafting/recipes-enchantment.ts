import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    BlueCrystal, GreenCrystal, PurpleCrystal,
    WhiteCrystal, OrageCrystal, RainbowCrystal
} from "../items";

CraftRecipe.addRecipe("WhiteCrystal", new CraftRecipe(
    WhiteCrystal, 1, [
        { ItemName: "FragmentWhiteCrystal", Quantity: 10 },
    ], SkillName.Enchantment, 1, "Transmutation"
));

CraftRecipe.addRecipe("RainbowCrystal", new CraftRecipe(
    RainbowCrystal, 1, [
        { ItemName: "FragmentWhiteCrystal", Quantity: 100 },
    ], SkillName.Enchantment, 1, "Transmutation"
));

CraftRecipe.addRecipe("RainbowCrystal2", new CraftRecipe(
    RainbowCrystal, 1, [
        { ItemName: "WhiteCrystal", Quantity: 10 },
    ], SkillName.Enchantment, 1, "Transmutation"
));

CraftRecipe.addRecipe("GreenCrystal", new CraftRecipe(
    GreenCrystal, 1, [
        { ItemName: "WhiteCrystal", Quantity: 1 },
        { ItemName: "FragmentGreenCrystal", Quantity: 5 },
    ], SkillName.Enchantment, 3, "Transmutation"
));

CraftRecipe.addRecipe("BlueCrystal", new CraftRecipe(
    BlueCrystal, 1, [
        { ItemName: "GreenCrystal", Quantity: 1 },
        { ItemName: "FragmentBlueCrystal", Quantity: 5 },
    ], SkillName.Enchantment, 5, "Transmutation"
));

CraftRecipe.addRecipe("PurpleCrystal", new CraftRecipe(
    PurpleCrystal, 1, [
        { ItemName: "BlueCrystal", Quantity: 1 },
        { ItemName: "FragmentPurpleCrystal", Quantity: 5 },
    ], SkillName.Enchantment, 8, "Transmutation"
));

CraftRecipe.addRecipe("OrageCrystal", new CraftRecipe(
    OrageCrystal, 1, [
        { ItemName: "PurpleCrystal", Quantity: 1 },
        { ItemName: "FragmentOrangeCrystal", Quantity: 5 },
    ], SkillName.Enchantment, 10, "Transmutation"
));
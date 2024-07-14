import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    ApplePie, Bread, Sausage, OmeleteWithBacon,
    FishSteak, Mead, PotatoSoup, Chocolate, Wine, 
    Butter, Beer, OnionSoup, RoundCheese,
    BakedFish, Sushi, Cake, Cookies,
    Ribs, Sandwich, CheeseWedge, Ham, Meatstick
} from "../items";

CraftRecipe.addRecipe("BREAD", new CraftRecipe(
    Bread, 1, [
        { ItemName: "Wheat", Quantity: 2 },
        { ItemName: "Water", Quantity: 2 }
    ], SkillName.Cooking, 0, "Foods"
));

CraftRecipe.addRecipe("SAUSAGE", new CraftRecipe(
    Sausage, 1, [
        { ItemName: "Meat", Quantity: 5 }
    ], SkillName.Cooking, 1, "Foods"
));

CraftRecipe.addRecipe("OMELETEWITHBACON", new CraftRecipe(
    OmeleteWithBacon, 1, [
        { ItemName: "Egg", Quantity: 5 },
        { ItemName: "Bacon", Quantity: 2 }
    ], SkillName.Cooking, 2, "Foods"
));

CraftRecipe.addRecipe("FISHSTEAK", new CraftRecipe(
    FishSteak, 1, [
        { ItemName: "FishRaw", Quantity: 3 }
    ], SkillName.Cooking, 3, "Foods"
));

CraftRecipe.addRecipe("HAM", new CraftRecipe(
    Ham, 1, [
        { ItemName: "Meat", Quantity: 10 }
    ], SkillName.Cooking, 3, "Foods"
));

CraftRecipe.addRecipe("BUTTER", new CraftRecipe(
    Butter, 1, [
        { ItemName: "Milk", Quantity: 10 },
        { ItemName: "Water", Quantity: 2 }
    ], SkillName.Cooking, 4, "Foods"
));

CraftRecipe.addRecipe("CHEESEWEDGE", new CraftRecipe(
    CheeseWedge, 1, [
        { ItemName: "Milk", Quantity: 10 },
        { ItemName: "Water", Quantity: 2 }
    ], SkillName.Cooking, 4, "Foods"
));

CraftRecipe.addRecipe("MEAD", new CraftRecipe(
    Mead, 1, [
        { ItemName: "Honey", Quantity: 10 },
        { ItemName: "Water", Quantity: 10 }
    ], SkillName.Cooking, 4, "Drinks"
));

CraftRecipe.addRecipe("SANDWICH", new CraftRecipe(
    Sandwich, 1, [
        { ItemName: "Ham", Quantity: 1 },
        { ItemName: "Bread", Quantity: 1 },
        { ItemName: "CheeseWedge", Quantity: 1 },
        { ItemName: "Butter", Quantity: 1 },
    ], SkillName.Cooking, 4, "Foods"
));

CraftRecipe.addRecipe("APPLEPIE", new CraftRecipe(
    ApplePie, 1, [
        { ItemName: "Apple", Quantity: 20 },
        { ItemName: "Butter", Quantity: 5 },
    ], SkillName.Cooking, 5, "Foods"
));

CraftRecipe.addRecipe("POTATOSOUP", new CraftRecipe(
    PotatoSoup, 1, [
        { ItemName: "Potato", Quantity: 10 },
        { ItemName: "Water", Quantity: 2 },
        { ItemName: "Lemon", Quantity: 1 }
    ], SkillName.Cooking, 5, "Foods"
));

CraftRecipe.addRecipe("CHOCOLATE", new CraftRecipe(
    Chocolate, 1, [
        { ItemName: "Cocoa", Quantity: 3 },
        { ItemName: "Sugar", Quantity: 3 },
        { ItemName: "Milk", Quantity: 2 }
    ], SkillName.Cooking, 5, "Foods"
));

CraftRecipe.addRecipe("BEER", new CraftRecipe(
    Beer, 1, [
        { ItemName: "Wheat", Quantity: 15 },
        { ItemName: "Water", Quantity: 10 }
    ], SkillName.Cooking, 6, "Drinks"
));

CraftRecipe.addRecipe("WINE", new CraftRecipe(
    Wine, 1, [
        { ItemName: "Grapes", Quantity: 15 },
        { ItemName: "Water", Quantity: 10 }
    ], SkillName.Cooking, 6, "Drinks"
));

CraftRecipe.addRecipe("MEATSTICK", new CraftRecipe(
    Meatstick, 1, [
        { ItemName: "Sausage", Quantity: 1 },
        { ItemName: "Tomato", Quantity: 1 }
    ], SkillName.Cooking, 6, "Foods"
));

CraftRecipe.addRecipe("ONIONSOUP", new CraftRecipe(
    OnionSoup, 1, [
        { ItemName: "Onion", Quantity: 10 },
        { ItemName: "Water", Quantity: 10 },
        { ItemName: "Mushrooms", Quantity: 2 }
    ], SkillName.Cooking, 7, "Foods"
));

CraftRecipe.addRecipe("ROUNDCHEESE", new CraftRecipe(
    RoundCheese, 1, [
        { ItemName: "Milk", Quantity: 25 },
        { ItemName: "Water", Quantity: 5 }
    ], SkillName.Cooking, 7, "Foods"
));

CraftRecipe.addRecipe("BANKEDFISH", new CraftRecipe(
    BakedFish, 1, [
        { ItemName: "FishRaw", Quantity: 2 },
        { ItemName: "Carrot", Quantity: 2 },
        { ItemName: "Tomato", Quantity: 2 }
    ], SkillName.Cooking, 7, "Foods"
));

CraftRecipe.addRecipe("SUSHI", new CraftRecipe(
    Sushi, 1, [
        { ItemName: "FishRaw", Quantity: 2 },
        { ItemName: "Leek", Quantity: 1 }
    ], SkillName.Cooking, 8, "Foods"
));

CraftRecipe.addRecipe("CAKE", new CraftRecipe(
    Cake, 1, [
        { ItemName: "Wheat", Quantity: 10 },
        { ItemName: "Milk", Quantity: 2 },
        { ItemName: "Chocolate", Quantity: 1 }
    ], SkillName.Cooking, 8, "Foods"
));

CraftRecipe.addRecipe("COOKIES", new CraftRecipe(
    Cookies, 1, [
        { ItemName: "Wheat", Quantity: 2 },
        { ItemName: "Milk", Quantity: 2 },
        { ItemName: "Butter", Quantity: 2 },
        { ItemName: "Chocolate", Quantity: 2 }
    ], SkillName.Cooking, 8, "Foods"
));

CraftRecipe.addRecipe("RIBS", new CraftRecipe(
    Ribs, 1, [
        { ItemName: "Meat", Quantity: 20 },
        { ItemName: "Potato", Quantity: 10 },
        { ItemName: "Tomato", Quantity: 1 },
        { ItemName: "Pepper", Quantity: 1 }
    ], SkillName.Cooking, 9, "Foods"
));
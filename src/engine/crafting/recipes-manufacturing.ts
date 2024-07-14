import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    LockpickSet, Pickaxe, LumberjackAxe, ImprovisedClub, 
    Pitchfork, ShortBow, Broom, Sickle,
    WoodFloor, WoodRoof, WoodWall, WoodFence,
    WoodWindow, WoodDoor, WoodBed, WoodBookcase,
    WoodCabinet, WoodChair, WoodChest, StoneFloor,
    StoneWall, StoneRoof, StoneWindow, StoneFence,
    StoneDoor, AlchemistTable, CarpentryTable,
    CookingPit, Forge, TailoringTools
} from "../items";

CraftRecipe.addRecipe("LOCKPICKSET", new CraftRecipe(
    LockpickSet, 1, [
        { ItemName: "IronIngot", Quantity: 1 }
    ], SkillName.Manufacturing, 0, "Tools"
));

CraftRecipe.addRecipe("PICKAXE", new CraftRecipe(
    Pickaxe, 1, [
        { ItemName: "Stone", Quantity: 10 },
        { ItemName: "Stick", Quantity: 10 }
    ], SkillName.Manufacturing, 0, "Tools"
));

CraftRecipe.addRecipe("LUMBERJACKAXE", new CraftRecipe(
    LumberjackAxe, 1, [
        { ItemName: "Stone", Quantity: 10 },
        { ItemName: "Stick", Quantity: 10 }
    ], SkillName.Manufacturing, 0, "Tools"
));

CraftRecipe.addRecipe("SICKLE", new CraftRecipe(
    Sickle, 1, [
        { ItemName: "Stone", Quantity: 10 },
        { ItemName: "Stick", Quantity: 10 }
    ], SkillName.Manufacturing, 0, "Tools"
));

//Weapons
CraftRecipe.addRecipe("BROOM", new CraftRecipe(
    Broom, 1, [
        { ItemName: "WoodBoard", Quantity: 1 },
        { ItemName: "Fiber", Quantity: 10 },
    ], SkillName.Manufacturing, 0, "Weapons"
));

CraftRecipe.addRecipe("IMPROVISEDCLUB", new CraftRecipe(
    ImprovisedClub, 1, [
        { ItemName: "WoodBoard", Quantity: 1 },
        { ItemName: "Fiber", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 1 }
    ], SkillName.Manufacturing, 0, "Weapons"
));

CraftRecipe.addRecipe("PITCHFORK", new CraftRecipe(
    Pitchfork, 1, [
        { ItemName: "WoodBoard", Quantity: 1 },
        { ItemName: "Fiber", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 1 }
    ], SkillName.Manufacturing, 0, "Weapons"
));

CraftRecipe.addRecipe("SHORTBOW", new CraftRecipe(
    ShortBow, 1, [
        { ItemName: "WoodBoard", Quantity: 1 },
        { ItemName: "Leather", Quantity: 1 },
        { ItemName: "Fiber", Quantity: 5 }
    ], SkillName.Manufacturing, 0, "Weapons"
));

//Wood
CraftRecipe.addRecipe("WOODFLOOR", new CraftRecipe(
    WoodFloor, 1, [
        { ItemName: "WoodBoard", Quantity: 10 }
    ], SkillName.Manufacturing, 2, "Building"
));

CraftRecipe.addRecipe("WOODROOF", new CraftRecipe(
    WoodRoof, 1, [
        { ItemName: "WoodBoard", Quantity: 5 }
    ], SkillName.Manufacturing, 2, "Building"
));

CraftRecipe.addRecipe("WOODWALL", new CraftRecipe(
    WoodWall, 1, [
        { ItemName: "WoodBoard", Quantity: 5 }
    ], SkillName.Manufacturing, 2, "Building"
));

CraftRecipe.addRecipe("WOODFENCE", new CraftRecipe(
    WoodFence, 1, [
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Manufacturing, 1, "Building"
));

CraftRecipe.addRecipe("WOODWINDOW", new CraftRecipe(
    WoodWindow, 1, [
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Manufacturing, 1, "Building"
));

CraftRecipe.addRecipe("WOODDOOR", new CraftRecipe(
    WoodDoor, 1, [
        { ItemName: "WoodBoard", Quantity: 5 }
    ], SkillName.Manufacturing, 2, "Building"
));

//Stone
CraftRecipe.addRecipe("STONEFLOOR", new CraftRecipe(
    StoneFloor, 1, [
        { ItemName: "Stone", Quantity: 30 },
        { ItemName: "WoodBoard", Quantity: 2 },
    ], SkillName.Manufacturing, 5, "Building"
));

CraftRecipe.addRecipe("STONEWALL", new CraftRecipe(
    StoneWall, 1, [
        { ItemName: "Stone", Quantity: 20 },
        { ItemName: "WoodBoard", Quantity: 2 },
    ], SkillName.Manufacturing, 5, "Building"
));

CraftRecipe.addRecipe("STONEROOF", new CraftRecipe(
    StoneRoof, 1, [
        { ItemName: "Stone", Quantity: 20 },
        { ItemName: "WoodBoard", Quantity: 2 },
    ], SkillName.Manufacturing, 5, "Building"
));

CraftRecipe.addRecipe("STONEWINDOW", new CraftRecipe(
    StoneWindow, 1, [
        { ItemName: "Stone", Quantity: 10 },
        { ItemName: "WoodBoard", Quantity: 1 },
    ], SkillName.Manufacturing, 5, "Building"
));

CraftRecipe.addRecipe("STONEFENCE", new CraftRecipe(
    StoneFence, 1, [
        { ItemName: "Stone", Quantity: 5 },
    ], SkillName.Manufacturing, 5, "Building"
));

CraftRecipe.addRecipe("STONEFENCE", new CraftRecipe(
    StoneDoor, 1, [
        { ItemName: "Stone", Quantity: 10 },
        { ItemName: "WoodBoard", Quantity: 10 },
    ], SkillName.Manufacturing, 6, "Building"
));

//Forniture
CraftRecipe.addRecipe("WOODBED", new CraftRecipe(
    WoodBed, 1, [
        { ItemName: "WoodBoard", Quantity: 6 },
        { ItemName: "Fiber", Quantity: 10 },
        { ItemName: "Feather", Quantity: 20 }
    ], SkillName.Manufacturing, 3, "Building"
));

CraftRecipe.addRecipe("WOODBOOKCASE", new CraftRecipe(
    WoodBookcase, 1, [
        { ItemName: "WoodBoard", Quantity: 15 }
    ], SkillName.Manufacturing, 3, "Building"
));

CraftRecipe.addRecipe("WOODCABINET", new CraftRecipe(
    WoodCabinet, 1, [
        { ItemName: "WoodBoard", Quantity: 20 }
    ], SkillName.Manufacturing, 4, "Building"
));

CraftRecipe.addRecipe("WOODCABINET", new CraftRecipe(
    WoodChair, 1, [
        { ItemName: "WoodBoard", Quantity: 5 }
    ], SkillName.Manufacturing, 1, "Building"
));

CraftRecipe.addRecipe("WOODCHEST", new CraftRecipe(
    WoodChest, 1, [
        { ItemName: "WoodBoard", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 3 }
    ], SkillName.Manufacturing, 4, "Building"
));

//Crafting Tools
CraftRecipe.addRecipe("COOKINGPIT", new CraftRecipe(
    CookingPit, 1, [
        { ItemName: "Wood", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "Fiber", Quantity: 10 },
        { ItemName: "Stick", Quantity: 10 },
    ], SkillName.Manufacturing, 5, "Crafting Tools"
));

CraftRecipe.addRecipe("CARPENTRYTABLE", new CraftRecipe(
    CarpentryTable, 1, [
        { ItemName: "OakBoard", Quantity: 30 },
        { ItemName: "Wood", Quantity: 20 },
        { ItemName: "Fiber", Quantity: 20 },
    ], SkillName.Manufacturing, 6, "Crafting Tools"
));

CraftRecipe.addRecipe("TAILORINGTOOLS", new CraftRecipe(
    TailoringTools, 1, [
        { ItemName: "WoodBoard", Quantity: 20 },
        { ItemName: "Fiber", Quantity: 30 },
    ], SkillName.Manufacturing, 6, "Crafting Tools"
));

CraftRecipe.addRecipe("ALCHHEMISTTABLE", new CraftRecipe(
    AlchemistTable, 1, [
        { ItemName: "OakBoard", Quantity: 30 },
        { ItemName: "Fiber", Quantity: 20 },
        { ItemName: "WhiteCrystal", Quantity: 1 },
        { ItemName: "EmptyBottle", Quantity: 10 },
    ], SkillName.Manufacturing, 7, "Crafting Tools"
));

CraftRecipe.addRecipe("FORGE", new CraftRecipe(
    Forge, 1, [
        { ItemName: "WoodBoard", Quantity: 10 },
        { ItemName: "Stone", Quantity: 100 },
        { ItemName: "Stick", Quantity: 10 },
    ], SkillName.Manufacturing, 7, "Crafting Tools"
));

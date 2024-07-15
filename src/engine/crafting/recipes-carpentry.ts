import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    WoodBoard, IpeBoard, OakBoard,
    MapleBoard, MagicOakBoard, ElvenBoard,
    EbanoBoard, RareElvenBoard, WhiteMapleBoard,
    ShepherdStaff, ForestStaff, NoviceStaff, 
    PriestStaff, CrystalStaff, EnervatedStaff, CursedStaff, DoubleEdgedStaff, 
    DruidicStaff, PlankShield, RoundLightShield, SimpleProtector, 
    FrameShield, HeraldicShield, Protector, AshwoodBow, LongBow, 
    CompositeBow,
    Quillshooter
} from "../items";

//Woods
CraftRecipe.addRecipe("WOODBOARD", new CraftRecipe(
    WoodBoard, 1, [
        { ItemName: "Wood", Quantity: 3 }
    ], SkillName.Carpentry, 0, "Boards"
));

CraftRecipe.addRecipe("IPEBOARD", new CraftRecipe(
    IpeBoard, 1, [
        { ItemName: "IpeWood", Quantity: 3 }
    ], SkillName.Carpentry, 1, "Boards"
));

CraftRecipe.addRecipe("OAKBOARD", new CraftRecipe(
    OakBoard, 1, [
        { ItemName: "OakWood", Quantity: 3 }
    ], SkillName.Carpentry, 2, "Boards"
));

CraftRecipe.addRecipe("MAPLEBOARD", new CraftRecipe(
    MapleBoard, 1, [
        { ItemName: "MapleWood", Quantity: 3 }
    ], SkillName.Carpentry, 3, "Boards"
));

CraftRecipe.addRecipe("MAGICOAKBOARD", new CraftRecipe(
    MagicOakBoard, 1, [
        { ItemName: "MagicOakWood", Quantity: 3 }
    ], SkillName.Carpentry, 4, "Boards"
));

CraftRecipe.addRecipe("ELVENWOOD", new CraftRecipe(
    ElvenBoard, 1, [
        { ItemName: "ElvenWood", Quantity: 3 }
    ], SkillName.Carpentry, 6, "Boards"
));

CraftRecipe.addRecipe("EBANOBOARD", new CraftRecipe(
    EbanoBoard, 1, [
        { ItemName: "EbanoWood", Quantity: 3 }
    ], SkillName.Carpentry, 7, "Boards"
));

CraftRecipe.addRecipe("RAREELVENBOARD", new CraftRecipe(
    RareElvenBoard, 1, [
        { ItemName: "RareElvenWood", Quantity: 3 }
    ], SkillName.Carpentry, 9, "Boards"
));

CraftRecipe.addRecipe("WHITEMAPLEBOARD", new CraftRecipe(
    WhiteMapleBoard, 1, [
        { ItemName: "WhiteMapleWood", Quantity: 3 }
    ], SkillName.Carpentry, 10, "Boards"
));

//Staffs
CraftRecipe.addRecipe("SHEPHERDSTAFF", new CraftRecipe(
    ShepherdStaff, 1, [
        { ItemName: "WoodBoard", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Carpentry, 1, "Staffs"
));

CraftRecipe.addRecipe("FORESTSTAFF", new CraftRecipe(
    ForestStaff, 1, [
        { ItemName: "IpeBoard", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Carpentry, 2, "Staffs"
));

CraftRecipe.addRecipe("NOVICESTAFF", new CraftRecipe(
    NoviceStaff, 1, [
        { ItemName: "IpeBoard", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Carpentry, 2, "Staffs"
));

CraftRecipe.addRecipe("PRIESTSTAFF", new CraftRecipe(
    PriestStaff, 1, [
        { ItemName: "IpeBoard", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Carpentry, 2, "Staffs"
));

CraftRecipe.addRecipe("CRYSTALLSTAFF", new CraftRecipe(
    CrystalStaff, 1, [
        { ItemName: "OakBoard", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 2 },
        { ItemName: "DarknessEssence", Quantity: 1 }
    ], SkillName.Carpentry, 4, "Staffs"
));

CraftRecipe.addRecipe("ENERVATEDSTAFF", new CraftRecipe(
    EnervatedStaff, 1, [
        { ItemName: "OakBoard", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 4 },
        { ItemName: "ColdEssence", Quantity: 1 }
    ], SkillName.Carpentry, 4, "Staffs"
));

CraftRecipe.addRecipe("CURSEDSTAFF", new CraftRecipe(
    CursedStaff, 1, [
        { ItemName: "MapleBoard", Quantity: 5 },
        { ItemName: "DarknessEssence", Quantity: 5 },
        { ItemName: "Skull", Quantity: 1 },
        { ItemName: "MagicEssence", Quantity: 1 }
    ], SkillName.Carpentry, 5, "Staffs"
));

CraftRecipe.addRecipe("DOUBLEEDGEDSTAFF", new CraftRecipe(
    DoubleEdgedStaff, 1, [
        { ItemName: "MapleBoard", Quantity: 5 },
        { ItemName: "ColdEssence", Quantity: 5 },
        { ItemName: "ElementalDust", Quantity: 5 },
        { ItemName: "MagicEssence", Quantity: 1 }
    ], SkillName.Carpentry, 5, "Staffs"
));

CraftRecipe.addRecipe("DRUIDICSTAFF", new CraftRecipe(
    DruidicStaff, 1, [
        { ItemName: "MapleBoard", Quantity: 5 },
        { ItemName: "NatureEssence", Quantity: 5 },
        { ItemName: "Emerald", Quantity: 1 },
        { ItemName: "MagicEssence", Quantity: 1 }
    ], SkillName.Carpentry, 5, "Staffs"
));

//Bows
CraftRecipe.addRecipe("ASHWOODBOW", new CraftRecipe(
    AshwoodBow, 1, [
        { ItemName: "IpeBoard", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 },
        { ItemName: "Fiber", Quantity: 5 }
    ], SkillName.Carpentry, 1, "Bows"
));

CraftRecipe.addRecipe("LONGBOW", new CraftRecipe(
    LongBow, 1, [
        { ItemName: "IpeBoard", Quantity: 10 },
        { ItemName: "Leather", Quantity: 1 },
        { ItemName: "Fiber", Quantity: 10 }
    ], SkillName.Carpentry, 2, "Bows"
));

CraftRecipe.addRecipe("COMPOSITEBOW", new CraftRecipe(
    CompositeBow, 1, [
        { ItemName: "MapleBoard", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 },
        { ItemName: "Fiber", Quantity: 10 }
    ], SkillName.Carpentry, 4, "Bows"
));

CraftRecipe.addRecipe("Quillshooter", new CraftRecipe(
    Quillshooter, 1, [
        { ItemName: "MapleBoard", Quantity: 20 },
        { ItemName: "IpeBoard", Quantity: 10 },
        { ItemName: "HardLeather", Quantity: 10 },
        { ItemName: "ArcaneFiber", Quantity: 10 }
    ], SkillName.Carpentry, 5, "Bows"
));

//Shields
CraftRecipe.addRecipe("PLANKSHIELD", new CraftRecipe(
    PlankShield, 1, [
        { ItemName: "WoodBoard", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 2 }
    ], SkillName.Carpentry, 1, "Shields"
));

CraftRecipe.addRecipe("ROUNDLIGHTSHIELD", new CraftRecipe(
    RoundLightShield, 1, [
        { ItemName: "WoodBoard", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 2 }
    ], SkillName.Carpentry, 1, "Shields"
));

CraftRecipe.addRecipe("SIMPLEPROTECTOR", new CraftRecipe(
    SimpleProtector, 1, [
        { ItemName: "WoodBoard", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 2 }
    ], SkillName.Carpentry, 1, "Shields"
));

CraftRecipe.addRecipe("FRAMESHIELD", new CraftRecipe(
    FrameShield, 1, [
        { ItemName: "IpeBoard", Quantity: 3 },
        { ItemName: "WoodBoard", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 3 }
    ], SkillName.Carpentry, 3, "Shields"
));

CraftRecipe.addRecipe("HERALDICSHIELD", new CraftRecipe(
    HeraldicShield, 1, [
        { ItemName: "IpeBoard", Quantity: 3 },
        { ItemName: "WoodBoard", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 3 }
    ], SkillName.Carpentry, 3, "Shields"
));

CraftRecipe.addRecipe("PROTECTOR", new CraftRecipe(
    Protector, 1, [
        { ItemName: "MapleBoard", Quantity: 10 },
        { ItemName: "WoodBoard", Quantity: 5 },
        { ItemName: "SteelIngot", Quantity: 10 }
    ], SkillName.Carpentry, 6, "Shields"
));

//Crossbow
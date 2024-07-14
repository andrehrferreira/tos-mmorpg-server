import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    Leather, HardLeather, ScaledLeather, 
    HardScaledLeather, SpinnedLeather,
    IronScaledLeather, BarbedLeather,
    DemonicLeather, DarknessLeather, 
    DragonLeather, DivineLeather,
    LinenCloth, WoolenCloth, MageweaveCloth,
    PrimalCloth, MagicCloth, SilkCloth,
    EnchantedCloth, DemonicCloth, 
    DarknessCloth, DragonestCloth, 
    DivineCloth, Bandage, InitiatedRobe, 
    RecruitChest, Sharper, CommonVillagerChest,
    CommonWhiteRuggedLeatherChest,
    CommonWorkerChest, LeatherGarments,
    CultistGarment, CultistRobe, DruidLeatherRobe,
    FancierCommonerChest, FighterArmor, ConquerorsMailChest,
    PactOfTheMage, CooksVillagerHood, FancyHat,
    Hood, InitiatedCrown, MaliciousMask,
    StrawHat, VillagerHood, AgileVillagerHood,
    ApprenticeHat, BanditMask,
    LeatherHelm, HelmOfTheNatureSpirits,
    MagisterHat, RascalHood, LeatherBracer, TrooperBracer, CombatantBracer, ConquerorsMailGloves, CataclysmicMailFists, VengefulClothHands, ChampionScaledHands, HandguardsOfAncientPower, SlipShoes, CommonBoots, CozyBoots, FuzzyBoot, AgilityBoots, ApprenticeBoots, BootsOfEndingVisions, ComfortableBoots, PlainPants, HeavyDutyPants, AprenticePants, GuardianLegs, ArcanePants, GreatleatherPants, SilkCloak, UnholyCloak, LeatherCloak
} from "../items";

//Leathers
CraftRecipe.addRecipe("LEATHER", new CraftRecipe(
    Leather, 1, [
        { ItemName: "Hides", Quantity: 3 }
    ], SkillName.Tailoring, 0, "Leathers"
));

CraftRecipe.addRecipe("HARDLEATHER", new CraftRecipe(
    HardLeather, 1, [
        { ItemName: "Hides", Quantity: 9 }
    ], SkillName.Tailoring, 2, "Leathers"
));

CraftRecipe.addRecipe("SCALEDLATHER", new CraftRecipe(
    ScaledLeather, 1, [
        { ItemName: "Leather", Quantity: 1 },
        { ItemName: "ScaledHides", Quantity: 3 }
    ], SkillName.Tailoring, 3, "Leathers"
));

CraftRecipe.addRecipe("HARDSCALEDLEATHER", new CraftRecipe(
    HardScaledLeather, 1, [
        { ItemName: "HardLeather", Quantity: 2 },
        { ItemName: "ScaledLeather", Quantity: 1 }
    ], SkillName.Tailoring, 4, "Leathers"
));

CraftRecipe.addRecipe("SPINEDLEATHER", new CraftRecipe(
    SpinnedLeather, 1, [
        { ItemName: "HardScaledLeather", Quantity: 1 },
        { ItemName: "SpinedHides", Quantity: 3 }
    ], SkillName.Tailoring, 5, "Leathers"
));

CraftRecipe.addRecipe("IRONSCALEDLEATHER", new CraftRecipe(
    IronScaledLeather, 1, [
        { ItemName: "HardScaledLeather", Quantity: 3 },
        { ItemName: "ScaledLeather", Quantity: 4 },
        { ItemName: "IronIngot", Quantity: 1 }
    ], SkillName.Tailoring, 6, "Leathers"
));

CraftRecipe.addRecipe("DEMONICLEATHER", new CraftRecipe(
    DemonicLeather, 1, [
        { ItemName: "DemonicHides", Quantity: 3 }
    ], SkillName.Tailoring, 6, "Leathers"
));

CraftRecipe.addRecipe("BARBEDLEATHER", new CraftRecipe(
    BarbedLeather, 1, [
        { ItemName: "BarbedHides", Quantity: 3 }
    ], SkillName.Tailoring, 8, "Leathers"
));

CraftRecipe.addRecipe("DRAGONLEATHER", new CraftRecipe(
    DragonLeather, 1, [
        { ItemName: "DragonHides", Quantity: 3 }
    ], SkillName.Tailoring, 9, "Leathers"
));

CraftRecipe.addRecipe("DIVINELEATHER", new CraftRecipe(
    DivineLeather, 1, [
        { ItemName: "DivineHides", Quantity: 3 }
    ], SkillName.Tailoring, 10, "Leathers"
));

//Cloths
CraftRecipe.addRecipe("BANDAGE", new CraftRecipe(
    Bandage, 50, [
        { ItemName: "LinenCloth", Quantity: 3 }
    ], SkillName.Tailoring, 0, "Cloths"
));

CraftRecipe.addRecipe("LINENCLOTH", new CraftRecipe(
    LinenCloth, 1, [
        { ItemName: "Fiber", Quantity: 3 }
    ], SkillName.Tailoring, 0, "Cloths"
));

CraftRecipe.addRecipe("WOOLENCLOTH", new CraftRecipe(
    WoolenCloth, 1, [
        { ItemName: "Wool", Quantity: 1 },
        { ItemName: "Cotton", Quantity: 3 }
    ], SkillName.Tailoring, 1, "Cloths"
));

CraftRecipe.addRecipe("MAGEWEAVECLOATH", new CraftRecipe(
    MageweaveCloth, 1, [
        { ItemName: "WoolenCloth", Quantity: 1 },
        { ItemName: "ArcaneFiber", Quantity: 3 }
    ], SkillName.Tailoring, 3, "Cloths"
));

CraftRecipe.addRecipe("PRIMALCLOTH", new CraftRecipe(
    PrimalCloth, 1, [
        { ItemName: "ArcaneFiber", Quantity: 5 },
        { ItemName: "MageweaveCloth", Quantity: 2 }
    ], SkillName.Tailoring, 4, "Cloths"
));

CraftRecipe.addRecipe("MAGICCLOATH", new CraftRecipe(
    MagicCloth, 1, [
        { ItemName: "MageweaveCloth", Quantity: 3 },
        { ItemName: "MasterCotton", Quantity: 3 },
        { ItemName: "MysticSilk", Quantity: 1 }
    ], SkillName.Tailoring, 5, "Cloths"
));

CraftRecipe.addRecipe("SILKCLOTH", new CraftRecipe(
    SilkCloth, 1, [
        { ItemName: "PrimalCloth", Quantity: 3 },
        { ItemName: "Silk", Quantity: 3 }
    ], SkillName.Tailoring, 6, "Cloths"
));

CraftRecipe.addRecipe("ENCHANTEDCLOTH", new CraftRecipe(
    EnchantedCloth, 1, [
        { ItemName: "MageweaveCloth", Quantity: 3 },
        { ItemName: "MagicCloth", Quantity: 3 },
        { ItemName: "MysticSilk", Quantity: 3 }
    ], SkillName.Tailoring, 7, "Cloths"
));

CraftRecipe.addRecipe("DEMONICCLOTH", new CraftRecipe(
    DemonicCloth, 1, [
        { ItemName: "MysticSilk", Quantity: 5 },
        { ItemName: "EnchantedCloth", Quantity: 1 },
        { ItemName: "PrimalCloth", Quantity: 1 }
    ], SkillName.Tailoring, 7, "Cloths"
));

CraftRecipe.addRecipe("DARKNESSCLOTH", new CraftRecipe(
    DarknessCloth, 1, [
        { ItemName: "MysticSilk", Quantity: 5 },
        { ItemName: "DemonicCloth", Quantity: 1 }
    ], SkillName.Tailoring, 8, "Cloths"
));

CraftRecipe.addRecipe("DRAGONESTCLOTH", new CraftRecipe(
    DragonestCloth, 1, [
        { ItemName: "DragonFlowerSilk", Quantity: 5 }
    ], SkillName.Tailoring, 9, "Cloths"
));

CraftRecipe.addRecipe("DIVINECLOTH", new CraftRecipe(
    DivineCloth, 1, [
        { ItemName: "DivineCotton", Quantity: 5 }
    ], SkillName.Tailoring, 10, "Cloths"
));

//Boots
CraftRecipe.addRecipe("SlipShoes", new CraftRecipe(
    SlipShoes, 1, [
        { ItemName: "LinenCloth", Quantity: 5 },
    ], SkillName.Tailoring, 0, "Boots"
));

CraftRecipe.addRecipe("CommonBoots", new CraftRecipe(
    CommonBoots, 1, [
        { ItemName: "Leather", Quantity: 5 },
    ], SkillName.Tailoring, 0, "Boots"
));

CraftRecipe.addRecipe("CozyBoots", new CraftRecipe(
    CozyBoots, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
    ], SkillName.Tailoring, 1, "Boots"
));

CraftRecipe.addRecipe("FuzzyBoot", new CraftRecipe(
    FuzzyBoot, 1, [
        { ItemName: "Leather", Quantity: 10 },
    ], SkillName.Tailoring, 1, "Boots"
));

CraftRecipe.addRecipe("AgilityBoots", new CraftRecipe(
    AgilityBoots, 1, [
        { ItemName: "Leather", Quantity: 15 },
        { ItemName: "LinenCloth", Quantity: 5 },
    ], SkillName.Tailoring, 3, "Boots"
));

CraftRecipe.addRecipe("ApprenticeBoots", new CraftRecipe(
    ApprenticeBoots, 1, [
        { ItemName: "Leather", Quantity: 5 },
        { ItemName: "LinenCloth", Quantity: 15 },
    ], SkillName.Tailoring, 3, "Boots"
));

CraftRecipe.addRecipe("BootsOfEndingVisions", new CraftRecipe(
    BootsOfEndingVisions, 1, [
        { ItemName: "Leather", Quantity: 5 },
        { ItemName: "HardLeather", Quantity: 10 },
    ], SkillName.Tailoring, 5, "Boots"
));

CraftRecipe.addRecipe("ComfortableBoots", new CraftRecipe(
    ComfortableBoots, 1, [
        { ItemName: "PrimalCloth", Quantity: 10 },
        { ItemName: "HardScaledLeather", Quantity: 20 }
    ], SkillName.Tailoring, 5, "Boots"
));

//Chest
CraftRecipe.addRecipe("INITIATEDROBE", new CraftRecipe(
    InitiatedRobe, 1, [
        { ItemName: "Cotton", Quantity: 10 }
    ], SkillName.Tailoring, 0, "Chests"
));

CraftRecipe.addRecipe("RERUITCHEST", new CraftRecipe(
    RecruitChest, 1, [
        { ItemName: "LinenCloth", Quantity: 10 }
    ], SkillName.Tailoring, 0, "Chests"
));

CraftRecipe.addRecipe("RERUITCHEST", new CraftRecipe(
    RecruitChest, 1, [
        { ItemName: "Fiber", Quantity: 5 },
        { ItemName: "LinenCloth", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Chests"
));

CraftRecipe.addRecipe("SHARPER", new CraftRecipe(
    Sharper, 1, [
        { ItemName: "Fiber", Quantity: 5 },
        { ItemName: "LinenCloth", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Chests"
));

CraftRecipe.addRecipe("CommonVillagerChest", new CraftRecipe(
    CommonVillagerChest, 1, [
        { ItemName: "Leather", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Chests"
));

CraftRecipe.addRecipe("CommonWhiteRuggedLeatherChest", new CraftRecipe(
    CommonWhiteRuggedLeatherChest, 1, [
        { ItemName: "Leather", Quantity: 20 }
    ], SkillName.Tailoring, 1, "Chests"
));

CraftRecipe.addRecipe("CommonWorkerChest", new CraftRecipe(
    CommonWorkerChest, 1, [
        { ItemName: "Leather", Quantity: 10 },
        { ItemName: "LinenCloth", Quantity: 5 },
        { ItemName: "Fiber", Quantity: 2 },
    ], SkillName.Tailoring, 1, "Chests"
));

CraftRecipe.addRecipe("LeatherGarments", new CraftRecipe(
    LeatherGarments, 1, [
        { ItemName: "Leather", Quantity: 10 },
        { ItemName: "LinenCloth", Quantity: 10 },
    ], SkillName.Tailoring, 1, "Chests"
));

CraftRecipe.addRecipe("CultistGarment", new CraftRecipe(
    CultistGarment, 1, [
        { ItemName: "HardLeather", Quantity: 10 },
        { ItemName: "WoolenCloth", Quantity: 10 },
        { ItemName: "Skull", Quantity: 1 },
    ], SkillName.Tailoring, 3, "Chests"
));

CraftRecipe.addRecipe("CultistRobe", new CraftRecipe(
    CultistRobe, 1, [
        { ItemName: "Leather", Quantity: 5 },
        { ItemName: "HardLeather", Quantity: 10 },
        { ItemName: "WoolenCloth", Quantity: 10 },
        { ItemName: "Skull", Quantity: 1 },
    ], SkillName.Tailoring, 3, "Chests"
));

CraftRecipe.addRecipe("DruidLeatherRobe", new CraftRecipe(
    DruidLeatherRobe, 1, [
        { ItemName: "Leather", Quantity: 5 },
        { ItemName: "HardLeather", Quantity: 10 },
        { ItemName: "WoolenCloth", Quantity: 10 },
        { ItemName: "NatureEssence", Quantity: 1 },
    ], SkillName.Tailoring, 3, "Chests"
));

CraftRecipe.addRecipe("FancierCommonerChest", new CraftRecipe(
    FancierCommonerChest, 1, [
        { ItemName: "Leather", Quantity: 5 },
        { ItemName: "HardLeather", Quantity: 10 },
        { ItemName: "WoolenCloth", Quantity: 5 },
    ], SkillName.Tailoring, 3, "Chests"
));

CraftRecipe.addRecipe("FighterArmor", new CraftRecipe(
    FighterArmor, 1, [
        { ItemName: "HardLeather", Quantity: 20 }
    ], SkillName.Tailoring, 3, "Chests"
));

CraftRecipe.addRecipe("ConquerorsMailChest", new CraftRecipe(
    ConquerorsMailChest, 1, [
        { ItemName: "PrimalCloth", Quantity: 10 },
        { ItemName: "HardScaledLeather", Quantity: 20 }
    ], SkillName.Tailoring, 5, "Chests"
));

CraftRecipe.addRecipe("PactOfTheMage", new CraftRecipe(
    PactOfTheMage, 1, [
        { ItemName: "MageweaveCloth", Quantity: 20 },
        { ItemName: "HardScaledLeather", Quantity: 5 },
        { ItemName: "Ametist", Quantity: 1 },
        { ItemName: "ElementalDust", Quantity: 10 }
    ], SkillName.Tailoring, 5, "Chests"
));

//Cloak
CraftRecipe.addRecipe("SilkCloak", new CraftRecipe(
    SilkCloak, 1, [
        { ItemName: "HardLeather", Quantity: 30 },
        { ItemName: "MageweaveCloth", Quantity: 5 },
    ], SkillName.Tailoring, 4, "Cloak"
));

CraftRecipe.addRecipe("LeatherCloak", new CraftRecipe(
    LeatherCloak, 1, [
        { ItemName: "HardLeather", Quantity: 30 },
        { ItemName: "MageweaveCloth", Quantity: 15 },
    ], SkillName.Tailoring, 5, "Cloak"
));

//Gloves
CraftRecipe.addRecipe("LeatherBracer", new CraftRecipe(
    LeatherBracer, 1, [
        { ItemName: "Leather", Quantity: 2 },
    ], SkillName.Tailoring, 0, "Gloves"
));

CraftRecipe.addRecipe("CombatantBracer", new CraftRecipe(
    CombatantBracer, 1, [
        { ItemName: "Leather", Quantity: 5 },
    ], SkillName.Tailoring, 1, "Gloves"
));

CraftRecipe.addRecipe("ConquerorsMailGloves", new CraftRecipe(
    ConquerorsMailGloves, 1, [
        { ItemName: "Leather", Quantity: 5 },
    ], SkillName.Tailoring, 1, "Gloves"
));

CraftRecipe.addRecipe("CataclysmicMailFists", new CraftRecipe(
    CataclysmicMailFists, 1, [
        { ItemName: "LinenCloth", Quantity: 5 },
        { ItemName: "Leather", Quantity: 10 },
    ], SkillName.Tailoring, 3, "Gloves"
));

CraftRecipe.addRecipe("VengefulClothHands", new CraftRecipe(
    VengefulClothHands, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
        { ItemName: "Leather", Quantity: 5 },
    ], SkillName.Tailoring, 3, "Gloves"
));

CraftRecipe.addRecipe("VengefulClothHands", new CraftRecipe(
    VengefulClothHands, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
        { ItemName: "Leather", Quantity: 5 },
    ], SkillName.Tailoring, 3, "Gloves"
));

CraftRecipe.addRecipe("ChampionScaledHands", new CraftRecipe(
    ChampionScaledHands, 1, [
        { ItemName: "SpinnedLeather", Quantity: 20 },      
        { ItemName: "PrimalCloth", Quantity: 10 },
    ], SkillName.Tailoring, 5, "Gloves"
));

CraftRecipe.addRecipe("HandguardsOfAncientPower", new CraftRecipe(
    HandguardsOfAncientPower, 1, [
        { ItemName: "SpinnedLeather", Quantity: 10 },      
        { ItemName: "PrimalCloth", Quantity: 20 },
    ], SkillName.Tailoring, 5, "Gloves"
));

//Helmet
CraftRecipe.addRecipe("CooksVillagerHood", new CraftRecipe(
    CooksVillagerHood, 1, [
        { ItemName: "LinenCloth", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Helmet / Hat"
));

CraftRecipe.addRecipe("FancyHat", new CraftRecipe(
    FancyHat, 1, [
        { ItemName: "LinenCloth", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Helmet / Hat"
));

CraftRecipe.addRecipe("Hood", new CraftRecipe(
    Hood, 1, [
        { ItemName: "LinenCloth", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Helmet / Hat"
));

CraftRecipe.addRecipe("InitiatedCrown", new CraftRecipe(
    InitiatedCrown, 1, [
        { ItemName: "LinenCloth", Quantity: 5 },
        { ItemName: "Fiber", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Helmet / Hat"
));

CraftRecipe.addRecipe("MaliciousMask", new CraftRecipe(
    MaliciousMask, 1, [
        { ItemName: "LinenCloth", Quantity: 5 },
        { ItemName: "Wood", Quantity: 5 }
    ], SkillName.Tailoring, 1, "Helmet / Hat"
));

CraftRecipe.addRecipe("StrawHat", new CraftRecipe(
    StrawHat, 1, [
        { ItemName: "Fiber", Quantity: 10 },
    ], SkillName.Tailoring, 1, "Helmet / Hat"
));

CraftRecipe.addRecipe("VillagerHood", new CraftRecipe(
    VillagerHood, 1, [
        { ItemName: "Leather", Quantity: 5 },
    ], SkillName.Tailoring, 1, "Helmet / Hat"
));

CraftRecipe.addRecipe("AgileVillagerHood", new CraftRecipe(
    AgileVillagerHood, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
    ], SkillName.Tailoring, 3, "Helmet / Hat"
));

CraftRecipe.addRecipe("ApprenticeHat", new CraftRecipe(
    ApprenticeHat, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
    ], SkillName.Tailoring, 3, "Helmet / Hat"
));

CraftRecipe.addRecipe("BanditMask", new CraftRecipe(
    BanditMask, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
        { ItemName: "Leather", Quantity: 10 },
    ], SkillName.Tailoring, 3, "Helmet / Hat"
));

CraftRecipe.addRecipe("LeatherHelm", new CraftRecipe(
    LeatherHelm, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
        { ItemName: "Leather", Quantity: 10 },
    ], SkillName.Tailoring, 3, "Helmet / Hat"
));

CraftRecipe.addRecipe("HelmOfTheNatureSpirits", new CraftRecipe(
    HelmOfTheNatureSpirits, 1, [
        { ItemName: "PrimalCloth", Quantity: 10 },
        { ItemName: "HardScaledLeather", Quantity: 10 },        
        { ItemName: "DeerSkull", Quantity: 1 }
    ], SkillName.Tailoring, 5, "Helmet / Hat"
));

CraftRecipe.addRecipe("MagisterHat", new CraftRecipe(
    MagisterHat, 1, [
        { ItemName: "PrimalCloth", Quantity: 20 },      
        { ItemName: "ElementalDust", Quantity: 5 }
    ], SkillName.Tailoring, 5, "Helmet / Hat"
));

CraftRecipe.addRecipe("RascalHood", new CraftRecipe(
    RascalHood, 1, [
        { ItemName: "SpinnedLeather", Quantity: 10 },      
        { ItemName: "PrimalCloth", Quantity: 20 },
    ], SkillName.Tailoring, 5, "Helmet / Hat"
));

//Pants
CraftRecipe.addRecipe("PlainPants", new CraftRecipe(
    PlainPants, 1, [
        { ItemName: "LinenCloth", Quantity: 5 }
    ], SkillName.Tailoring, 0, "Pants"
));

CraftRecipe.addRecipe("HeavyDutyPants", new CraftRecipe(
    HeavyDutyPants, 1, [
        { ItemName: "LinenCloth", Quantity: 15 },
        { ItemName: "Leather", Quantity: 10 },
    ], SkillName.Tailoring, 1, "Pants"
));

CraftRecipe.addRecipe("AprenticePants", new CraftRecipe(
    AprenticePants, 1, [
        { ItemName: "LinenCloth", Quantity: 20 },
        { ItemName: "Leather", Quantity: 10 },
    ], SkillName.Tailoring, 3, "Pants"
));

CraftRecipe.addRecipe("GuardianLegs", new CraftRecipe(
    GuardianLegs, 1, [
        { ItemName: "LinenCloth", Quantity: 10 },
        { ItemName: "Leather", Quantity: 20 },
    ], SkillName.Tailoring, 3, "Pants"
));

CraftRecipe.addRecipe("ArcanePants", new CraftRecipe(
    ArcanePants, 1, [
        { ItemName: "SpinnedLeather", Quantity: 20 },      
        { ItemName: "PrimalCloth", Quantity: 10 },
    ], SkillName.Tailoring, 5, "Pants"
));

CraftRecipe.addRecipe("GreatleatherPants", new CraftRecipe(
    GreatleatherPants, 1, [
        { ItemName: "SpinnedLeather", Quantity: 10 },      
        { ItemName: "PrimalCloth", Quantity: 20 },
    ], SkillName.Tailoring, 5, "Pants"
));


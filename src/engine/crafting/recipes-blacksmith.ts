import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    CopperIngot, IronIngot, SteelIngot, SilverIngot,
    GoldIngot, DarkIngot, DarkSteelIngot, DwarfMetalIngot,
    MithrilIngot, HeavenlyIngot,
    Dagger, Toothpick, SacrificialDagger, SurvivalKnife, 
    CurvedDagger, ThrowingAxe, Hatchet, LongHatchet, 
    LongSimpleAxe, CurvedHandleAxe, HeavyOneHandedAxe, 
    LongAxe, SpikedAxe, LongLumberjackAxe, RustySword, 
    Gladius, ShortSword, WidowMaker, AzarothSword, 
    Broadsword, Claymore, LongSword, Rapier, RefinedLongSword, 
    Falchion, LargeTwoHandedSword, LongMace, Skullcrusher, 
    SpikedClub, WeirdClub, Mace, Martel, MorningStar, 
    Voidhammer, CrystalShield, RoundSpikedBuckler, TowerShield, 
    ReiforcedHideVestArmor, CommonVillagerProtectorChest, DefenderArmor,
    GuardianArmor, ScaleArmor, ReinforcedScaleArmor, RecruitHelm, 
    TrooperHelm, CombatantHelm, FighterHelm, GuardianHelm, ChampionHelm, 
    DefenderHelm, IronGreathelm, IronHeadguard, ArmoredRoyalGuardHelm, 
    ConquerorsMailHelm, BattleplateGloves, SoldierGloves, RecruitsGauntlets, 
    IvoryGloves, TrooperBracer, ReinforcedBoot, IvoryBoots, SoldierBoots, 
    ArmoredRoyalGuardBoots, IvoryLegs, WrathfulPants, BattleplateLegs, SilverPickaxe, GoldPickaxe, SilverLumberjackAxe, GoldLumberjackAxe, SilverSickle, GoldSickle
} from "../items";

//Ingot
CraftRecipe.addRecipe("CopperIngot", new CraftRecipe(
    CopperIngot, 1, [
        { ItemName: "CopperOre", Quantity: 3 }
    ], SkillName.Blacksmithing, 0, "Ingots"
));

CraftRecipe.addRecipe("IronIngot", new CraftRecipe(
    IronIngot, 1, [
        { ItemName: "IronOre", Quantity: 3 },
        { ItemName: "CopperOre", Quantity: 1 }
    ], SkillName.Blacksmithing, 1, "Ingots"
));

CraftRecipe.addRecipe("SteelIngot", new CraftRecipe(
    SteelIngot, 1, [
        { ItemName: "IronIngot", Quantity: 4 },
        { ItemName: "CopperIngot", Quantity: 2 },
        { ItemName: "Tin", Quantity: 1 }
    ], SkillName.Blacksmithing, 3, "Ingots"
));

CraftRecipe.addRecipe("SilverIngot", new CraftRecipe(
    SilverIngot, 1, [
        { ItemName: "SilverOre", Quantity: 3 }
    ], SkillName.Blacksmithing, 4, "Ingots"
));

CraftRecipe.addRecipe("GoldIngot", new CraftRecipe(
    GoldIngot, 1, [
        { ItemName: "GoldOre", Quantity: 3 },
        { ItemName: "SilverIngot", Quantity: 1 }
    ], SkillName.Blacksmithing, 4, "Ingots"
));

CraftRecipe.addRecipe("DarkIngot", new CraftRecipe(
    DarkIngot, 1, [
        { ItemName: "DarkOre", Quantity: 3 },
        { ItemName: "SilverIngot", Quantity: 1 },
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "CopperIngot", Quantity: 2 }
    ], SkillName.Blacksmithing, 5, "Ingots"
));

CraftRecipe.addRecipe("DarkSteelIngot", new CraftRecipe(
    DarkSteelIngot, 1, [
        { ItemName: "DarkIngot", Quantity: 3 },
        { ItemName: "SteelIngot", Quantity: 3 }
    ], SkillName.Blacksmithing, 6, "Ingots"
));

CraftRecipe.addRecipe("DwarfMetalIngot", new CraftRecipe(
    DwarfMetalIngot, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "GoldIngot", Quantity: 3 },
        { ItemName: "CopperIngot", Quantity: 1 }
    ], SkillName.Blacksmithing, 7, "Ingots"
));

CraftRecipe.addRecipe("MithrilIngot", new CraftRecipe(
    MithrilIngot, 1, [
        { ItemName: "MithrilOre", Quantity: 3 },
        { ItemName: "GoldIngot", Quantity: 5 }
    ], SkillName.Blacksmithing, 9, "Ingots"
));

CraftRecipe.addRecipe("HeavenlyIngot", new CraftRecipe(
    HeavenlyIngot, 1, [
        { ItemName: "HeavenlyOre", Quantity: 3 },
        { ItemName: "MithrilOre", Quantity: 1 }
    ], SkillName.Blacksmithing, 11, "Ingots"
));

//Tools
CraftRecipe.addRecipe("SilverPickaxe", new CraftRecipe(
    SilverPickaxe, 1, [
        { ItemName: "SilverIngot", Quantity: 10 },
        { ItemName: "OakBoard", Quantity: 5 }
    ], SkillName.Blacksmithing, 5, "Tools"
));

CraftRecipe.addRecipe("GoldPickaxe", new CraftRecipe(
    GoldPickaxe, 1, [
        { ItemName: "GoldIngot", Quantity: 10 },
        { ItemName: "MapleBoard", Quantity: 10 }
    ], SkillName.Blacksmithing, 7, "Tools"
));

CraftRecipe.addRecipe("SilverLumberjackAxe", new CraftRecipe(
    SilverLumberjackAxe, 1, [
        { ItemName: "SilverIngot", Quantity: 10 },
        { ItemName: "OakBoard", Quantity: 5 }
    ], SkillName.Blacksmithing, 5, "Tools"
));

CraftRecipe.addRecipe("GoldLumberjackAxe", new CraftRecipe(
    GoldLumberjackAxe, 1, [
        { ItemName: "GoldIngot", Quantity: 10 },
        { ItemName: "MapleBoard", Quantity: 10 }
    ], SkillName.Blacksmithing, 7, "Tools"
));

CraftRecipe.addRecipe("SilverSickle", new CraftRecipe(
    SilverSickle, 1, [
        { ItemName: "SilverIngot", Quantity: 10 },
        { ItemName: "OakBoard", Quantity: 5 }
    ], SkillName.Blacksmithing, 5, "Tools"
));

CraftRecipe.addRecipe("GoldSickle", new CraftRecipe(
    GoldSickle, 1, [
        { ItemName: "GoldIngot", Quantity: 10 },
        { ItemName: "MapleBoard", Quantity: 10 }
    ], SkillName.Blacksmithing, 7, "Tools"
));

//Daggers
CraftRecipe.addRecipe("DAGGER", new CraftRecipe(
    Dagger, 1, [
        { ItemName: "CopperIngot", Quantity: 3 },
        { ItemName: "IronIngot", Quantity: 3 }
    ], SkillName.Blacksmithing, 1, "Daggers"
));

CraftRecipe.addRecipe("THOOTHPICK", new CraftRecipe(
    Toothpick, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Blacksmithing, 3, "Daggers"
));

CraftRecipe.addRecipe("SACRIFICIALDAGGER", new CraftRecipe(
    SacrificialDagger, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SilverIngot", Quantity: 5 },
        { ItemName: "Leather", Quantity: 5 }
    ], SkillName.Blacksmithing, 5, "Daggers"
));

CraftRecipe.addRecipe("SURVIVALKNIFE", new CraftRecipe(
    SurvivalKnife, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SilverIngot", Quantity: 5 },
        { ItemName: "Leather", Quantity: 5 }
    ], SkillName.Blacksmithing, 5, "Daggers"
));

CraftRecipe.addRecipe("CURVEDDAGGER", new CraftRecipe(
    CurvedDagger, 1, [
        { ItemName: "DarkIngot", Quantity: 5 },
        { ItemName: "GoldIngot", Quantity: 10 },
        { ItemName: "Leather", Quantity: 10 }
    ], SkillName.Blacksmithing, 6, "Daggers"
));

//Axe
CraftRecipe.addRecipe("THROWINGAXE", new CraftRecipe(
    ThrowingAxe, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Blacksmithing, 1, "Axes"
));

CraftRecipe.addRecipe("HATCHET", new CraftRecipe(
    Hatchet, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Blacksmithing, 1, "Axes"
));

CraftRecipe.addRecipe("LONGHATCHET", new CraftRecipe(
    LongHatchet, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 3 }
    ], SkillName.Blacksmithing, 1, "Axes"
));

CraftRecipe.addRecipe("LONGSIMPLEAXE", new CraftRecipe(
    LongSimpleAxe, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 3 }
    ], SkillName.Blacksmithing, 1, "Axes"
));

CraftRecipe.addRecipe("CURVERDHANDLEAXE", new CraftRecipe(
    CurvedHandleAxe, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "IpeBoard", Quantity: 3 }
    ], SkillName.Blacksmithing, 3, "Axes"
));

CraftRecipe.addRecipe("HEAVYONEHANDEDAXE", new CraftRecipe(
    HeavyOneHandedAxe, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "IpeBoard", Quantity: 3 }
    ], SkillName.Blacksmithing, 3, "Axes"
));

CraftRecipe.addRecipe("LONGAXE", new CraftRecipe(
    LongAxe, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "IpeBoard", Quantity: 3 }
    ], SkillName.Blacksmithing, 3, "Axes"
));

CraftRecipe.addRecipe("SPIKEAXE", new CraftRecipe(
    SpikedAxe, 1, [
        { ItemName: "IronIngot", Quantity: 4 },
        { ItemName: "IpeBoard", Quantity: 1 }
    ], SkillName.Blacksmithing, 3, "Axes"
));

CraftRecipe.addRecipe("LONGLUMBERJACKAXE", new CraftRecipe(
    LongLumberjackAxe, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "SteelIngot", Quantity: 2 },
        { ItemName: "OakBoard", Quantity: 4 }
    ], SkillName.Blacksmithing, 3, "Axes"
));

//Swords
CraftRecipe.addRecipe("RUSTYSWORD", new CraftRecipe(
    RustySword, 1, [
        { ItemName: "IronIngot", Quantity: 3 }
    ], SkillName.Blacksmithing, 1, "Swords"
));

CraftRecipe.addRecipe("GLADIUS", new CraftRecipe(
    Gladius, 1, [
        { ItemName: "IronIngot", Quantity: 3 }
    ], SkillName.Blacksmithing, 1, "Swords"
));

CraftRecipe.addRecipe("SHORTSWORD", new CraftRecipe(
    ShortSword, 1, [
        { ItemName: "IronIngot", Quantity: 3 }
    ], SkillName.Blacksmithing, 1, "Swords"
));

CraftRecipe.addRecipe("WIDOWMAKER", new CraftRecipe(
    WidowMaker, 1, [
        { ItemName: "IronIngot", Quantity: 5 }
    ], SkillName.Blacksmithing, 2, "Swords"
));

CraftRecipe.addRecipe("AZAROTHSWORD", new CraftRecipe(
    AzarothSword, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 10 }
    ], SkillName.Blacksmithing, 3, "Swords"
));

CraftRecipe.addRecipe("BROADSWORD", new CraftRecipe(
    Broadsword, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 20 }
    ], SkillName.Blacksmithing, 3, "Swords"
));

CraftRecipe.addRecipe("CLAYMORE", new CraftRecipe(
    Claymore, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 20 }
    ], SkillName.Blacksmithing, 3, "Swords"
));

CraftRecipe.addRecipe("LONGSWORD", new CraftRecipe(
    LongSword, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 20 }
    ], SkillName.Blacksmithing, 3, "Swords"
));

CraftRecipe.addRecipe("RAPIER", new CraftRecipe(
    Rapier, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 10 }
    ], SkillName.Blacksmithing, 3, "Swords"
));

CraftRecipe.addRecipe("REFINEDLONGSWORD", new CraftRecipe(
    RefinedLongSword, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 20 }
    ], SkillName.Blacksmithing, 3, "Swords"
));

CraftRecipe.addRecipe("FALCHION", new CraftRecipe(
    Falchion, 1, [
        { ItemName: "SteelIngot", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 20 },
        { ItemName: "SilverIngot", Quantity: 5 }
    ], SkillName.Blacksmithing, 4, "Swords"
));

CraftRecipe.addRecipe("LARGETWOHANDEDSWORD", new CraftRecipe(
    LargeTwoHandedSword, 1, [
        { ItemName: "SteelIngot", Quantity: 20 },
        { ItemName: "IronIngot", Quantity: 20 },
        { ItemName: "SilverIngot", Quantity: 10 }
    ], SkillName.Blacksmithing, 5, "Swords"
));

//Hammer
CraftRecipe.addRecipe("LONGMACE", new CraftRecipe(
    LongMace, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Blacksmithing, 1, "Hammer / Maces"
));

CraftRecipe.addRecipe("SKULLCRUSHER", new CraftRecipe(
    Skullcrusher, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Blacksmithing, 1, "Hammer / Maces"
));

CraftRecipe.addRecipe("SPIKEDCLUB", new CraftRecipe(
    SpikedClub, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Blacksmithing, 1, "Hammer / Maces"
));

CraftRecipe.addRecipe("WEIRDCLUB", new CraftRecipe(
    WeirdClub, 1, [
        { ItemName: "IronIngot", Quantity: 1 },
        { ItemName: "WoodBoard", Quantity: 2 }
    ], SkillName.Blacksmithing, 1, "Hammer / Maces"
));

CraftRecipe.addRecipe("MACE", new CraftRecipe(
    Mace, 1, [
        { ItemName: "SteelIngot", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 10 }
    ], SkillName.Blacksmithing, 3, "Hammer / Maces"
));

CraftRecipe.addRecipe("MARTEL", new CraftRecipe(
    Martel, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "OakBoard", Quantity: 5 }
    ], SkillName.Blacksmithing, 3, "Hammer / Maces"
));

CraftRecipe.addRecipe("MORNINGSTAR", new CraftRecipe(
    MorningStar, 1, [
        { ItemName: "SteelIngot", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 10 }
    ], SkillName.Blacksmithing, 3, "Hammer / Maces"
));

CraftRecipe.addRecipe("VOIDHAMMER", new CraftRecipe(
    Voidhammer, 1, [
        { ItemName: "SteelIngot", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "OakBoard", Quantity: 5 }
    ], SkillName.Blacksmithing, 3, "Hammer / Maces"
));

//Shield
CraftRecipe.addRecipe("CRYSTALSHIELD", new CraftRecipe(
    CrystalShield, 1, [
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "Ametist", Quantity: 1 }
    ], SkillName.Blacksmithing, 3, "Shields"
));

CraftRecipe.addRecipe("ROUNDSPIKEDBUCKLER", new CraftRecipe(
    RoundSpikedBuckler, 1, [
        { ItemName: "SteelIngot", Quantity: 10 },
        { ItemName: "IronIngot", Quantity: 10 }
    ], SkillName.Blacksmithing, 3, "Shields"
));

CraftRecipe.addRecipe("TOWERSHIELD", new CraftRecipe(
    TowerShield, 1, [
        { ItemName: "SteelIngot", Quantity: 15 },
        { ItemName: "IronIngot", Quantity: 20 }
    ], SkillName.Blacksmithing, 3, "Shields"
));

//Chest
CraftRecipe.addRecipe("REIFORCEDHIDEVESTARMOR", new CraftRecipe(
    ReiforcedHideVestArmor, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "Leather", Quantity: 10 }
    ], SkillName.Blacksmithing, 2, "Chests"
));

CraftRecipe.addRecipe("COMMONVILLAGERPROTECTORCHEST", new CraftRecipe(
    CommonVillagerProtectorChest, 1, [
        { ItemName: "IronIngot", Quantity: 15 },
        { ItemName: "Leather", Quantity: 15 }
    ], SkillName.Blacksmithing, 3, "Chests"
));

CraftRecipe.addRecipe("DEFENDERARMOR", new CraftRecipe(
    DefenderArmor, 1, [
        { ItemName: "IronIngot", Quantity: 15 },
        { ItemName: "Leather", Quantity: 15 }
    ], SkillName.Blacksmithing, 3, "Chests"
));

CraftRecipe.addRecipe("GUARDIANARMOR", new CraftRecipe(
    GuardianArmor, 1, [
        { ItemName: "IronIngot", Quantity: 15 },
        { ItemName: "Leather", Quantity: 15 }
    ], SkillName.Blacksmithing, 3, "Chests"
));

CraftRecipe.addRecipe("SCALEARMOR", new CraftRecipe(
    ScaleArmor, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 10 },
        { ItemName: "ScaledLeather", Quantity: 5 }
    ], SkillName.Blacksmithing, 5, "Chests"
));

CraftRecipe.addRecipe("REINFORCEDSCALEARMOR", new CraftRecipe(
    ReinforcedScaleArmor, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 10 },
        { ItemName: "ScaledLeather", Quantity: 10 }
    ], SkillName.Blacksmithing, 5, "Chests"
));


//Helmet
CraftRecipe.addRecipe("RECRUITHELM", new CraftRecipe(
    RecruitHelm, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Blacksmithing, 1, "Helms"
));

CraftRecipe.addRecipe("TROPPERHELM", new CraftRecipe(
    TrooperHelm, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Blacksmithing, 1, "Helms"
));

CraftRecipe.addRecipe("COMBATANT", new CraftRecipe(
    CombatantHelm, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "Leather", Quantity: 2 }
    ], SkillName.Blacksmithing, 2, "Helms"
));

CraftRecipe.addRecipe("FIGHTERHELM", new CraftRecipe(
    FighterHelm, 1, [
        { ItemName: "IronIngot", Quantity: 20 }
    ], SkillName.Blacksmithing, 2, "Helms"
));

CraftRecipe.addRecipe("GUARDIANHELM", new CraftRecipe(
    GuardianHelm, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "Leather", Quantity: 2 }
    ], SkillName.Blacksmithing, 2, "Helms"
));

CraftRecipe.addRecipe("CHAMPIONHELM", new CraftRecipe(
    ChampionHelm, 1, [
        { ItemName: "IronIngot", Quantity: 20 },
        { ItemName: "SteelIngot", Quantity: 5 },
    ], SkillName.Blacksmithing, 3, "Helms"
));

CraftRecipe.addRecipe("DEFENDERHELM", new CraftRecipe(
    DefenderHelm, 1, [
        { ItemName: "IronIngot", Quantity: 20 },
        { ItemName: "SteelIngot", Quantity: 5 },
    ], SkillName.Blacksmithing, 3, "Helms"
));

CraftRecipe.addRecipe("IRONGREATHELM", new CraftRecipe(
    IronGreathelm, 1, [
        { ItemName: "IronIngot", Quantity: 20 },
        { ItemName: "SteelIngot", Quantity: 5 },
    ], SkillName.Blacksmithing, 3, "Helms"
));

CraftRecipe.addRecipe("IRONHEADGUARD", new CraftRecipe(
    IronHeadguard, 1, [
        { ItemName: "IronIngot", Quantity: 20 },
        { ItemName: "SteelIngot", Quantity: 5 },
    ], SkillName.Blacksmithing, 3, "Helms"
));

CraftRecipe.addRecipe("ARMOREDROYALGUARDHELM", new CraftRecipe(
    ArmoredRoyalGuardHelm, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 20 },
        { ItemName: "GoldIngot", Quantity: 1 },
    ], SkillName.Blacksmithing, 5, "Helms"
));

CraftRecipe.addRecipe("CONQUERORMAILHELM", new CraftRecipe(
    ConquerorsMailHelm, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 20 },
        { ItemName: "GoldIngot", Quantity: 1 },
    ], SkillName.Blacksmithing, 5, "Helms"
));

//Gloves
CraftRecipe.addRecipe("TROOPERBRACER", new CraftRecipe(
    TrooperBracer, 1, [
        { ItemName: "IronIngot", Quantity: 3 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Blacksmithing, 1, "Gloves"
));

CraftRecipe.addRecipe("IVORYGLOVES", new CraftRecipe(
    IvoryGloves, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "Leather", Quantity: 5 }
    ], SkillName.Blacksmithing, 2, "Gloves"
));

CraftRecipe.addRecipe("SOLDIERGLOVES", new CraftRecipe(
    RecruitsGauntlets, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "Leather", Quantity: 5 }
    ], SkillName.Blacksmithing, 2, "Gloves"
));

CraftRecipe.addRecipe("SOLDIERGLOVES", new CraftRecipe(
    SoldierGloves, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "Leather", Quantity: 5 }
    ], SkillName.Blacksmithing, 2, "Gloves"
));

CraftRecipe.addRecipe("BATTLEPLATEGLOVES", new CraftRecipe(
    BattleplateGloves, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 20 },
        { ItemName: "GoldIngot", Quantity: 2 },
    ], SkillName.Blacksmithing, 5, "Gloves"
));

//Boots
CraftRecipe.addRecipe("REINFORCEDBOOT", new CraftRecipe(
    ReinforcedBoot, 1, [
        { ItemName: "IronIngot", Quantity: 3 },
        { ItemName: "Leather", Quantity: 1 }
    ], SkillName.Blacksmithing, 1, "Boots"
));

CraftRecipe.addRecipe("REINFORCEDBOOTS", new CraftRecipe(
    IvoryBoots, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 5 },
    ], SkillName.Blacksmithing, 3, "Boots"
));

CraftRecipe.addRecipe("SOLDIERBOOTS", new CraftRecipe(
    SoldierBoots, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 5 },
    ], SkillName.Blacksmithing, 3, "Boots"
));

CraftRecipe.addRecipe("ARMOREDROYALGUARDBOOTS", new CraftRecipe(
    ArmoredRoyalGuardBoots, 1, [
        { ItemName: "IronIngot", Quantity: 10 },
        { ItemName: "SteelIngot", Quantity: 20 },
        { ItemName: "GoldIngot", Quantity: 2 },
    ], SkillName.Blacksmithing, 5, "Boots"
));

//Pants
CraftRecipe.addRecipe("IVORYLEGS", new CraftRecipe(
    IvoryLegs, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "ScaledLeather", Quantity: 10 },
    ], SkillName.Blacksmithing, 5, "Pants"
));

CraftRecipe.addRecipe("WRATHFULPANTS", new CraftRecipe(
    WrathfulPants, 1, [
        { ItemName: "IronIngot", Quantity: 5 },
        { ItemName: "SteelIngot", Quantity: 5 },
        { ItemName: "ScaledLeather", Quantity: 10 },
    ], SkillName.Blacksmithing, 5, "Pants"
));

CraftRecipe.addRecipe("BATTLEPLATELEGS", new CraftRecipe(
    BattleplateLegs, 1, [
        { ItemName: "SteelIngot", Quantity: 20 },
        { ItemName: "IronScaledLeather", Quantity: 10 },
    ], SkillName.Blacksmithing, 7, "Pants"
));
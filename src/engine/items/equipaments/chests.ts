import { 
    AttributeType, Equipament, EquipamentTier, 
    EquipamentType, EquipmentWeight, Items 
} from "../../items";

export class ArcaneChest extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrw_mage_dress_01_a";
    public override Name = "Arcane Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "12-15"],        
        ["Fire Resistence", "26-30"],        
        ["Cold Resistence", "26-30"],        
        ["Poison Resistence", "26-30"],        
        ["Energy Resistence", "26-30"],        
        ["Mana Regen", "10"]
    ]);

    public override generateAttrs() {
        this.setArmor(12,15);
        this.setFireResistence(26,30);
        this.setColdResistence(26,30);
        this.setPoisonResistence(26,30);
        this.setEnergyResistence(26,30);
        
        this.setAttr(AttributeType.ManaRegen, 10);
    }
}

export class ArmorOfRelentlessSorrow extends Equipament {
    public override Namespace = "sk_ma_chest_deathknight_02_c";
    public override Name = "Armor of Relentless Sorrow";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class ArmoredDarkPlateChest extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_plated_b";
    public override Name = "Armored Dark Plate Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class ArmoredFullPlateChest extends Equipament {
    public override Namespace = "SK_chest_knight_01_d";
    public override Name = "Armored Full Plate Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class ArmoredKnightChest extends Equipament {
    public override Namespace = "SK_chest_knight_01_b";
    public override Name = "Armored Knight Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class KnightChest extends Equipament {
    public override Namespace = "SK_chest_knight_02_a";
    public override Name = "Knight Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class ArmoredRoyalGuardChest extends Equipament {
    public override Namespace = "SK_chest_knight_01_c_";
    public override Name = "Armored Royal Guard Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class ArmoredSacredChest extends Equipament {
    public override Namespace = "SK_chest_knight_01_a";
    public override Name = "Armored Sacred Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class BarbarianChest extends Equipament {
    public override Namespace = "SK_ma_metal_tal_nrw_barbar_chest_05_d";
    public override Name = "Barbarian Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "21-25"],        
        ["Fire Resistence", "9-11"],        
        ["Cold Resistence", "9-11"],        
        ["Poison Resistence", "9-11"],        
        ["Energy Resistence", "9-11"],        
    ]);

    public override generateAttrs() {
        this.setArmor(21,25);
        this.setFireResistence(9,11);
        this.setColdResistence(9,11);
        this.setPoisonResistence(9,11);
        this.setEnergyResistence(9,11);
    }
}

export class BarbaricScaleArmor extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_03_c";
    public override Name = "Barbaric Scale Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "15-20"],        
        ["Fire Resistence", "7-9"],        
        ["Cold Resistence", "7-9"],        
        ["Poison Resistence", "7-9"],        
        ["Energy Resistence", "7-9"],        
    ]);

    public override generateAttrs() {
        this.setArmor(15,20);
        this.setFireResistence(7,9);
        this.setColdResistence(7,9);
        this.setPoisonResistence(7,9);
        this.setEnergyResistence(7,9);
    }
}

export class BardVest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_citizen_01_a";
    public override Name = "Bard Vest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "16-20"],        
        ["Fire Resistence", "16-20"],        
        ["Cold Resistence", "16-20"],        
        ["Poison Resistence", "16-20"],        
        ["Energy Resistence", "16-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(16,20);
        this.setFireResistence(16,20);
        this.setColdResistence(16,20);
        this.setPoisonResistence(16,20);
        this.setEnergyResistence(16,20);
    }
}

export class BattleplateChest extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_05_b";
    public override Name = "Battleplate Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "21-25"],        
        ["Fire Resistence", "9-11"],        
        ["Cold Resistence", "9-11"],        
        ["Poison Resistence", "9-11"],        
        ["Energy Resistence", "9-11"],        
    ]);

    public override generateAttrs() {
        this.setArmor(21,25);
        this.setFireResistence(9,11);
        this.setColdResistence(9,11);
        this.setPoisonResistence(9,11);
        this.setEnergyResistence(9,11);
    }
}

export class BerserkerChest extends Equipament {
    public override Namespace = "SK_ma_metal_tal_nrw_barbar_chest_01_b_0";
    public override Name = "Berserker Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 2000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "15-20"],        
        ["Fire Resistence", "7-8"],        
        ["Cold Resistence", "7-8"],        
        ["Poison Resistence", "7-8"],        
        ["Energy Resistence", "7-8"],        
    ]);

    public override generateAttrs() {
        this.setArmor(15,20);
        this.setFireResistence(7,8);
        this.setColdResistence(7,8);
        this.setPoisonResistence(7,8);
        this.setEnergyResistence(7,8);
    }
}

export class ChampionChestplate extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_04_b";
    public override Name = "Champion ";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "21-25"],        
        ["Fire Resistence", "9-11"],        
        ["Cold Resistence", "9-11"],        
        ["Poison Resistence", "9-11"],        
        ["Energy Resistence", "9-11"],        
    ]);

    public override generateAttrs() {
        this.setArmor(21,25);
        this.setFireResistence(9,11);
        this.setColdResistence(9,11);
        this.setPoisonResistence(9,11);
        this.setEnergyResistence(9,11);
    }
}

export class ChestplateOfEndingWarlords extends Equipament {
    public override Namespace = "sk_ma_chest_darkknight_01_c";
    public override Name = "Chestplate of Ending Warlords";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class CommonCultistMetalChest extends Equipament {
    public override Namespace = "sk_ma_chest_darkknight_01_c";
    public override Name = "Common Cultist Metal Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 2000;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-4"],        
        ["Fire Resistence", "6-9"],        
        ["Cold Resistence", "6-9"],        
        ["Poison Resistence", "6-9"],        
        ["Energy Resistence", "6-9"],        
    ]);

    public override generateAttrs() {
        this.setArmor(3,4);
        this.setFireResistence(6,9);
        this.setColdResistence(6,9);
        this.setPoisonResistence(6,9);
        this.setEnergyResistence(6,9);
    }
}

export class CommonVillagerChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_02_a";
    public override Name = "Common Villager Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class CommonVillagerProtectorChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_03_c";
    public override Name = "Common Villager Protector Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class CommonWhiteRuggedLeatherChest extends Equipament {
    public override Namespace = "SK_chest_soldier_01_a";
    public override Name = "Common White Rugged Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class CommonWorkerChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_02_b";
    public override Name = "Common Worker Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;
    
    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class ConquerorsMailChest extends Equipament {
    public override Namespace = "SK_chest_north_02_a_fur";
    public override Name = "Conqueror's Mail Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "9-12"],        
        ["Fire Resistence", "9-12"],        
        ["Cold Resistence", "9-12"],        
        ["Poison Resistence", "9-12"],        
        ["Energy Resistence", "9-12"],        
    ]);

    public override generateAttrs() {
        this.setArmor(9,12);
        this.setFireResistence(9,12);
        this.setColdResistence(9,12);
        this.setPoisonResistence(9,12);
        this.setEnergyResistence(9,12);
    }
}

export class CuirassOfCursedComrades extends Equipament {
    public override Namespace = "SK_chest_north_02_a_fur";
    public override Name = "Cuirass of Cursed Comrades";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class CultistGarment extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_dress_e";
    public override Name = "Cultist Garment";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "10-14"],        
        ["Cold Resistence", "10-14"],        
        ["Poison Resistence", "10-14"],        
        ["Energy Resistence", "10-14"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(10,14);
        this.setColdResistence(10,14);
        this.setPoisonResistence(10,14);
        this.setEnergyResistence(10,14);
    }
}

export class CultistRobe extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_dress_b";
    public override Name = "Cultist Robe";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "10-14"],        
        ["Cold Resistence", "10-14"],        
        ["Poison Resistence", "10-14"],        
        ["Energy Resistence", "10-14"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(10,14);
        this.setColdResistence(10,14);
        this.setPoisonResistence(10,14);
        this.setEnergyResistence(10,14);
    }
}

export class DarkKinghtChest extends Equipament {
    public override Namespace = "sk_ma_chest_darkknight_01_b";
    public override Name = "Dark Kinght Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class DarkPlateChest extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_plated_a";
    public override Name = "Dark Plate Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class DefenderArmor extends Equipament {
    public override Namespace = "SK_chest_north_02_b";
    public override Name = "Defender Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class DefenderOfBlightChest extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrw_mage_dress_01_c";
    public override Name = "Defender of Blight Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Light"],             
        ["Armor", "9-11"],        
        ["Fire Resistence", "21-25"],        
        ["Cold Resistence", "21-25"],        
        ["Poison Resistence", "21-25"],        
        ["Energy Resistence", "21-25"],        
    ]);

    public override generateAttrs() {
        this.setArmor(9,11);
        this.setFireResistence(21,25);
        this.setColdResistence(21,25);
        this.setPoisonResistence(21,25);
        this.setEnergyResistence(21,25);
    }
}

export class DragonhideLeatherChest extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrw_mage_dress_01_c";
    public override Name = "Dragonhide Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "16-20"],        
        ["Fire Resistence", "16-20"],        
        ["Cold Resistence", "16-20"],        
        ["Poison Resistence", "16-20"],        
        ["Energy Resistence", "16-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(16,20);
        this.setFireResistence(16,20);
        this.setColdResistence(16,20);
        this.setPoisonResistence(16,20);
        this.setEnergyResistence(16,20);
    }
}

export class DruidLeatherRobe extends Equipament {
    public override Namespace = "SK_ma_druid_set_01_b";
    public override Name = "Druid Leather Robe";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "10-14"],        
        ["Cold Resistence", "10-14"],        
        ["Poison Resistence", "10-14"],        
        ["Energy Resistence", "10-14"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(10,14);
        this.setColdResistence(10,14);
        this.setPoisonResistence(10,14);
        this.setEnergyResistence(10,14);
    }
}

export class DruidWinterGarments extends Equipament { //Update attrs
    public override Namespace = "SK_ma_druid_set_02_c";
    public override Name = "Druid Winter Garments";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 2000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "10-14"],        
        ["Cold Resistence", "10-14"],        
        ["Poison Resistence", "10-14"],        
        ["Energy Resistence", "10-14"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(10,14);
        this.setColdResistence(10,14);
        this.setPoisonResistence(10,14);
        this.setEnergyResistence(10,14);
    }
}

export class EngravedArmor extends Equipament {
    public override Namespace = "sk_ma_chest_deathknight_02_a";
    public override Name = "Engraved Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "25-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(25,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class FancierCommonerChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_citizen_02_c";
    public override Name = "Fancier Commoner Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "7-8"],        
        ["Cold Resistence", "7-8"],        
        ["Poison Resistence", "7-8"],        
        ["Energy Resistence", "7-8"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(7,8);
        this.setColdResistence(7,8);
        this.setPoisonResistence(7,8);
        this.setEnergyResistence(7,8);
    }
}

export class FancyCommonerChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_citizen_02_b";
    public override Name = "Fancy Commoner Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "7-8"],        
        ["Cold Resistence", "7-8"],        
        ["Poison Resistence", "7-8"],        
        ["Energy Resistence", "7-8"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(7,8);
        this.setColdResistence(7,8);
        this.setPoisonResistence(7,8);
        this.setEnergyResistence(7,8);
    }
}

export class FancyWhiteRuggedLeatherChest extends Equipament {
    public override Namespace = "SK_chest_soldier_01_c_";
    public override Name = "Fancy White Rugged Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 350;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class FighterArmor extends Equipament {
    public override Namespace = "SK_chest_north_02_a";
    public override Name = "Fighter Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class GranArcaneVest extends Equipament {
    public override Namespace = "SK_chest_north_02_a";
    public override Name = "Gran Arcane Vest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "12-15"],        
        ["Fire Resistence", "26-30"],        
        ["Cold Resistence", "26-30"],        
        ["Poison Resistence", "26-30"],        
        ["Energy Resistence", "26-30"],        
    ]);

    public override generateAttrs() {
        this.setArmor(12,15);
        this.setFireResistence(26,30);
        this.setColdResistence(26,30);
        this.setPoisonResistence(26,30);
        this.setEnergyResistence(26,30);
    }
}

export class GreatleatherChest extends Equipament {
    public override Namespace = "sk_chest_merc_02_b";
    public override Name = "Greatleather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "13-15"],        
        ["Fire Resistence", "13-15"],        
        ["Cold Resistence", "13-15"],        
        ["Poison Resistence", "13-15"],        
        ["Energy Resistence", "13-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(13,15);
        this.setFireResistence(13,15);
        this.setColdResistence(13,15);
        this.setPoisonResistence(13,15);
        this.setEnergyResistence(13,15);
    }
}

export class GuardOfTheLightArmor extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_05_c";
    public override Name = "Guard of the Light Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "21-25"],        
        ["Fire Resistence", "9-11"],        
        ["Cold Resistence", "9-11"],        
        ["Poison Resistence", "9-11"],        
        ["Energy Resistence", "9-11"],        
    ]);

    public override generateAttrs() {
        this.setArmor(21,25);
        this.setFireResistence(9,11);
        this.setColdResistence(9,11);
        this.setPoisonResistence(9,11);
        this.setEnergyResistence(9,11);
    }
}

export class GuardianArmor extends Equipament {
    public override Namespace = "SK_chest_knight_02_b";
    public override Name = "Guardian Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class HeavyHideVestArmor extends Equipament {
    public override Namespace = "SK_chest_north_01_a";
    public override Name = "Heavy Hide Vest Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class HeavyNorthChest extends Equipament {
    public override Namespace = "SK_chest_north_02_d";
    public override Name = "Heavy North Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class HideChestOfShadowWhispers extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_elv_chest_01_a";
    public override Name = "Hide Chest of Shadow Whispers";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "16-20"],        
        ["Fire Resistence", "16-20"],        
        ["Cold Resistence", "16-20"],        
        ["Poison Resistence", "16-20"],        
        ["Energy Resistence", "16-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(16,20);
        this.setFireResistence(16,20);
        this.setColdResistence(16,20);
        this.setPoisonResistence(16,20);
        this.setEnergyResistence(16,20);
    }
}

export class HideVestArmor extends Equipament {
    public override Namespace = "SK_chest_north_01_b";
    public override Name = "Hide Vest Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class InitiatedRobe extends Equipament {
    public override Namespace = "SK_ma_druid_set_01_a";
    public override Name = "Initiated Robe";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0;

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "1-2"],        
        ["Fire Resistence", "3-5"],        
        ["Cold Resistence", "3-5"],        
        ["Poison Resistence", "3-5"],        
        ["Energy Resistence", "3-5"],        
    ]);

    public override generateAttrs() {
        this.setArmor(1,2);
        this.setFireResistence(3,5);
        this.setColdResistence(3,5);
        this.setPoisonResistence(3,5);
        this.setEnergyResistence(3,5);
    }
}

export class IvoryArmor extends Equipament {
    public override Namespace = "sk_chest_merc_02_d";
    public override Name = "Ivory Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "9-12"],        
        ["Fire Resistence", "9-12"],        
        ["Cold Resistence", "9-12"],        
        ["Poison Resistence", "9-12"],        
        ["Energy Resistence", "9-12"],        
    ]);

    public override generateAttrs() {
        this.setArmor(9,12);
        this.setFireResistence(9,12);
        this.setColdResistence(9,12);
        this.setPoisonResistence(9,12);
        this.setEnergyResistence(9,12);
    }
}

export class JokerChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_citizen_02_a";
    public override Name = "Joker Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "13-15"],        
        ["Fire Resistence", "13-15"],        
        ["Cold Resistence", "13-15"],        
        ["Poison Resistence", "13-15"],        
        ["Energy Resistence", "13-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(13,15);
        this.setFireResistence(13,15);
        this.setColdResistence(13,15);
        this.setPoisonResistence(13,15);
        this.setEnergyResistence(13,15);
    }
}

export class LeatherChest extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_rogue_01_a";
    public override Name = "Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "16-20"],        
        ["Fire Resistence", "16-20"],        
        ["Cold Resistence", "16-20"],        
        ["Poison Resistence", "16-20"],        
        ["Energy Resistence", "16-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(16,20);
        this.setFireResistence(16,20);
        this.setColdResistence(16,20);
        this.setPoisonResistence(16,20);
        this.setEnergyResistence(16,20);
    }
}

export class LeatherGarments extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_01_a";
    public override Name = "Leather Garments";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class MaliciousChest extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_dress_d";
    public override Name = "Malicious Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0;

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "1-2"],        
        ["Fire Resistence", "3-5"],        
        ["Cold Resistence", "3-5"],        
        ["Poison Resistence", "3-5"],        
        ["Energy Resistence", "3-5"],        
    ]);

    public override generateAttrs() {
        this.setArmor(1,2);
        this.setFireResistence(3,5);
        this.setColdResistence(3,5);
        this.setPoisonResistence(3,5);
        this.setEnergyResistence(3,5);
    }
}

export class MasterOfDeath extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_dress_knight_02_001";
    public override Name = "Master of Death";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "12-15"],        
        ["Fire Resistence", "26-30"],        
        ["Cold Resistence", "26-30"],        
        ["Poison Resistence", "26-30"],        
        ["Energy Resistence", "26-30"],        
    ]);

    public override generateAttrs() {
        this.setArmor(12,15);
        this.setFireResistence(26,30);
        this.setColdResistence(26,30);
        this.setPoisonResistence(26,30);
        this.setEnergyResistence(26,30);
    }
}

export class MercenaryChest extends Equipament {
    public override Namespace = "sk_chest_merc_02_b_cloak";
    public override Name = "Mercenary Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "16-20"],        
        ["Fire Resistence", "16-20"],        
        ["Cold Resistence", "16-20"],        
        ["Poison Resistence", "16-20"],        
        ["Energy Resistence", "16-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(16,20);
        this.setFireResistence(16,20);
        this.setColdResistence(16,20);
        this.setPoisonResistence(16,20);
        this.setEnergyResistence(16,20);
    }
}

export class NatureProtectorRobe extends Equipament {
    public override Namespace = "SK_ma_druid_set_02_a";
    public override Name = "Nature Protector Robe";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "12-15"],        
        ["Fire Resistence", "26-30"],        
        ["Cold Resistence", "26-30"],        
        ["Poison Resistence", "26-30"],        
        ["Energy Resistence", "26-30"],        
    ]);

    public override generateAttrs() {
        this.setArmor(12,15);
        this.setFireResistence(26,30);
        this.setColdResistence(26,30);
        this.setPoisonResistence(26,30);
        this.setEnergyResistence(26,30);
    }
}

export class NorthChest extends Equipament {
    public override Namespace = "SK_chest_north_02_e";
    public override Name = "North Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class OminousChestplate extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_04_a";
    public override Name = "Ominous Chestplate";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "21-25"],        
        ["Fire Resistence", "9-11"],        
        ["Cold Resistence", "9-11"],        
        ["Poison Resistence", "9-11"],        
        ["Energy Resistence", "9-11"],        
    ]);

    public override generateAttrs() {
        this.setArmor(21,25);
        this.setFireResistence(9,11);
        this.setColdResistence(9,11);
        this.setPoisonResistence(9,11);
        this.setEnergyResistence(9,11);
    }
}

export class PactOfTheMage extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_mage_dress_02_b";
    public override Name = "Pact of the Mage";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 820;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "15-20"],        
        ["Cold Resistence", "15-20"],        
        ["Poison Resistence", "15-20"],        
        ["Energy Resistence", "15-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(15,20);
        this.setColdResistence(15,20);
        this.setPoisonResistence(15,20);
        this.setEnergyResistence(15,20);
    }
}

export class PromiseOfVengeanceArmor extends Equipament {
    public override Namespace = "sk_ma_chest_deathknight_02_b";
    public override Name = "Promise of Vengeance Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "26-30"],        
        ["Fire Resistence", "12-15"],        
        ["Cold Resistence", "12-15"],        
        ["Poison Resistence", "12-15"],        
        ["Energy Resistence", "12-15"],        
    ]);

    public override generateAttrs() {
        this.setArmor(26,30);
        this.setFireResistence(12,15);
        this.setColdResistence(12,15);
        this.setPoisonResistence(12,15);
        this.setEnergyResistence(12,15);
    }
}

export class ProtectorArmor extends Equipament {
    public override Namespace = "SK_chest_soldier_02_a";
    public override Name = "Protector Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 320;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class ProtectorOfPridesFall extends Equipament {
    public override Namespace = "SK_chest_merc_02_a";
    public override Name = "Protector of Pride's Fall";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "9-12"],        
        ["Fire Resistence", "9-12"],        
        ["Cold Resistence", "9-12"],        
        ["Poison Resistence", "9-12"],        
        ["Energy Resistence", "9-12"],        
    ]);

    public override generateAttrs() {
        this.setArmor(9,12);
        this.setFireResistence(9,12);
        this.setColdResistence(9,12);
        this.setPoisonResistence(9,12);
        this.setEnergyResistence(9,12);
    }
}

export class RecruitChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_03_a";
    public override Name = "Recruit Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0;

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-5"],        
        ["Fire Resistence", "1-2"],        
        ["Cold Resistence", "1-2"],        
        ["Poison Resistence", "1-2"],        
        ["Energy Resistence", "1-2"],        
    ]);

    public override generateAttrs() {
        this.setArmor(3,5);
        this.setFireResistence(1,2);
        this.setColdResistence(1,2);
        this.setPoisonResistence(1,2);
        this.setEnergyResistence(1,2);
    }
}

export class ReiforcedHideVestArmor extends Equipament {
    public override Namespace = "SK_chest_north_01_c";
    public override Name = "Reiforced Hide Vest Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class ReinforcedDefenderArmor extends Equipament {
    public override Namespace = "SK_chest_north_02_c";
    public override Name = "Reinforced Defender Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 350;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class ReinforcedScaleArmor extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_03_a2";
    public override Name = "Reinforced Scale Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "15-20"],        
        ["Fire Resistence", "7-8"],        
        ["Cold Resistence", "7-8"],        
        ["Poison Resistence", "7-8"],        
        ["Energy Resistence", "7-8"],        
    ]);

    public override generateAttrs() {
        this.setArmor(15,20);
        this.setFireResistence(7,8);
        this.setColdResistence(7,8);
        this.setPoisonResistence(7,8);
        this.setEnergyResistence(7,8);
    }
}

export class ReinforcedVillagerProtectorChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_02_c";
    public override Name = "Reinforced Villager Protector Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 320;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class ReinforcedWarriorArmor extends Equipament {
    public override Namespace = "SK_chest_soldier_02_c";
    public override Name = "Reinforced Warrior Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 320;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class RobesOfCataclysms extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_dress_c_seperate_005";
    public override Name = "Robes of Cataclysms";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 320;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "10-14"],        
        ["Cold Resistence", "10-14"],        
        ["Poison Resistence", "10-14"],        
        ["Energy Resistence", "10-14"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(10,14);
        this.setColdResistence(10,14);
        this.setPoisonResistence(10,14);
        this.setEnergyResistence(10,14);
    }
}

export class RobesOfEndingVisions extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrw_mage_dress_01_b_tome";
    public override Name = "Robes of Ending Visions";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "12-15"],        
        ["Fire Resistence", "26-30"],        
        ["Cold Resistence", "26-30"],        
        ["Poison Resistence", "26-30"],        
        ["Energy Resistence", "26-30"],        
    ]);

    public override generateAttrs() {
        this.setArmor(12,15);
        this.setFireResistence(26,30);
        this.setColdResistence(26,30);
        this.setPoisonResistence(26,30);
        this.setEnergyResistence(26,30);
    }
}

export class RobesOfNature extends Equipament {
    public override Namespace = "SK_ma_druid_set_01_c";
    public override Name = "Robes of Nature";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "15-20"],        
        ["Cold Resistence", "15-20"],        
        ["Poison Resistence", "15-20"],        
        ["Energy Resistence", "15-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(15,20);
        this.setColdResistence(15,20);
        this.setPoisonResistence(15,20);
        this.setEnergyResistence(15,20);
    }
}

export class RoyalRuggedLeatherChest extends Equipament {
    public override Namespace = "SK_chest_soldier_01_c_cloak";
    public override Name = "Royal Rugged Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 320;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class RuggedLeatherChest extends Equipament {
    public override Namespace = "SK_chest_soldier_01_d";
    public override Name = "Rugged Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 320;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class ScaleArmor extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_03_a";
    public override Name = "Scale Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 320;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "15-20"],        
        ["Fire Resistence", "7-8"],        
        ["Cold Resistence", "7-8"],        
        ["Poison Resistence", "7-8"],        
        ["Energy Resistence", "7-8"],        
    ]);

    public override generateAttrs() {
        this.setArmor(15,20);
        this.setFireResistence(7,8);
        this.setColdResistence(7,8);
        this.setPoisonResistence(7,8);
        this.setEnergyResistence(7,8);
    }
}

export class Sharper extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_01_b";
    public override Name = "Sharper";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0;

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-4"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(3,4);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class SlenderChest extends Equipament {
    public override Namespace = "SK_chest_merc_01_a";
    public override Name = "Slender Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0;

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-4"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(3,4);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class SoldierChest extends Equipament {
    public override Namespace = "SK_chest_knight_02_c";
    public override Name = "Soldier Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class SoldierRuggedLeatherChest extends Equipament {
    public override Namespace = "SK_chest_soldier_01_e";
    public override Name = "Soldier Rugged Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class SpiritHideBreastplate extends Equipament {
    public override Namespace = "SK_ma_druid_set_02_d";
    public override Name = "Spirit Hide Breastplate";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-4"],        
        ["Fire Resistence", "6-9"],        
        ["Cold Resistence", "6-9"],        
        ["Poison Resistence", "6-9"],        
        ["Energy Resistence", "6-9"],        
    ]);

    public override generateAttrs() {
        this.setArmor(3,4);
        this.setFireResistence(6,9);
        this.setColdResistence(6,9);
        this.setPoisonResistence(6,9);
        this.setEnergyResistence(6,9);
    }
}

export class StealthyArmor extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_elv_chest_01_c";
    public override Name = "Stealthy Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "16-20"],        
        ["Fire Resistence", "16-20"],        
        ["Cold Resistence", "16-20"],        
        ["Poison Resistence", "16-20"],        
        ["Energy Resistence", "16-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(16,20);
        this.setFireResistence(16,20);
        this.setColdResistence(16,20);
        this.setPoisonResistence(16,20);
        this.setEnergyResistence(16,20);
    }
}

export class TributeOfBlessedFortunes extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_elv_chest_01_c";
    public override Name = "Tribute of Blessed Fortunes";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "15-20"],        
        ["Cold Resistence", "15-20"],        
        ["Poison Resistence", "15-20"],        
        ["Energy Resistence", "15-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(15,20);
        this.setColdResistence(15,20);
        this.setPoisonResistence(15,20);
        this.setEnergyResistence(15,20);
    }
}

export class TroublemakerChest extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_elv_chest_01_c";
    public override Name = "Troublemaker Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-6"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(5,6);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class TunicOfLife extends Equipament {
    public override Namespace = "SK_ma_druid_set_02_b";
    public override Name = "Tunic of Life";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Light"],             
        ["Armor", "9-11"],        
        ["Fire Resistence", "21-25"],        
        ["Cold Resistence", "21-25"],        
        ["Poison Resistence", "21-25"],        
        ["Energy Resistence", "21-25"],        
    ]);

    public override generateAttrs() {
        this.setArmor(9,11);
        this.setFireResistence(21,25);
        this.setColdResistence(21,25);
        this.setPoisonResistence(21,25);
        this.setEnergyResistence(21,25);
    }
}

export class TunicOfSacredJustice extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_mage_dress_02_c_hood";
    public override Name = "Tunic of Sacred Justice";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "15-20"],        
        ["Cold Resistence", "15-20"],        
        ["Poison Resistence", "15-20"],        
        ["Energy Resistence", "15-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(15,20);
        this.setColdResistence(15,20);
        this.setPoisonResistence(15,20);
        this.setEnergyResistence(15,20);
    }
}

export class TunicOfSouls extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrw_mage_dress_01_b";
    public override Name = "Tunic of Souls";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Light"],             
        ["Armor", "9-11"],        
        ["Fire Resistence", "21-25"],        
        ["Cold Resistence", "21-25"],        
        ["Poison Resistence", "21-25"],        
        ["Energy Resistence", "21-25"],        
    ]);

    public override generateAttrs() {
        this.setArmor(9,11);
        this.setFireResistence(21,25);
        this.setColdResistence(21,25);
        this.setPoisonResistence(21,25);
        this.setEnergyResistence(21,25);
    }
}

export class UnholyChest extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_dress_knight_01_001";
    public override Name = "Unholy Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 4000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "12-15"],        
        ["Fire Resistence", "25-30"],        
        ["Cold Resistence", "25-30"],        
        ["Poison Resistence", "25-30"],        
        ["Energy Resistence", "25-30"],        
    ]);

    public override generateAttrs() {
        this.setArmor(12,15);
        this.setFireResistence(26,30);
        this.setColdResistence(26,30);
        this.setPoisonResistence(26,30);
        this.setEnergyResistence(26,30);
    }
}

export class VestOfDivineHope extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_mage_dress_02_b_bags";
    public override Name = "Vest of Divine Hope";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "15-20"],        
        ["Cold Resistence", "15-20"],        
        ["Poison Resistence", "15-20"],        
        ["Energy Resistence", "15-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(15,20);
        this.setColdResistence(15,20);
        this.setPoisonResistence(15,20);
        this.setEnergyResistence(15,20);
    }
}

export class VillagerProtectorChest extends Equipament {
    public override Namespace = "SK_ma_medieval_chest_villager_03_b";
    public override Name = "Villager Protector Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 320;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class WarriorArmor extends Equipament {
    public override Namespace = "SK_chest_soldier_02_b";
    public override Name = "Warrior Armor";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 320;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "10-14"],        
        ["Fire Resistence", "5-6"],        
        ["Cold Resistence", "5-6"],        
        ["Poison Resistence", "5-6"],        
        ["Energy Resistence", "5-6"],        
    ]);

    public override generateAttrs() {
        this.setArmor(10,14);
        this.setFireResistence(5,6);
        this.setColdResistence(5,6);
        this.setPoisonResistence(5,6);
        this.setEnergyResistence(5,6);
    }
}

export class WhiteRuggedLeatherChest extends Equipament {
    public override Namespace = "SK_chest_soldier_01_b";
    public override Name = "White Rugged Leather Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "6-9"],        
        ["Fire Resistence", "3-4"],        
        ["Cold Resistence", "3-4"],        
        ["Poison Resistence", "3-4"],        
        ["Energy Resistence", "3-4"],        
    ]);

    public override generateAttrs() {
        this.setArmor(6,9);
        this.setFireResistence(3,4);
        this.setColdResistence(3,4);
        this.setPoisonResistence(3,4);
        this.setEnergyResistence(3,4);
    }
}

export class WildChest extends Equipament {
    public override Namespace = "SK_ma_metal_tal_nrw_barbar_chest_01_a";
    public override Name = "Wild Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0;

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-5"],        
        ["Fire Resistence", "1-2"],        
        ["Cold Resistence", "1-2"],        
        ["Poison Resistence", "1-2"],        
        ["Energy Resistence", "1-2"],        
    ]);

    public override generateAttrs() {
        this.setArmor(3,5);
        this.setFireResistence(1,2);
        this.setColdResistence(1,2);
        this.setPoisonResistence(1,2);
        this.setEnergyResistence(1,2);
    }
}

export class WrapsOfBrokenMight extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrw_mage_dress_02_c";
    public override Name = "Wraps of Broken Might";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "7-8"],        
        ["Fire Resistence", "15-20"],        
        ["Cold Resistence", "15-20"],        
        ["Poison Resistence", "15-20"],        
        ["Energy Resistence", "15-20"],        
    ]);

    public override generateAttrs() {
        this.setArmor(7,8);
        this.setFireResistence(15,20);
        this.setColdResistence(15,20);
        this.setPoisonResistence(15,20);
        this.setEnergyResistence(15,20);
    }
}

export class WrathfulBatteplate extends Equipament {
    public override Namespace = "SK_ma_chest_heavy_05_d";
    public override Name = "Wrathful Batteplate";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "21-25"],        
        ["Fire Resistence", "9-11"],        
        ["Cold Resistence", "9-11"],        
        ["Poison Resistence", "9-11"],        
        ["Energy Resistence", "9-11"],        
    ]);

    public override generateAttrs() {
        this.setArmor(21,25);
        this.setFireResistence(9,11);
        this.setColdResistence(9,11);
        this.setPoisonResistence(9,11);
        this.setEnergyResistence(9,11);
    }
}

Items.AddBaseItem(["sk_ma_meta_tal_nrw_mage_dress_01_a", "ArcaneChest"], ArcaneChest);
Items.AddBaseItem(["sk_ma_chest_deathknight_02_c", "ArmorOfRelentlessSorrow"], ArmorOfRelentlessSorrow);
Items.AddBaseItem(["SK_ma_chest_heavy_plated_b", "ArmoredDarkPlateChest"], ArmoredDarkPlateChest);
Items.AddBaseItem(["SK_chest_knight_01_d", "ArmoredFullPlateChest"], ArmoredFullPlateChest);
Items.AddBaseItem(["SK_chest_knight_01_b", "ArmoredKnightChest"], ArmoredKnightChest);
Items.AddBaseItem(["SK_chest_knight_02_a", "KnightChest"], KnightChest);
Items.AddBaseItem(["SK_chest_knight_01_c_", "ArmoredRoyalGuardChest"], ArmoredRoyalGuardChest);
Items.AddBaseItem(["SK_chest_knight_01_a", "ArmoredSacredChest"], ArmoredSacredChest);
Items.AddBaseItem(["SK_ma_metal_tal_nrw_barbar_chest_05_d", "BarbarianChest"], BarbarianChest);
Items.AddBaseItem(["SK_ma_chest_heavy_03_c", "BarbaricScaleArmor"], BarbaricScaleArmor);
Items.AddBaseItem(["SK_ma_medieval_chest_citizen_01_a", "BardVest"], BardVest);
Items.AddBaseItem(["SK_ma_chest_heavy_05_b", "BattleplateChest"], BattleplateChest);
Items.AddBaseItem(["SK_ma_metal_tal_nrw_barbar_chest_01_b_0", "BerserkerChest"], BerserkerChest);
Items.AddBaseItem(["SK_ma_chest_heavy_04_b", "ChampionChestplate"], ChampionChestplate);
Items.AddBaseItem(["sk_ma_chest_darkknight_01_c", "ChampionChestplate"], ChestplateOfEndingWarlords);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_dress_a", "CommonCultistMetalChest"], CommonCultistMetalChest);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_02_a", "CommonVillagerChest"], CommonVillagerChest);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_03_c", "CommonVillagerProtectorChest"], CommonVillagerProtectorChest);
Items.AddBaseItem(["SK_chest_soldier_01_a", "CommonWhiteRuggedLeatherChest"], CommonWhiteRuggedLeatherChest);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_02_b", "CommonWorkerChest"], CommonWorkerChest);
Items.AddBaseItem(["SK_chest_north_02_a_fur", "ConquerorsMailChest"], ConquerorsMailChest);
Items.AddBaseItem(["sk_ma_chest_deathknight_02_d", "CuirassOfCursedComrades"], CuirassOfCursedComrades);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_dress_e", "CultistGarment"], CultistGarment);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_dress_b", "CultistRobe"], CultistRobe);
Items.AddBaseItem(["sk_ma_chest_darkknight_01_b", "DarkKinghtChest"], DarkKinghtChest);
Items.AddBaseItem(["SK_ma_chest_heavy_plated_a", "DarkPlateChest"], DarkPlateChest);
Items.AddBaseItem(["SK_chest_north_02_b", "DefenderArmor"], DefenderArmor);
Items.AddBaseItem(["sk_ma_meta_tal_nrw_mage_dress_01_c", "DefenderOfBlightChest"], DefenderOfBlightChest);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_rogue_01_b", "DragonhideLeatherChest"], DragonhideLeatherChest);
Items.AddBaseItem(["SK_ma_druid_set_01_b", "DruidLeatherRobe"], DruidLeatherRobe);
Items.AddBaseItem(["SK_ma_druid_set_02_c", "DruidWinterGarments"], DruidWinterGarments);
Items.AddBaseItem(["sk_ma_chest_deathknight_02_a", "EngravedArmor"], EngravedArmor);
Items.AddBaseItem(["SK_ma_medieval_chest_citizen_02_c", "FancierCommonerChest"], FancierCommonerChest);
Items.AddBaseItem(["SK_ma_medieval_chest_citizen_02_b", "FancyCommonerChest"], FancyCommonerChest);
Items.AddBaseItem(["SK_chest_soldier_01_c_", "FancyWhiteRuggedLeatherChest"], FancyWhiteRuggedLeatherChest);
Items.AddBaseItem(["SK_chest_north_02_a", "FighterArmor"], FighterArmor);
Items.AddBaseItem(["sk_ma_meta_tal_nrw_mage_dress_01_a_bags", "GranArcaneVest"], GranArcaneVest);
Items.AddBaseItem(["sk_chest_merc_02_b", "GreatleatherChest"], GreatleatherChest);
Items.AddBaseItem(["SK_ma_chest_heavy_05_c", "GuardOfTheLightArmor"], GuardOfTheLightArmor);
Items.AddBaseItem(["SK_chest_knight_02_b", "GuardianArmor"], GuardianArmor);
Items.AddBaseItem(["SK_chest_north_01_a", "HeavyHideVestArmor"], HeavyHideVestArmor);
Items.AddBaseItem(["SK_chest_north_02_d", "HeavyNorthChest"], HeavyNorthChest);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_elv_chest_01_a", "HideChestOfShadowWhispers"], HideChestOfShadowWhispers);
Items.AddBaseItem(["SK_chest_north_01_b", "HideVestArmor"], HideVestArmor);
Items.AddBaseItem(["SK_ma_druid_set_01_a", "InitiatedRobe"], InitiatedRobe);
Items.AddBaseItem(["sk_chest_merc_02_d", "IvoryArmor"], IvoryArmor);
Items.AddBaseItem(["SK_ma_medieval_chest_citizen_02_a", "JokerChest"], JokerChest);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_rogue_01_a", "LeatherChest"], LeatherChest);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_01_a", "LeatherGarments"], LeatherGarments);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_dress_d", "MaliciousChest"], MaliciousChest);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_dress_knight_02_001", "MasterOfDeath"], MasterOfDeath);
Items.AddBaseItem(["sk_chest_merc_02_b_cloak", "MercenaryChest"], MercenaryChest);
Items.AddBaseItem(["SK_ma_druid_set_02_a", "NatureProtectorRobe"], NatureProtectorRobe);
Items.AddBaseItem(["SK_chest_north_02_e", "NorthChest"], NorthChest);
Items.AddBaseItem(["SK_ma_chest_heavy_04_a", "OminousChestplate"], OminousChestplate);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_mage_dress_02_b", "PactOfTheMage"], PactOfTheMage);
Items.AddBaseItem(["sk_ma_chest_deathknight_02_b", "PromiseOfVengeanceArmor"], PromiseOfVengeanceArmor);
Items.AddBaseItem(["SK_chest_soldier_02_a", "ProtectorArmor"], ProtectorArmor);
Items.AddBaseItem(["SK_chest_merc_02_a", "ProtectorOfPridesFall"], ProtectorOfPridesFall);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_03_a", "RecruitChest"], RecruitChest);
Items.AddBaseItem(["SK_chest_north_01_c", "ReiforcedHideVestArmor"], ReiforcedHideVestArmor);
Items.AddBaseItem(["SK_chest_north_02_c", "ReinforcedDefenderArmor"], ReinforcedDefenderArmor);
Items.AddBaseItem(["SK_ma_chest_heavy_03_a2", "ReinforcedScaleArmor"], ReinforcedScaleArmor);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_02_c", "ReinforcedVillagerProtectorChest"], ReinforcedVillagerProtectorChest);
Items.AddBaseItem(["SK_chest_soldier_02_c", "ReinforcedWarriorArmor"], ReinforcedWarriorArmor);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_dress_c_seperate_005", "RobesOfCataclysms"], RobesOfCataclysms);
Items.AddBaseItem(["sk_ma_meta_tal_nrw_mage_dress_01_b_tome", "RobesOfEndingVisions"], RobesOfEndingVisions);
Items.AddBaseItem(["SK_ma_druid_set_01_c", "RobesOfNature"], RobesOfNature);
Items.AddBaseItem(["SK_chest_soldier_01_c_cloak", "RoyalRuggedLeatherChest"], RoyalRuggedLeatherChest);
Items.AddBaseItem(["SK_chest_soldier_01_d", "RuggedLeatherChest"], RuggedLeatherChest);
Items.AddBaseItem(["SK_ma_chest_heavy_03_a", "ScaleArmor"], ScaleArmor);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_01_b", "Sharper"], Sharper);
Items.AddBaseItem(["SK_chest_merc_01_a", "SlenderChest"], SlenderChest);
Items.AddBaseItem(["SK_chest_knight_02_c", "SoldierChest"], SoldierChest);
Items.AddBaseItem(["SK_chest_soldier_01_e", "SoldierRuggedLeatherChest"], SoldierRuggedLeatherChest);
Items.AddBaseItem(["SK_ma_druid_set_02_d", "SpiritHideBreastplate"], SpiritHideBreastplate);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_elv_chest_01_c", "StealthyArmor"], StealthyArmor);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_mage_dress_02_a", "TributeOfBlessedFortunes"], TributeOfBlessedFortunes);
Items.AddBaseItem(["SK_chest_merc_02_c", "TroublemakerChest"], TroublemakerChest);
Items.AddBaseItem(["SK_ma_druid_set_02_b", "TunicOfLife"], TunicOfLife);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_mage_dress_02_c_hood", "TunicOfSacredJustice"], TunicOfSacredJustice);
Items.AddBaseItem(["sk_ma_meta_tal_nrw_mage_dress_01_b", "TunicOfSouls"], TunicOfSouls);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_dress_knight_01_001", "UnholyChest"], UnholyChest);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_mage_dress_02_b_bags", "VestOfDivineHope"], VestOfDivineHope);
Items.AddBaseItem(["SK_ma_medieval_chest_villager_03_b", "VillagerProtectorChest"], VillagerProtectorChest);
Items.AddBaseItem(["SK_chest_soldier_02_b", "WarriorArmor"], WarriorArmor);
Items.AddBaseItem(["SK_chest_soldier_01_b", "WhiteRuggedLeatherChest"], WhiteRuggedLeatherChest);
Items.AddBaseItem(["SK_ma_metal_tal_nrw_barbar_chest_01_a", "WildChest"], WildChest);
Items.AddBaseItem(["sk_ma_meta_tal_nrw_mage_dress_02_c", "WrapsOfBrokenMight"], WrapsOfBrokenMight);
Items.AddBaseItem(["SK_ma_chest_heavy_05_d", "WrathfulBatteplate"], WrathfulBatteplate);
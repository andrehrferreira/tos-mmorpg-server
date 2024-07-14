import { 
    Equipament, EquipamentTier, 
    EquipamentType, EquipmentWeight, 
    Items 
} from "../../items";

export class AgilityBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_boot_01_b";
    public override Name = "Agility Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 400;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class ApprenticeBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_02_a";
    public override Name = "Apprentice Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 400;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    } 
}

export class ArmoredDarkPlateBoots extends Equipament {
    public override Namespace = "sk_ma_shoe_heavy_01_e";
    public override Name = "Armored Dark Plate Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class ArmoredRoyalGuardBoots extends Equipament {
    public override Namespace = "SK_ma_shoe_heavy_04_c";
    public override Name = "Armored Royal Guard Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-4"],        
        ["Attributes", "2-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class BardBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_elv_shoes_02";
    public override Name = "Bard Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class BasicBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_03_a";
    public override Name = "Basic Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 60;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "1"],        
        ["Attributes", "1"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class BattleplateBoots extends Equipament {
    public override Namespace = "SK_ma_shoe_heavy_03_a";
    public override Name = "Battleplate Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-4"],        
        ["Attributes", "2-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class BootsOfCursedComrades extends Equipament {
    public override Namespace = "sk_ma_shoe_heavy_01_d";
    public override Name = "Boots Of Cursed Comrades";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class BootsOfEndingVisions extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_boot_03_a";
    public override Name = "Boots Of Ending Visions";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "2-4"],        
        ["Attributes", "2-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class BootsOfEndingWarlords extends Equipament {
    public override Namespace = "SK_ma_dragon_boots_01_a";
    public override Name = "Boots Of Ending Warlords";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class BootsOfRecognition extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_boots_a";
    public override Name = "Boots Of Recognition";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class BootsOfRelentlessSorrow extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_barbar_boots_heavy_a";
    public override Name = "Boots Of Relentless Sorrow";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 10;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class ChampionBoots extends Equipament {
    public override Namespace = "SK_ma_shoe_heavy_04_d";
    public override Name = "Champion Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-4"],        
        ["Attributes", "2-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class CleverBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_boot_03_b";
    public override Name = "Clever Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "2-4"],        
        ["Attributes", "2-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class ComfortableBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_01_a";
    public override Name = "Comfortable Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "2-4"],        
        ["Attributes", "2-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class CommonBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_boot_02";
    public override Name = "Common Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 60;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1"],        
        ["Attributes", "1"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class CommonShoes extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_04_b";
    public override Name = "Common Shoes";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 60;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],  
        ["Weight Type", "Light"],              
        ["Armor", "1"],        
        ["Attributes", "1"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class ConquerorsMailBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_boot_01_d";
    public override Name = "Conqueror's Mail Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 400;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Medium"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class CozyBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_02_b";
    public override Name = "Cozy Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 3;
    public override GoldCost = 200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class DarkPlateBoots extends Equipament {
    public override Namespace = "sk_ma_shoe_heavy_01_a";
    public override Name = "Dark Plate Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;
    
    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class DefenderOfBlightBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_boots_01_c";
    public override Name = "Defender Of Blight Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class DragonhideLeatherBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_shoes_01_a";
    public override Name = "Dragonhide Leather Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class FancyBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_01_c";
    public override Name = "Fancy Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 400;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class FurBoots extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_shoe_01_d";
    public override Name = "Fur Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 60;
    public override MaxAttrs = 1;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1"],        
        ["Attributes", "1"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class FuzzyBoot extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_boots_02";
    public override Name = "Fuzzy Boot";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class GranArcaneBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_shoes_01_c";
    public override Name = "Gran Arcane Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-5"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class GuardOfTheLightBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_boot_04";
    public override Name = "Guard Of The Light Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class GuardianBoots extends Equipament {
    public override Namespace = "SK_ma_shoe_heavy_04_e";
    public override Name = "Guardian Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 400;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "1-3"],        
        ["Attributes", "2-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class HideBootsOfShadowWhispers extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_shoes_01_b";
    public override Name = "Hide Boots Of Shadow Whispers";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;
    
    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class HighBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_shoe_01_a";
    public override Name = "High Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;
    
    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class IvoryBoots extends Equipament {
    public override Namespace = "sk_ma_shoe_heavy_01_f";
    public override Name = "Ivory Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 3;
    public override GoldCost = 400;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "1-3"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class LeatherBoots extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_shoe_01_b";
    public override Name = "Leather Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 60;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1"],        
        ["Attributes", "1"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class MercenaryBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_shoes_01_d";
    public override Name = "Mercenary Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class MobilityBoots extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_shoe_01_c";
    public override Name = "Mobility Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class MountainBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_boots_b";
    public override Name = "Mountain Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class NatureProtectorBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_boots_03";
    public override Name = "Nature Protector Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5;
    
    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Medium"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class NoviceBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_boots_01_a";
    public override Name = "Novice Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class PoshBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_01_b";
    public override Name = "Posh Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 400;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class PromiseOfVengeanceBoots extends Equipament {
    public override Namespace = "SK_ma_dragon_boots_01_b";
    public override Name = "Promise Of Vengeance Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 2500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class ReinforcedBoot extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_shoe_01_b";
    public override Name = "Reinforced Boot";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 2;
    public override GoldCost = 200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class RidingBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_boot_01_a";
    public override Name = "Riding Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;
    
    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class SlipShoes extends Equipament {
    public override Namespace = "SK_ma_medieval_shoe_04_a";
    public override Name = "Slip Shoes";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 60;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "1"],        
        ["Attributes", "1"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class SoldierBoots extends Equipament {
    public override Namespace = "SK_ma_shoe_heavy_04_b";
    public override Name = "Soldier Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 1;
    public override GoldCost = 400;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class SpeedyBoots extends Equipament {
    public override Namespace = "SK_ma_medieval_boot_01_c";
    public override Name = "Speedy Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 1;
    public override GoldCost = 400;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class SpikedBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_barbar_boots_heavy_c";
    public override Name = "Spiked Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class SturdyBoots extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_shoe_01_c";
    public override Name = "Sturdy Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "1-2"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class UnholyBoots extends Equipament {
    public override Namespace = "sk_ma_shoe_heavy_01_b";
    public override Name = "Unholy Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1500;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class WrathfulBoots extends Equipament {
    public override Namespace = "SK_ma_shoe_heavy_04_a";
    public override Name = "Wrathful Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 400;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

Items.AddBaseItem(["SK_ma_medieval_boot_01_b", "AgilityBoots"], AgilityBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_02_a", "ApprenticeBoots"], ApprenticeBoots);
Items.AddBaseItem(["sk_ma_shoe_heavy_01_e", "ArmoredDarkPlateBoots"], ArmoredDarkPlateBoots);
Items.AddBaseItem(["SK_ma_shoe_heavy_04_c", "ArmoredRoyalGuardBoots"], ArmoredRoyalGuardBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_elv_shoes_02", "BardBoots"], BardBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_03_a", "BasicBoots"], BasicBoots);
Items.AddBaseItem(["SK_ma_shoe_heavy_03_a", "BattleplateBoots"], BattleplateBoots);
Items.AddBaseItem(["sk_ma_shoe_heavy_01_d", "BootsOfCursedComrades"], BootsOfCursedComrades);
Items.AddBaseItem(["SK_ma_medieval_armour_boot_03_a", "BootsOfEndingVisions"], BootsOfEndingVisions);
Items.AddBaseItem(["SK_ma_dragon_boots_01_a", "BootsOfEndingWarlords"], BootsOfEndingWarlords);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_boots_a", "BootsOfRecognition"], BootsOfRecognition);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_barbar_boots_heavy_a", "BootsOfRelentlessSorrow"], BootsOfRelentlessSorrow);
Items.AddBaseItem(["SK_ma_shoe_heavy_04_d", "ChampionBoots"], ChampionBoots);
Items.AddBaseItem(["SK_ma_medieval_armour_boot_03_b", "CleverBoots"], CleverBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_01_a", "ComfortableBoots"], ComfortableBoots);
Items.AddBaseItem(["SK_ma_medieval_armour_boot_02", "CommonBoots"], CommonBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_04_b", "CommonShoes"], CommonShoes);
Items.AddBaseItem(["SK_ma_medieval_boot_01_d", "ConquerorsMailBoots"], ConquerorsMailBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_02_b", "CozyBoots"], CozyBoots);
Items.AddBaseItem(["sk_ma_shoe_heavy_01_a", "DarkPlateBoots"], DarkPlateBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_boots_01_c", "DefenderOfBlightBoots"], DefenderOfBlightBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_shoes_01_a", "DragonhideLeatherBoots"], DragonhideLeatherBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_01_c", "FancyBoots"], FancyBoots);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_shoe_01_d", "FurBoots"], FurBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_boots_02", "FuzzyBoot"], FuzzyBoot);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_shoes_01_c", "GranArcaneBoots"], GranArcaneBoots);
Items.AddBaseItem(["SK_ma_medieval_armour_boot_04", "GuardOfTheLightBoots"], GuardOfTheLightBoots);
Items.AddBaseItem(["SK_ma_shoe_heavy_04_e", "GuardianBoots"], GuardianBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_shoes_01_b", "HideBootsOfShadowWhispers"], HideBootsOfShadowWhispers);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_shoe_01_a", "HighBoots"], HighBoots);
Items.AddBaseItem(["sk_ma_shoe_heavy_01_f", "IvoryBoots"], IvoryBoots);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_shoe_01_b", "LeatherBoots"], LeatherBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_shoes_01_d", "MercenaryBoots"], MercenaryBoots);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_shoe_01_c", "MobilityBoots"], MobilityBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_boots_b", "MountainBoots"], MountainBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_boots_03", "NatureProtectorBoots"], NatureProtectorBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_boots_01_a", "NoviceBoots"], NoviceBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_01_b", "PoshBoots"], PoshBoots);
Items.AddBaseItem(["SK_ma_dragon_boots_01_b", "PromiseOfVengeanceBoots"], PromiseOfVengeanceBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_shoe_01_b", "ReinforcedBoot"], ReinforcedBoot);
Items.AddBaseItem(["SK_ma_medieval_boot_01_a", "RidingBoots"], RidingBoots);
Items.AddBaseItem(["SK_ma_medieval_shoe_04_a", "SlipShoes"], SlipShoes);
Items.AddBaseItem(["SK_ma_shoe_heavy_04_b", "SoldierBoots"], SoldierBoots);
Items.AddBaseItem(["SK_ma_medieval_boot_01_c", "SpeedyBoots"], SpeedyBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_barbar_boots_heavy_c", "SpikedBoots"], SpikedBoots);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_shoe_01_c", "SturdyBoots"], SturdyBoots);
Items.AddBaseItem(["sk_ma_shoe_heavy_01_b", "UnholyBoots"], UnholyBoots);
Items.AddBaseItem(["SK_ma_shoe_heavy_04_a", "WrathfulBoots"], WrathfulBoots);

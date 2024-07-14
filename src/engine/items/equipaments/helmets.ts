import { 
    EquipamentType, Items, Equipament, 
    EquipamentTier, EquipmentWeight, ItemRarity 
} from "../../items";

export class AgileVillagerHood extends Equipament {
    public override Namespace = "SK_ma_medieval_hat_03";
    public override Name = "Agile Villager Hood";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class ApprenticeHat extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrwhat_caster_01_b";
    public override Name = "Apprentice Hat";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class ArcaneClothHood extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_hood_01_a";
    public override Name = "Arcane Cloth Hood";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 820;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;
    
    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "1"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class ArmoredDarkPlateHelm extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_barbar_helm_03_a";
    public override Name = "Armored Dark Plate Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 4000;
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

export class ArmoredRoyalGuardHelm extends Equipament {
    public override Namespace = "SK_ma_heavy_helm_paladin_a";
    public override Name = "Armored Royal Guard Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "3-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,4);
    }
}

export class BanditMask extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_hood_mask";
    public override Name = "Bandit Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1;
    
    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class BarbarianHelm extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_barbar_helm_03_e";
    public override Name = "Barbarian Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
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

export class BattleplateHelm extends Equipament {
    public override Namespace = "SK_ma_helm_03_d";
    public override Name = "Battleplate Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class ChampionHelm extends Equipament {
    public override Namespace = "SK_helmet_crusader_01_b";
    public override Name = "Champion Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class CircletOfSacredJustice extends Equipament {
    public override Namespace = "sk_ma_headband_01_a";
    public override Name = "Circlet Of Sacred Justice";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Light"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class CombatantHelm extends Equipament {
    public override Namespace = "SK_helmet_soldier_04_b";
    public override Name = "Combatant Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class ConquerorsMailHelm extends Equipament {
    public override Namespace = "SK_helmet_north_02_b";
    public override Name = "Conqueror's Mail Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,4);
    }
}

export class CooksVillagerHood extends Equipament {
    public override Namespace = "SK_fe_medieval_hat_01";
    public override Name = "Cook's Villager Hood";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 1;
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

export class CrownOfCursedSouls extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_hood_crown";
    public override Name = "Crown Of Cursed Souls";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;
    
    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "2-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class CultistMask extends Equipament {
    public override Namespace = "SK_raven_02_mask";
    public override Name = "Cultist Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
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

export class DarkPlateHelm extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_helm_heavy_01_a";
    public override Name = "Dark Plate Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 1000;
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

export class DefenderHelm extends Equipament {
    public override Namespace = "SK_helmet_knight_01_a";
    public override Name = "Defender Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 300;
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

export class DefenderOfBlightHelm extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_helm_base";
    public override Name = "Defender Of Blight Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
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

export class DragonhideLeatherHelm extends Equipament {
    public override Namespace = "SK_ma_helm_03_a";
    public override Name = "Dragonhide Leather Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 2000;
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

export class DruidLeatherHelm extends Equipament {
    public override Namespace = "sk_ma_druid_helm_02_a";
    public override Name = "Druid Leather Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;
    
    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,4);
    }
}

export class EbonHelm extends Equipament {
    public override Namespace = "SK_ma_helm_03_b";
    public override Name = "Ebon Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 2000;
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

export class EngravedHelm extends Equipament {
    public override Namespace = "SK_ma_helm_spiky_04_b";
    public override Name = "Engraved Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 10000;
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

export class FancyHat extends Equipament {
    public override Namespace = "SK_fe_medieval_hat_04";
    public override Name = "Fancy Hat";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 1;
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

export class FighterHelm extends Equipament {
    public override Namespace = "SK_helmet_knight_01_b";
    public override Name = "Fighter Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 20;
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

export class GranArcaneHelm extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_helm_elegant_a";
    public override Name = "Gran Arcane Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 10000;
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

export class GreatConquerorsMailHelm extends Equipament {
    public override Namespace = "SK_helmet_north_02_a";
    public override Name = "Great Conqueror's Mail Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Medium"],             
        ["Armor", "3-4"],        
        ["Attributes", "1-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,4);
    }
}

export class GreatplateHelm extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_helm_heavy_01_f";
    public override Name = "Greatplate Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 1000;
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

export class GuardOfTheLightHelm extends Equipament {
    public override Namespace = "SK_ma_helm_03_c";
    public override Name = "Guard Of The Light Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 2000;
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

export class GuardianHelm extends Equipament {
    public override Namespace = "SK_helmet_soldier_05_b";
    public override Name = "Guardian Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 100;
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

export class HelmOfDivineHope extends Equipament {
    public override Namespace = "SK_helmet_soldier_05_b";
    public override Name = "Helm Of Divine Hope";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
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

export class HelmOfTheNatureSpirits extends Equipament {
    public override Namespace = "sk_ma_druid_helm_01_hair";
    public override Name = "Helm Of The Nature Spirits";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
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

export class HelmetOfCursedComrades extends Equipament {
    public override Namespace = "SK_ma_helm_darkknight_02_c";
    public override Name = "Helmet Of Cursed Comrades";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 5000;
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

export class HelmetOfEndingVisions extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_helm_antlers";
    public override Name = "Helmet Of Ending Visions";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 5000;
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

export class HelmetOfEndingWarlords extends Equipament {
    public override Namespace = "SK_ma_helm_spiky_04";
    public override Name = "Helmet Of Ending Warlords";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 5000;
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

export class HelmetOfRelentlessSorrow extends Equipament {
    public override Namespace = "SK_ma_helm_darkknight_02_b";
    public override Name = "Helmet Of Relentless Sorrow";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 5000;
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

export class HideMaskOfShadowWhispers extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_hood";
    public override Name = "Hide Mask Of Shadow Whispers";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 10000;
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

export class Hood extends Equipament {
    public override Namespace = "SK_fe_medieval_hat_03";
    public override Name = "Hood";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 1;
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

export class HoodOfDivineHope extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_caster_hood_hair_01";
    public override Name = "Hood Of Divine Hope";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,4);
    }
}

export class HoodOfHallowedDamnation extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_hood_assassin";
    public override Name = "Hood Of Hallowed Damnation";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 1000;
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

export class HoodOfOminousTrials extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_cloak_hood_up";
    public override Name = "Hood Of Ominous Trials";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3;
    
    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "2-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class InitiatedCrown extends Equipament {
    public override Namespace = "sk_ma_druid_helm_02_b";
    public override Name = "Initiated Crown";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 1;
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

export class IronGreathelm extends Equipament {
    public override Namespace = "SK_helmet_knight_01_c";
    public override Name = "Iron Greathelm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 20;
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

export class IronHeadguard extends Equipament {
    public override Namespace = "SK_helmet_soldier_01_a";
    public override Name = "Iron Headguard";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 20;
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

export class IvoryHelm extends Equipament {
    public override Namespace = "SK_helmet_knight_01_b_hood";
    public override Name = "Ivory Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 3;
    public override GoldCost = 20;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2;
    
    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class LeatherHelm extends Equipament {
    public override Namespace = "SK_ma_medieval_hat_02";
    public override Name = "Leather Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
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

export class MagisterHat extends Equipament {
    public override Namespace = "sk_ma_meta_tal_nrwhat_caster_01_a";
    public override Name = "Magister Hat";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 3;
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

export class MaliciousMask extends Equipament {
    public override Namespace = "SK_ma_mask_wood_a";
    public override Name = "Malicious Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Light"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class MaskOfCataclysms extends Equipament {
    public override Namespace = "SK_ma_mask_wood_b";
    public override Name = "Mask Of Cataclysms";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Light"],             
        ["Armor", "1-2"],        
        ["Attributes", "1"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class MaskOfNature extends Equipament {
    public override Namespace = "SK_ma_mask_wood_b_feather";
    public override Name = "Mask Of Nature";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4;
    
    public override CraftingInfo = new Map([
        ["Tier", "4"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-5"],        
        ["Attributes", "3-4"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class MercenaryHelm extends Equipament {
    public override Namespace = "SK_ma_helm_darkknight_01_a";
    public override Name = "Mercenary Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 2000;
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

export class MilitaryIronGreathelm extends Equipament {
    public override Namespace = "SK_helmet_knight_02_a";
    public override Name = "Military Iron Greathelm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 320;
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

export class NatureProtectorHead extends Equipament {
    public override Namespace = "sk_ma_druid_helm_01_b";
    public override Name = "Nature Protector Head";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 5000;
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

export class PlatemailHelm extends Equipament {
    public override Namespace = "SK_helmet_soldier_04_a";
    public override Name = "Platemail Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class PromiseOfVengeanceHelm extends Equipament {
    public override Namespace = "SK_ma_helm_darkknight_02_a";
    public override Name = "Promise Of Vengeance Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 10000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "5-10"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,10);
    }
}

export class ProtectorHelm extends Equipament {
    public override Namespace = "SK_helmet_crusader_01_a";
    public override Name = "Protector Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 100;
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

export class RascalHood extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_hood_trim";
    public override Name = "Rascal Hood";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 100;
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

export class RecruitHelm extends Equipament {
    public override Namespace = "SK_helmet_soldier_03_a";
    public override Name = "Recruit Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override CraftingInfo = new Map([
        ["Tier", "0"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class RecruitsHelm extends Equipament {
    public override Namespace = "SK_helmet_soldier_05_a";
    public override Name = "Recruit's Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],   
        ["Weight Type", "Medium"],             
        ["Armor", "1"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class RoaringMailHelm extends Equipament {
    public override Namespace = "SK_helmet_knight_01_a_hood";
    public override Name = "Roaring Mail Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],   
        ["Weight Type", "Heavy"],             
        ["Armor", "2-3"],        
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class Scarf extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_scarf_single";
    public override Name = "Scarf";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 1;
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

export class ShamanicMask extends Equipament {
    public override Namespace = "SK_ma_mask_wood_c";
    public override Name = "Shamanic Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-4"],        
        ["Attributes", "1-3"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,4);
    }
}

export class SoldierHelm extends Equipament {
    public override Namespace = "SK_helmet_soldier_02_a";
    public override Name = "Soldier Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 100;
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

export class SpiritHideCrown extends Equipament {
    public override Namespace = "sk_ma_druid_helm_03_";
    public override Name = "Spirit Hide Crown";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 100;
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

export class StrawHat extends Equipament {
    public override Namespace = "SK_fe_medieval_hat_05";
    public override Name = "Straw Hat";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 1;
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

export class TellsHat extends Equipament {
    public override Namespace = "SK_fe_medieval_hat_02";
    public override Name = "Tell's Hat";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
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

export class TrooperHelm extends Equipament {
    public override Namespace = "SK_helmet_north_01_b";
    public override Name = "Trooper Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 20;
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

export class TroublemakerMask extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_scarf_mask";
    public override Name = "Troublemaker Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 20;
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

export class UnholyMask extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_skullmask_01";
    public override Name = "Unholy Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "5-8"],        
        ["Attributes", "4"]
    ]);

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class VillagerHood extends Equipament {
    public override Namespace = "SK_helmet_merc_01_a";
    public override Name = "Villager Hood";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 20;
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

export class WarriorHelm extends Equipament {
    public override Namespace = "SK_helmet_crusader_02_a";
    public override Name = "Warrior Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 100;
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

export class WrathfulHelm extends Equipament {
    public override Namespace = "SK_helmet_north_01_a";
    public override Name = "Wrathful Helm";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 800;
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

export class RatoMask extends Equipament {
    public override Namespace = "RatoMask";
    public override Name = "Rato Borrachudo Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 5;
    public override GoldCost = 1;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique; 

    public override CraftingInfo = new Map([
        ["Tier", "5"],   
        ["Weight Type", "Light"],             
        ["Armor", "3-5"],        
        ["Attributes", "2"]
    ]);

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

Items.AddBaseItem(["SK_ma_medieval_hat_03", "AgileVillagerHood"], AgileVillagerHood);
Items.AddBaseItem(["sk_ma_meta_tal_nrwhat_caster_01_b", "ApprenticeHat"], ApprenticeHat);
Items.AddBaseItem(["SK_ma_tal_nrw_hood_01_a", "ArcaneClothHood"], ArcaneClothHood);
Items.AddBaseItem(["SK_ma_tal_nrw_barbar_helm_03_a", "ArmoredDarkPlateHelm"], ArmoredDarkPlateHelm);
Items.AddBaseItem(["SK_ma_heavy_helm_paladin_a", "ArmoredRoyalGuardHelm"], ArmoredRoyalGuardHelm);
Items.AddBaseItem(["SK_ma_tal_nrw_hood_mask", "BanditMask"], BanditMask);
Items.AddBaseItem(["SK_ma_tal_nrw_barbar_helm_03_e", "BarbarianHelm"], BarbarianHelm);
Items.AddBaseItem(["SK_ma_helm_03_d", "BattleplateHelm"], BattleplateHelm);
Items.AddBaseItem(["SK_helmet_crusader_01_b", "ChampionHelm"], ChampionHelm);
Items.AddBaseItem(["sk_ma_headband_01_a", "CircletOfSacredJustice"], CircletOfSacredJustice);
Items.AddBaseItem(["SK_helmet_soldier_04_b", "CombatantHelm"], CombatantHelm);
Items.AddBaseItem(["SK_helmet_north_02_b", "ConquerorsMailHelm"], ConquerorsMailHelm);
Items.AddBaseItem(["SK_fe_medieval_hat_01", "CooksVillagerHood"], CooksVillagerHood);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_hood_crown", "CrownOfCursedSouls"], CrownOfCursedSouls);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_hood_crown", "CrownOfCursedSouls"], CrownOfCursedSouls);
Items.AddBaseItem(["SK_raven_02_mask", "CultistMask"], CultistMask);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_helm_heavy_01_a", "DarkPlateHelm"], DarkPlateHelm);
Items.AddBaseItem(["SK_helmet_knight_01_a", "DefenderHelm"], DefenderHelm);
Items.AddBaseItem(["SK_ma_tal_nrw_helm_base", "DefenderOfBlightHelm"], DefenderOfBlightHelm);
Items.AddBaseItem(["SK_ma_helm_03_a", "DragonhideLeatherHelm"], DragonhideLeatherHelm);
Items.AddBaseItem(["sk_ma_druid_helm_02_a", "DruidLeatherHelm"], DruidLeatherHelm);
Items.AddBaseItem(["SK_ma_helm_03_b", "EbonHelm"], EbonHelm);
Items.AddBaseItem(["SK_ma_helm_spiky_04_b", "EngravedHelm"], EngravedHelm);
Items.AddBaseItem(["SK_fe_medieval_hat_04", "FancyHat"], FancyHat);
Items.AddBaseItem(["SK_helmet_knight_01_b", "FighterHelm"], FighterHelm);
Items.AddBaseItem(["SK_ma_tal_nrw_helm_elegant_a", "GranArcaneHelm"], GranArcaneHelm);
Items.AddBaseItem(["SK_helmet_north_02_a", "GreatConquerorsMailHelm"], GreatConquerorsMailHelm);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_helm_heavy_01_f", "GreatplateHelm"], GreatplateHelm);
Items.AddBaseItem(["SK_ma_helm_03_c", "GuardOfTheLightHelm"], GuardOfTheLightHelm);
Items.AddBaseItem(["SK_helmet_soldier_05_b", "GuardianHelm"], GuardianHelm);
Items.AddBaseItem(["SK_helmet_soldier_05_b", "HelmOfDivineHope"], HelmOfDivineHope);
Items.AddBaseItem(["sk_ma_druid_helm_01_hair", "HelmOfTheNatureSpirits"], HelmOfTheNatureSpirits);
Items.AddBaseItem(["SK_ma_helm_darkknight_02_c", "HelmetOfCursedComrades"], HelmetOfCursedComrades);
Items.AddBaseItem(["SK_ma_tal_nrw_helm_antlers", "HelmetOfEndingVisions"], HelmetOfEndingVisions);
Items.AddBaseItem(["SK_ma_helm_spiky_04", "HelmetOfEndingWarlords"], HelmetOfEndingWarlords);
Items.AddBaseItem(["SK_ma_helm_darkknight_02_b", "HelmetOfRelentlessSorrow"], HelmetOfRelentlessSorrow);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_hood", "HideMaskOfShadowWhispers"], HideMaskOfShadowWhispers);
Items.AddBaseItem(["SK_fe_medieval_hat_03", "Hood"], Hood);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_caster_hood_hair_01", "HoodOfDivineHope"], HoodOfDivineHope);
Items.AddBaseItem(["SK_ma_tal_nrw_hood_assassin", "HoodOfHallowedDamnation"], HoodOfHallowedDamnation);
Items.AddBaseItem(["SK_ma_tal_nrw_cloak_hood_up", "HoodOfOminousTrials"], HoodOfOminousTrials);
Items.AddBaseItem(["sk_ma_druid_helm_02_b", "InitiatedCrown"], InitiatedCrown);
Items.AddBaseItem(["SK_helmet_knight_01_c", "IronGreathelm"], IronGreathelm);
Items.AddBaseItem(["SK_helmet_soldier_01_a", "IronHeadguard"], IronHeadguard);
Items.AddBaseItem(["SK_helmet_knight_01_b_hood", "IvoryHelm"], IvoryHelm);
Items.AddBaseItem(["SK_ma_medieval_hat_02", "LeatherHelm"], LeatherHelm);
Items.AddBaseItem(["sk_ma_meta_tal_nrwhat_caster_01_a", "MagisterHat"], MagisterHat);
Items.AddBaseItem(["SK_ma_mask_wood_a", "MaliciousMask"], MaliciousMask);
Items.AddBaseItem(["SK_ma_mask_wood_b", "MaskOfCataclysms"], MaskOfCataclysms);
Items.AddBaseItem(["SK_ma_mask_wood_b_feather", "MaskOfNature"], MaskOfNature);
Items.AddBaseItem(["SK_ma_helm_darkknight_01_a", "MercenaryHelm"], MercenaryHelm);
Items.AddBaseItem(["SK_helmet_knight_02_a", "MilitaryIronGreathelm"], MilitaryIronGreathelm);
Items.AddBaseItem(["sk_ma_druid_helm_01_b", "NatureProtectorHead"], NatureProtectorHead);
Items.AddBaseItem(["SK_helmet_soldier_04_a", "PlatemailHelm"], PlatemailHelm);
Items.AddBaseItem(["SK_ma_helm_darkknight_02_a", "PromiseOfVengeanceHelm"], PromiseOfVengeanceHelm);
Items.AddBaseItem(["SK_helmet_crusader_01_a", "ProtectorHelm"], ProtectorHelm);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_hood_trim", "RascalHood"], RascalHood);
Items.AddBaseItem(["SK_helmet_soldier_03_a", "RecruitHelm"], RecruitHelm);
Items.AddBaseItem(["SK_helmet_soldier_05_a", "RecruitsHelm"], RecruitsHelm);
Items.AddBaseItem(["SK_helmet_knight_01_a_hood", "RoaringMailHelm"], RoaringMailHelm);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_scarf_single", "Scarf"], Scarf);
Items.AddBaseItem(["SK_ma_mask_wood_c", "ShamanicMask"], ShamanicMask);
Items.AddBaseItem(["SK_helmet_soldier_02_a", "SoldierHelm"], SoldierHelm);
Items.AddBaseItem(["sk_ma_druid_helm_03_", "SpiritHideCrown"], SpiritHideCrown);
Items.AddBaseItem(["SK_fe_medieval_hat_05", "StrawHat"], StrawHat);
Items.AddBaseItem(["SK_fe_medieval_hat_02", "TellsHat"], TellsHat);
Items.AddBaseItem(["SK_helmet_north_01_b", "TrooperHelm"], TrooperHelm);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_scarf_mask", "TroublemakerMask"], TroublemakerMask);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_skullmask_01", "UnholyMask"], UnholyMask);
Items.AddBaseItem(["SK_helmet_merc_01_a", "VillagerHood"], VillagerHood);
Items.AddBaseItem(["SK_helmet_crusader_02_a", "WarriorHelm"], WarriorHelm);
Items.AddBaseItem(["SK_helmet_north_01_a", "WrathfulHelm"], WrathfulHelm);
Items.AddBaseItem("RatoMask", RatoMask);


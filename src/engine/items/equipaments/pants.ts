import { Equipament, EquipamentType, EquipmentWeight, Items, EquipamentTier } from "../../items";

export class AprenticePants extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_caster_pants_03";
    public override Name = "Aprentice Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 2;
    public override GoldCost = 320;
    public override MaxAttrs = 2;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class ArcanePants extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_pants_02";
    public override Name = "Arcane Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 2;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class ArmoredRoyalGuardPants extends Equipament {
    public override Namespace = "SK_ma_pants_heavy_01_c";
    public override Name = "Armored Royal Guard Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class BardPants extends Equipament {
    public override Namespace = "SK_ma_medieval_pants_04";
    public override Name = "Bard Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class BattleplateLegs extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_05_a";
    public override Name = "Battleplate Legs";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class ChampionLegs extends Equipament {
    public override Namespace = "SK_ma_pants_heavy_01_b";
    public override Name = "Champion Legs";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class ChampionPants extends Equipament {
    public override Namespace = "SK_ma_pants_02";
    public override Name = "Champion Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class ComfortablePants extends Equipament {
    public override Namespace = "SK_ma_pants_01";
    public override Name = "Comfortable Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class DarkPlatePants extends Equipament {
    public override Namespace = "SK_ma_pants_02";
    public override Name = "Dark Plate Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 4;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class DragonhideLeatherLegs extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_pants_01";
    public override Name = "Dragonhide Leather Legs";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 4;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class GranArcanePants extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_pants_01_001";
    public override Name = "Gran Arcane Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 4;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class GreatleatherPants extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_musc_pants_01";
    public override Name = "Greatleather Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 4;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class GuardianLegs extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_04_b";
    public override Name = "Guardian Legs";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class HeavyDutyPants extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_02";
    public override Name = "Heavy Duty Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    
    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class HidePantsOfShadowWhispers extends Equipament {
    public override Namespace = "SK_ma_medieval_pants_01";
    public override Name = "Hide Pants Of Shadow Whispers";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class IvoryLegs extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_01_b";
    public override Name = "Ivory Legs";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class JokerPants extends Equipament {
    public override Namespace = "SK_ma_medieval_pants_03";
    public override Name = "Joker Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class MercenaryPants extends Equipament {
    public override Namespace = "SK_ma_medieval_pants_02";
    public override Name = "Mercenary Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class MobilityPants extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_01_a";
    public override Name = "Mobility Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class NatureProtectorPants extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_04_a";
    public override Name = "Nature Protector Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 1;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class ProtectorPants extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_pants_01";
    public override Name = "Protector Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 1;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class PantsOfEndingVisions extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_caster_pants_03";
    public override Name = "Pants Of Ending Visions";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class PantsOfEndingWarlords extends Equipament {
    public override Namespace = "SK_ma_pants_heavy_01_d";
    public override Name = "Pants Of Ending Warlords";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class PlainPants extends Equipament {
    public override Namespace = "SK_ma_medieval_pants_05";
    public override Name = "Plain Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T0; 
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 0;
    
    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class PromiseOfVengeanceLegs extends Equipament {
    public override Namespace = "SK_ma_pants_heavy_01_a";
    public override Name = "Promise Of Vengeance Legs";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class RippedPants extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_03";
    public override Name = "Ripped Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T0; 
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    
    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class Shorts extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_slave_pants_short_01";
    public override Name = "Shorts";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T0; 
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 1;
    
    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class SmartPants extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_pants_02";
    public override Name = "Smart Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class StretchPants extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_pants_01";
    public override Name = "Stretch Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    
    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class SturdyPants extends Equipament {
    public override Namespace = "SK_ma_pants_03_a";
    public override Name = "Sturdy Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class TreeClimbingPants extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_musc_pants_02";
    public override Name = "Tree Climbing Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class UnholyLegs extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_caster_pants_01";
    public override Name = "Unholy Legs";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 2;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    
    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class WrathfulPants extends Equipament {
    public override Namespace = "SK_ma_medieval_armour_pants_01_c";
    public override Name = "Wrathful Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 2;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    
    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

Items.AddBaseItem(["SK_fe_meta_tal_nrw_caster_pants_03", "AprenticePants"], AprenticePants);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_pants_02", "ArcanePants"], ArcanePants);
Items.AddBaseItem(["SK_ma_pants_heavy_01_c", "ArmoredRoyalGuardPants"], ArmoredRoyalGuardPants);
Items.AddBaseItem(["SK_ma_medieval_pants_04", "BardPants"], BardPants);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_05_a", "BattleplateLegs"], BattleplateLegs);
Items.AddBaseItem(["SK_ma_pants_heavy_01_b", "ChampionLegs"], ChampionLegs);
Items.AddBaseItem(["SK_ma_pants_02", "ChampionPants"], ChampionPants);
Items.AddBaseItem(["SK_ma_pants_01", "ComfortablePants"], ComfortablePants);
Items.AddBaseItem(["SK_ma_pants_02", "DarkPlatePants"], DarkPlatePants);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_pants_01", "DragonhideLeatherLegs"], DragonhideLeatherLegs);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_pants_01_001", "GranArcanePants"], GranArcanePants);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_musc_pants_01", "GreatleatherPants"], GreatleatherPants);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_04_b", "GuardianLegs"], GuardianLegs);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_02", "HeavyDutyPants"], HeavyDutyPants);
Items.AddBaseItem(["SK_ma_medieval_pants_01", "HidePantsOfShadowWhispers"], HidePantsOfShadowWhispers);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_01_b", "IvoryLegs"], IvoryLegs);
Items.AddBaseItem(["SK_ma_medieval_pants_03", "JokerPants"], JokerPants);
Items.AddBaseItem(["SK_ma_medieval_pants_02", "MercenaryPants"], MercenaryPants);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_01_a", "MobilityPants"], MobilityPants);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_04_a", "NatureProtectorPants"], NatureProtectorPants);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_pants_01", "ProtectorPants"], ProtectorPants);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_caster_pants_03", "PantsOfEndingVisions"], PantsOfEndingVisions);
Items.AddBaseItem(["SK_ma_pants_heavy_01_d", "PantsOfEndingWarlords"], PantsOfEndingWarlords);
Items.AddBaseItem(["SK_ma_medieval_pants_05", "PlainPants"], PlainPants);
Items.AddBaseItem(["SK_ma_pants_heavy_01_a", "PromiseOfVengeanceLegs"], PromiseOfVengeanceLegs);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_03", "RippedPants"], RippedPants);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_slave_pants_short_01", "Shorts"], Shorts);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_pants_02", "SmartPants"], SmartPants);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_pants_01", "StretchPants"], StretchPants);
Items.AddBaseItem(["SK_ma_pants_03_a", "SturdyPants"], SturdyPants);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_musc_pants_02", "TreeClimbingPants"], TreeClimbingPants);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_caster_pants_01", "UnholyLegs"], UnholyLegs);
Items.AddBaseItem(["SK_ma_medieval_armour_pants_01_c", "WrathfulPants"], WrathfulPants);

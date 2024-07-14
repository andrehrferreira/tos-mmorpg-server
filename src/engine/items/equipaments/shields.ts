import { Offhand, EquipamentType, EquipamentTier, Items } from "../../items";

export class AdornmentedShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_04_b";
    public override Name = "Adornmented Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 2;
    public override GoldCost = 320;
    public override MaxAttrs = 2;
    public override BlockChance = 1; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "8-10"],
        ["Block Chance", "1-5%"],
        ["Attributes", "1-2"]
    ]);

    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(1,5);
    }
}

export class AncientProtector extends Offhand {
    public override Namespace = "AncientUndeadShield02";
    public override Name = "Ancient Protector";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;

    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Armor", "14-17"],
        ["Block Chance", "15-25%"],
        ["Attributes", "4"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(14,17);
        this.setBlockChance(15,25);
    }
}

export class AncientRoundShield extends Offhand {
    public override Namespace = "AncientUndeadShield01";
    public override Name = "Ancient Round Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;

    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Armor", "14-17"],
        ["Block Chance", "15-25%"],
        ["Attributes", "4"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(14,17);
        this.setBlockChance(15,25);
    }
}

export class ArmoredShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_02_a";
    public override Name = "Armored Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class BarbedDragonShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_01_a";
    public override Name = "Barbed Dragon Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Armor", "11-13"],
        ["Block Chance", "10-20%"],
        ["Attributes", "2-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(11,13);
        this.setBlockChance(10,20);
    }
}

export class ChivalryShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_01_a";
    public override Name = "Chivalry Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "5-7"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(5,7);
        this.setBlockChance(5,10);
    }
}

export class CrystalShield extends Offhand {
    public override Namespace = "SM_wp_shield_round_01_d";
    public override Name = "Crystal Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 10;
    public override GoldCost = 300;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "5-7"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(5,7);
        this.setBlockChance(5,10);
    }
}

export class CurvedOrnamentedShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_05_c";
    public override Name = "Curved Ornamented Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class CurvedShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_05_a";
    public override Name = "Curved Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class CurvedStrangeShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_05_b";
    public override Name = "Curved Strange Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class DragonShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_01_b";
    public override Name = "Dragon Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class FrameShield extends Offhand {
    public override Namespace = "ArzaonShield07";
    public override Name = "Frame Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 5;
    public override GoldCost = 200;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "5-7"],
        ["Block Chance", "1-5%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(5,7);
        this.setBlockChance(1,5);
    }
}

export class GreatAdornmentedShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_04_c";
    public override Name = "Great Adornmented Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class GreateOrnamentedShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_02_c";
    public override Name = "Greate Ornamented Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class HeavyOrnamentedShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_04_a";
    public override Name = "Heavy Ornamented Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class HeavySpikedSquareShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_03_c";
    public override Name = "Heavy Spiked Square Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Armor", "11-13"],
        ["Block Chance", "10-20%"],
        ["Attributes", "2-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(11,13);
        this.setBlockChance(10,20);
    }
}

export class HeraldicShield extends Offhand {
    public override Namespace = "ArzaonShield05";
    public override Name = "Heraldic Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "5-7"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(5,7);
        this.setBlockChance(5,10);
    }
}

export class KiteShield extends Offhand {
    public override Namespace = "SM_wp_shield_guard_01_a";
    public override Name = "Kite Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Armor", "11-13"],
        ["Block Chance", "10-15%"],
        ["Attributes", "2-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(11,13);
        this.setBlockChance(10,15);
    }
}

export class LionShield extends Offhand {
    public override Namespace = "ArzaonShield03";
    public override Name = "Lion Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;

    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Armor", "14-17"],
        ["Block Chance", "15-25%"],
        ["Attributes", "4"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(14,17);
        this.setBlockChance(15,25);
    }
}

export class MetalShield extends Offhand {
    public override Namespace = "ArzaonShield04";
    public override Name = "Metal Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;

    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Armor", "14-17"],
        ["Block Chance", "15-25%"],
        ["Attributes", "4"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(14,17);
        this.setBlockChance(15,25);
    }
}

export class OrnamentedShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_02_d";
    public override Name = "Ornamented Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class PlankShield extends Offhand {
    public override Namespace = "SM_wp_shield_square_01_a";
    public override Name = "Plank Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T0; 
    public override Weight = 1;
    public override GoldCost = 60;
    public override MaxAttrs = 1;

    public override CraftingInfo = new Map([
        ["Tier", "0"],        
        ["Armor", "1"],
        ["Block Chance", "2%"],
        ["Attributes", "1"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(1);
        this.setBlockChance(2);
    }
}

export class Protector extends Offhand {
    public override Namespace = "SM_wp_shield_ellipse_01_a";
    public override Name = "Protector";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 5;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Armor", "11-13"],
        ["Block Chance", "10-15%"],
        ["Attributes", "2-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(11,13);
        this.setBlockChance(10,15);
    }
}

export class RoughSquareShield extends Offhand {
    public override Namespace = "SM_wp_shield_square_02_a";
    public override Name = "Rough Square Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "2-4"],
        ["Block Chance", "2-4%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(2,4);
        this.setBlockChance(1,4);
    }
}

export class RoundLightShield extends Offhand {
    public override Namespace = "SM_wp_shield_round_01_a";
    public override Name = "Round Light Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "2-4"],
        ["Block Chance", "1-5%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(2,4);
        this.setBlockChance(1,5);
    }
}

export class RoundMetalShield extends Offhand {
    public override Namespace = "ArzaonShield06";
    public override Name = "Round Metal Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "2-4"],
        ["Block Chance", "1-5%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(2,4);
        this.setBlockChance(1,5);
    }
}

export class RoundSpikedBuckler extends Offhand {
    public override Namespace = "SM_wp_shield_round_01_c";
    public override Name = "Round Spiked Buckler";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "5-7"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(5,7);
        this.setBlockChance(5,10);
    }
}

export class RoundSpikedShield extends Offhand {
    public override Namespace = "SM_wp_shield_round_01_b";
    public override Name = "Round Spiked Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "5-7"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(5,7);
        this.setBlockChance(5,10);
    }
}

export class SimpleProtector extends Offhand {
    public override Namespace = "ArzaonShield01";
    public override Name = "Simple Protector";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 20;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "2-4"],
        ["Block Chance", "1-5%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(2,4);
        this.setBlockChance(1,5);
    }
}

export class SimpleShield extends Offhand {
    public override Namespace = "SM_wp_shield_round_02_b";
    public override Name = "Simple Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 20;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "2-4"],
        ["Block Chance", "1-5%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(2,4);
        this.setBlockChance(1,5);
    }
}

export class SpikedArmoredShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_02_b";
    public override Name = "Spiked Armored Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T5; 
    public override Weight = 20;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;

    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Armor", "14-17"],
        ["Block Chance", "15-25%"],
        ["Attributes", "4"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(14,17);
        this.setBlockChance(10,25);
    }
}

export class SpikedSquareShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_03_b";
    public override Name = "Spiked Square Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T4; 
    public override Weight = 20;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;

    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Armor", "11-13"],
        ["Block Chance", "10-15%"],
        ["Attributes", "2-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(11,13);
        this.setBlockChance(5,15);
    }
}

export class SquareShield extends Offhand {
    public override Namespace = "SM_wp_shield_heavy_03_a";
    public override Name = "Square Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T3; 
    public override Weight = 20;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;

    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Armor", "8-10"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-3"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(8,10);
        this.setBlockChance(5,10);
    }
}

export class TableShield extends Offhand {
    public override Namespace = "SM_wp_shield_round";
    public override Name = "Table Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "2-4"],
        ["Block Chance", "1-5%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(2,4);
        this.setBlockChance(1,5);
    }
}

export class TowerShield extends Offhand {
    public override Namespace = "SM_wp_shield_round";
    public override Name = "Tower Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T2; 
    public override Weight = 10;
    public override GoldCost = 100;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Armor", "5-7"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(5,7);
        this.setBlockChance(5,10);
    }
}

export class VikingShield extends Offhand {
    public override Namespace = "SM_wp_shield_round_02_a";
    public override Name = "Viking Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 20;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "1"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(1);
        this.setBlockChance(5,10);
    }
}

export class WoodenRoundShield extends Offhand {
    public override Namespace = "ArzaonShield08";
    public override Name = "Wooden Round Shield";
    public override EquipamentType = EquipamentType.Offhand;
    public override Tier = EquipamentTier.T1; 
    public override Weight = 5;
    public override GoldCost = 20;
    public override MaxAttrs = 2;

    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Armor", "1"],
        ["Block Chance", "5-10%"],
        ["Attributes", "1-2"]
    ]);
  
    public override generateAttrs(){
        this.setArmor(1);
        this.setBlockChance(5,10);
    }
}

Items.AddBaseItem(["SM_wp_shield_heavy_04_b", "AdornmentedShield"], AdornmentedShield);
Items.AddBaseItem(["AncientUndeadShield02", "AncientProtector"], AncientProtector);
Items.AddBaseItem(["AncientUndeadShield01", "AncientRoundShield"], AncientRoundShield);
Items.AddBaseItem(["SM_wp_shield_heavy_02_a", "ArmoredShield"], ArmoredShield);
Items.AddBaseItem(["SM_wp_shield_heavy_01_a", "BarbedDragonShield"], BarbedDragonShield);
Items.AddBaseItem(["SM_wp_shield_heavy_01_a", "ChivalryShield"], ChivalryShield);
Items.AddBaseItem(["SM_wp_shield_round_01_d", "CrystalShield"], CrystalShield);
Items.AddBaseItem(["SM_wp_shield_heavy_05_c", "CurvedOrnamentedShield"], CurvedOrnamentedShield);
Items.AddBaseItem(["SM_wp_shield_heavy_05_a", "CurvedShield"], CurvedShield);
Items.AddBaseItem(["SM_wp_shield_heavy_05_b", "CurvedStrangeShield"], CurvedStrangeShield);
Items.AddBaseItem(["SM_wp_shield_heavy_01_b", "DragonShield"], DragonShield);
Items.AddBaseItem(["ArzaonShield07", "FrameShield"], FrameShield);
Items.AddBaseItem(["SM_wp_shield_heavy_04_c", "GreatAdornmentedShield"], GreatAdornmentedShield);
Items.AddBaseItem(["SM_wp_shield_heavy_02_c", "GreateOrnamentedShield"], GreateOrnamentedShield);
Items.AddBaseItem(["SM_wp_shield_heavy_04_a", "HeavyOrnamentedShield"], HeavyOrnamentedShield);
Items.AddBaseItem(["SM_wp_shield_heavy_03_c", "HeavySpikedSquareShield"], HeavySpikedSquareShield);
Items.AddBaseItem(["ArzaonShield05", "HeraldicShield"], HeraldicShield);
Items.AddBaseItem(["SM_wp_shield_guard_01_a", "KiteShield"], KiteShield);
Items.AddBaseItem(["ArzaonShield03", "LionShield"], LionShield);
Items.AddBaseItem(["ArzaonShield04", "MetalShield"], MetalShield);
Items.AddBaseItem(["SM_wp_shield_heavy_02_d", "OrnamentedShield"], OrnamentedShield);
Items.AddBaseItem(["SM_wp_shield_square_01_a", "PlankShield"], PlankShield);
Items.AddBaseItem(["SM_wp_shield_ellipse_01_a", "Protector"], Protector);
Items.AddBaseItem(["SM_wp_shield_square_02_a", "RoughSquareShield"], RoughSquareShield);
Items.AddBaseItem(["SM_wp_shield_round_01_a", "RoundLightShield"], RoundLightShield);
Items.AddBaseItem(["ArzaonShield06", "RoundMetalShield"], RoundMetalShield);
Items.AddBaseItem(["SM_wp_shield_round_01_c", "RoundSpikedBuckler"], RoundSpikedBuckler);
Items.AddBaseItem(["SM_wp_shield_round_01_b", "RoundSpikedShield"], RoundSpikedShield);
Items.AddBaseItem(["ArzaonShield01", "SimpleProtector"], SimpleProtector);
Items.AddBaseItem(["SM_wp_shield_round_02_b", "SimpleShield"], SimpleShield);
Items.AddBaseItem(["SM_wp_shield_heavy_02_b", "SpikedArmoredShield"], SpikedArmoredShield);
Items.AddBaseItem(["SM_wp_shield_heavy_03_b", "SpikedSquareShield"], SpikedSquareShield);
Items.AddBaseItem(["SM_wp_shield_heavy_03_a", "SquareShield"], SquareShield);
Items.AddBaseItem(["SM_wp_shield_round", "TableShield"], TableShield);
Items.AddBaseItem(["SM_wp_shield_round", "TowerShield"], TowerShield);
Items.AddBaseItem(["SM_wp_shield_round_02_a", "VikingShield"], VikingShield);
Items.AddBaseItem(["ArzaonShield08", "WoodenRoundShield"], WoodenRoundShield);

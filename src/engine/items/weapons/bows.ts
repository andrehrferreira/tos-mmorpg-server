import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier } from "..";

export class AshwoodBow extends Weapon {
    public override Namespace = "Bow-Long_1";
    public override Name = "Ashwood Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 0.9;
    public override Weight = 2;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "0.9s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class BonecosRevenge extends Weapon {
    public override Namespace = "ArzaonLongBow2";
    public override Name = "Boneco's Revenge";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D6D6;
    public override AttackSpeed = 0.7;
    public override Weight = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "0.7s"],
        ["Damage", "6D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class CompositeBow extends Weapon {
    public override Namespace = "Bow-Composite_1";
    public override Name = "Composite Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 0.9;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "0.9s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class CompoundBow extends Weapon {
    public override Namespace = "ArzaonShortBow";
    public override Name = "Compound Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 0.8;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class EagleStrike extends Weapon {
    public override Namespace = "Bow-Elf_1";
    public override Name = "Eagle Strike";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 1.2;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "1.2s"],
        ["Damage", "5D6"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class EbonFlatbow extends Weapon {
    public override Namespace = "Bow-Orc_1";
    public override Name = "Ebon Flatbow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D4D6;
    public override AttackSpeed = 1;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "1s"],
        ["Damage", "4D6"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class LongBow extends Weapon {
    public override Namespace = "ArzaonLongBow";
    public override Name = "Long Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 1;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class Quillshooter extends Weapon {
    public override Namespace = "ArzaonLongBow2";
    public override Name = "Quillshooter";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 0.9;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "0.9s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class RecurveBow extends Weapon {
    public override Namespace = "ArzaonShortBow2";
    public override Name = "Recurve Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 0.8;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class RougeBow extends Weapon {
    public override Namespace = "SM_wp_bow_01_rouge";
    public override Name = "Rouge Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 0.6;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "0.6s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class ShortBow extends Weapon {
    public override Namespace = "Bow-Short_1";
    public override Name = "Short Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 0.8;
    public override Tier = EquipamentTier.T0;
    public override GoldCost = 100;
    public override CraftingInfo = new Map([
        ["Tier", "0"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "1D4"],
        ["Attributes", "1"]
    ]);
}

export class WarpBow extends Weapon {
    public override Namespace = "Bow-Goblin_1";
    public override Name = "Warp-Bow";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 0.8;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class Windbreaker extends Weapon {
    public override Namespace = "SM_wp_bow_01";
    public override Name = "Windbreaker";
    public override WeaponType = WeaponType.Bow;
    public override Damage = Dices.D6D6;
    public override AttackSpeed = 0.7;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "0.7s"],
        ["Damage", "6D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

Items.AddBaseItem(["Bow-Long_1","AshwoodBow"], AshwoodBow);
Items.AddBaseItem(["ArzaonLongBow2","BonecosRevenge"], BonecosRevenge);
Items.AddBaseItem(["Bow-Composite_1","CompositeBow"], CompositeBow);
Items.AddBaseItem(["ArzaonShortBow","CompoundBow"], CompoundBow);
Items.AddBaseItem(["Bow-Elf_1","EagleStrike"], EagleStrike);
Items.AddBaseItem(["Bow-Orc_1","EbonFlatbow"], EbonFlatbow);
Items.AddBaseItem(["ArzaonLongBow","LongBow"], LongBow);
Items.AddBaseItem(["ArzaonLongBow2","Quillshooter"], Quillshooter);
Items.AddBaseItem(["ArzaonShortBow2","RecurveBow"], RecurveBow);
Items.AddBaseItem(["SM_wp_bow_01_rouge","RougeBow"], RougeBow);
Items.AddBaseItem(["Bow-Short_1","ShortBow"], ShortBow);
Items.AddBaseItem(["Bow-Goblin_1","WarpBow"], WarpBow);
Items.AddBaseItem(["SM_wp_bow_01","Windbreaker"], Windbreaker);
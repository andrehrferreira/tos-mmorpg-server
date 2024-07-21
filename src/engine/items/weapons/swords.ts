import { Dices } from "@enums";
import { EquipamentTier, ItemRarity, Items, Weapon, WeaponType } from "..";

export class AncientScythe extends Weapon {
    public override Namespace = "AncientUndeadSword01";
    public override Name = "Ancient Scythe";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class AzarothSword extends Weapon {
    public override Namespace = "ArzaonSword02";
    public override Name = "Azaroth Sword";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D2D8;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "2s"],
        ["Damage", "2D8"],
        ["Attributes", "1-2"]
    ]);
}

export class Broadsword extends Weapon {
    public override Namespace = "ArzaonSword07";
    public override Name = "Broadsword";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D2D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1-2"]
    ]);
}

export class Claymore extends Weapon {
    public override Namespace = "ArzaonSword08";
    public override Name = "Claymore";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D2D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1-2"]
    ]);
}

export class CursedSoulsBlade extends Weapon {
    public override Namespace = "Executioner";
    public override Name = "Cursed Souls Blade";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D5D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "5D10"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class CurvedSword extends Weapon {
    public override Namespace = "AncientUndeadSword02";
    public override Name = "Curved Sword";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D4D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "2s"],
        ["Damage", "4D6"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class ElegantBlade extends Weapon {
    public override Namespace = "SM_wp_sword_elegant_01";
    public override Name = "Elegant Blade";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "2s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

/*export class Executioner extends Weapon {
    public override Namespace = "SM_wp_2h_sword_01";
    public override Name = "Executioner";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D4D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "3s"],
        ["Damage", "4D10"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}*/

export class Falchion extends Weapon {
    public override Namespace = "SM_wp_1h_sword_02";
    public override Name = "Falchion";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "2s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class Flamberge extends Weapon {
    public override Namespace = "FlambergeFinal";
    public override Name = "Flamberge";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D5D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "5D10"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class Gladius extends Weapon {
    public override Namespace = "SM_wp_1h_sword_03";
    public override Name = "Gladius";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "2s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class LargeTwoHandedSword extends Weapon {
    public override Namespace = "sword_1";
    public override Name = "Large Two-Handed Sword";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D3D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D10"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class LongSword extends Weapon {
    public override Namespace = "ArzaonSword05";
    public override Name = "Long Sword";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D2D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1-2"]
    ]);
}

export class Machete extends Weapon {
    public override Namespace = "AncientUndeadSword03";
    public override Name = "Machete";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "2s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
} 

export class MilitiaTwoHandedSword extends Weapon {
    public override Namespace = "ArzaonSword04";
    public override Name = "Militia Two-Handed Sword";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D2D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1-2"]
    ]);
}

export class Rapier extends Weapon {
    public override Namespace = "ArzaonSword06";
    public override Name = "Rapier";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "2s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class RefinedLongSword extends Weapon {
    public override Namespace = "ArzaonSword01";
    public override Name = "Refined Long Sword";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D2D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1-2"]
    ]);
}

export class RustySword extends Weapon {
    public override Namespace = "SM_wp_sword_03";
    public override Name = "Rusty Sword";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T0;
    public override GoldCost = 100;
    public override CraftingInfo = new Map([
        ["Tier", "0"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D4"],
        ["Attributes", "1"]
    ]);
}

export class ShortHandleLongSword extends Weapon {
    public override Namespace = "ArzaonSword03";
    public override Name = "Short Handle Long Sword";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "2s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class ShortSword extends Weapon {
    public override Namespace = "SM_wp_sword_02";
    public override Name = "Short Sword";
    public override WeaponType = WeaponType.Sword;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class TwoHandedSword extends Weapon {
    public override Namespace = "SM_wp_sword_05";
    public override Name = "Two-Handed Sword";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D1D10;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D10"],
        ["Attributes", "1"]
    ]);
}

export class WidowMaker extends Weapon {
    public override Namespace = "SM_wp_sword_01";
    public override Name = "Widow Maker";
    public override WeaponType = WeaponType.TwoHandedSword;
    public override Damage = Dices.D1D12;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D12"],
        ["Attributes", "1"]
    ]);
}

Items.AddBaseItem(["AncientUndeadSword01","AncientScythe"], AncientScythe);
Items.AddBaseItem(["ArzaonSword02","AzarothSword"], AzarothSword);
Items.AddBaseItem(["ArzaonSword07","Broadsword"], Broadsword);
Items.AddBaseItem(["ArzaonSword08","Claymore"], Claymore);
Items.AddBaseItem(["Executioner","CursedSoulsBlade"], CursedSoulsBlade);
Items.AddBaseItem(["AncientUndeadSword02","CurvedSword"], CurvedSword);
Items.AddBaseItem(["SM_wp_sword_elegant_01","ElegantBlade"], ElegantBlade);
//Items.AddBaseItem(["SM_wp_2h_sword_01","Executioner"], Executioner);
Items.AddBaseItem(["SM_wp_1h_sword_02","Falchion"], Falchion);
Items.AddBaseItem(["FlambergeFinal","Flamberge"], Flamberge);
Items.AddBaseItem(["SM_wp_1h_sword_03","Gladius"], Gladius);
Items.AddBaseItem(["sword_1","LargeTwoHandedSword"], LargeTwoHandedSword);
Items.AddBaseItem(["ArzaonSword05","LongSword"], LongSword);
Items.AddBaseItem(["AncientUndeadSword03","Machete"], Machete);
Items.AddBaseItem(["ArzaonSword04","MilitiaTwoHandedSword"], MilitiaTwoHandedSword);
Items.AddBaseItem(["ArzaonSword06","Rapier"], Rapier);
Items.AddBaseItem(["ArzaonSword01","RefinedLongSword"], RefinedLongSword);
Items.AddBaseItem(["SM_wp_sword_03","RustySword"], RustySword);
Items.AddBaseItem(["ArzaonSword03","ShortHandleLongSword"], ShortHandleLongSword);
Items.AddBaseItem(["SM_wp_sword_02","ShortSword"], ShortSword);
Items.AddBaseItem(["SM_wp_sword_05","TwoHandedSword"], TwoHandedSword);
Items.AddBaseItem(["SM_wp_sword_01","WidowMaker"], WidowMaker);
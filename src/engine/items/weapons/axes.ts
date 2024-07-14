import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier } from "..";

export class AmortusDecapitator extends Weapon {
    public override Namespace = "SM_wp_blunt_2h";
    public override Name = "Amortu's Decapitator";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D5D10;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "4s"],
        ["Damage", "5D10"],
        ["Durability", "+125"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class CurvedHandleAxe extends Weapon {
    public override Namespace = "ArzaonAxe03";
    public override Name = "Curved Handle Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D6"],
        ["Durability", "+35"],
        ["Attributes", "1-2"]
    ]);
}

export class DoubleAxe extends Weapon {
    public override Namespace = "ArzaonAxe07";
    public override Name = "Double Axe";
    public override WeaponType = WeaponType.TwoHandedAxe;
    public override Damage = Dices.D4D10;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "4s"],
        ["Damage", "4D10"],
        ["Durability", "+75"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class Hatchet extends Weapon {
    public override Namespace = "SM_wp_axe_01_a";
    public override Name = "Hatchet";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D6"],
        ["Durability", "+25"],
        ["Attributes", "1"]
    ]);
}

export class HeavyOneHandedAxe extends Weapon {
    public override Namespace = "SM_wp_axe_1h_barber_02";
    public override Name = "Heavy One-Handed Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D6"],
        ["Durability", "+35"],
        ["Attributes", "1-2"]
    ]);
}

export class HeavyOneHandedBrutalAxe extends Weapon {
    public override Namespace = "SM_wp_blunt_02_brutal";
    public override Name = "Heavy One-Handed Brutal Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D4D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "4D6"],
        ["Durability", "+125"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class LongAxe extends Weapon {
    public override Namespace = "ArzaonAxe02";
    public override Name = "Long Axe";
    public override WeaponType = WeaponType.TwoHandedAxe;
    public override Damage = Dices.D2D10;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "4s"],
        ["Damage", "2D10"],
        ["Durability", "+35"],
        ["Attributes", "1-2"]
    ]);
}

export class LongHatchet extends Weapon {
    public override Namespace = "axe_4";
    public override Name = "Long Hatchet";
    public override WeaponType = WeaponType.TwoHandedAxe;
    public override Damage = Dices.D1D10;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "4s"],
        ["Damage", "1D10"],
        ["Durability", "+25"],
        ["Attributes", "1"]
    ]);
}

export class LongLumberjackAxe extends Weapon {
    public override Namespace = "ArzaonAxe06";
    public override Name = "Long Lumberjack Axe";
    public override WeaponType = WeaponType.TwoHandedAxe;
    public override Damage = Dices.D3D10;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "4s"],
        ["Damage", "3D10"],
        ["Durability", "+50"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class LongSimpleAxe extends Weapon {
    public override Namespace = "axe_1";
    public override Name = "Long Simple Axe";
    public override WeaponType = WeaponType.TwoHandedAxe;
    public override Damage = Dices.D1D10;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "4s"],
        ["Damage", "1D10"],
        ["Durability", "+25"],
        ["Attributes", "1"]
    ]);
}

export class OneHandedBarbedAxe extends Weapon {
    public override Namespace = "SM_wp_axe_1h_barber_01";
    public override Name = "One-Handed Barbed Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D6"],
        ["Durability", "+50"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class OneHandedBrutalAxe extends Weapon {
    public override Namespace = "SM_wp_blunt_02_brutal_short";
    public override Name = "One-Handed Brutal Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D6"],
        ["Durability", "+75"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class OneHandedSpikedAxe extends Weapon {
    public override Namespace = "ArzaonAxe01";
    public override Name = "One-Handed Spiked Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class SpikedAxe extends Weapon {
    public override Namespace = "ArzaonAxe08";
    public override Name = "Spiked Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class ThrowingAxe extends Weapon {
    public override Namespace = "ArzaonAxe05";
    public override Name = "Throwing Axe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T0;
    public override GoldCost = 100;
    public override CraftingInfo = new Map([
        ["Tier", "0"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

Items.AddBaseItem(["SM_wp_blunt_2h","AmortusDecapitator"], AmortusDecapitator);
Items.AddBaseItem(["ArzaonAxe03","CurvedHandleAxe"], CurvedHandleAxe);
Items.AddBaseItem(["ArzaonAxe07","DoubleAxe"], DoubleAxe);
Items.AddBaseItem(["SM_wp_axe_01_a","Hatchet"], Hatchet);
Items.AddBaseItem(["SM_wp_axe_1h_barber_02","HeavyOneHandedAxe"], HeavyOneHandedAxe);
Items.AddBaseItem(["SM_wp_blunt_02_brutal","HeavyOneHandedBrutalAxe"], HeavyOneHandedBrutalAxe);
Items.AddBaseItem(["ArzaonAxe02","LongAxe"], LongAxe);
Items.AddBaseItem(["axe_4","LongHatchet"], LongHatchet);
Items.AddBaseItem(["ArzaonAxe06","LongLumberjackAxe"], LongLumberjackAxe);
Items.AddBaseItem(["axe_1","LongSimpleAxe"], LongSimpleAxe);
Items.AddBaseItem(["SM_wp_axe_1h_barber_01","OneHandedBarbedAxe"], OneHandedBarbedAxe);
Items.AddBaseItem(["SM_wp_blunt_02_brutal_short","OneHandedBrutalAxe"], OneHandedBrutalAxe);
Items.AddBaseItem(["ArzaonAxe01","OneHandedSpikedAxe"], OneHandedSpikedAxe);
Items.AddBaseItem(["ArzaonAxe08","SpikedAxe"], SpikedAxe);
Items.AddBaseItem(["ArzaonAxe05","ThrowingAxe"], ThrowingAxe);
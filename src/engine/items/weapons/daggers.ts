import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier } from "..";

export class AncientDagger extends Weapon {
    public override Namespace = "AncientUndeadDagger";
    public override Name = "Ancient Dagger";
    public override WeaponType = WeaponType.Dagger;
    public override Damage = Dices.D5D4;
    public override AttackSpeed = 0.8;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "4D4"],
        ["Durability", "+125"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class CurvedDagger extends Weapon {
    public override Namespace = "SM_wp_dagger_01";
    public override Name = "Curved Dagger";
    public override WeaponType = WeaponType.Dagger;
    public override Damage = Dices.D4D4;
    public override AttackSpeed = 0.9;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "0.9s"],
        ["Damage", "3D4"],
        ["Durability", "+75"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class Dagger extends Weapon {
    public override Namespace = "SM_wp_1h_sword_05";
    public override Name = "Dagger";
    public override WeaponType = WeaponType.Dagger;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 1;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "1s"],
        ["Damage", "1D4"],
        ["Durability", "+25"],
        ["Attributes", "1"]
    ]);
}

export class SacrificialDagger extends Weapon {
    public override Namespace = "SM_wp_sword_04";
    public override Name = "Sacrificial Dagger";
    public override WeaponType = WeaponType.Dagger;
    public override Damage = Dices.D3D4;
    public override AttackSpeed = 0.8;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "3D4"],
        ["Durability", "+50"],
        ["Attributes", "2-4"],
        ["Max Slots", "0-1"]
    ]);
}

export class SurvivalKnife extends Weapon {
    public override Namespace = "SM_wp_1h_sword_01";
    public override Name = "Survival Knife";
    public override WeaponType = WeaponType.Dagger;
    public override Damage = Dices.D3D4;
    public override AttackSpeed = 0.8;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "3D4"],
        ["Durability", "+50"],
        ["Attributes", "2-4"],
        ["Max Slots", "0-1"]
    ]);
}

export class Toothpick extends Weapon {
    public override Namespace = "dagger_1";
    public override Name = "Toothpick";
    public override WeaponType = WeaponType.Dagger;
    public override Damage = Dices.D2D4;
    public override AttackSpeed = 0.9;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "0.8s"],
        ["Damage", "2D4"],
        ["Durability", "+35"],
        ["Attributes", "1"]
    ]);
}

Items.AddBaseItem(["AncientUndeadDagger","AncientDagger"], AncientDagger);
Items.AddBaseItem(["SM_wp_dagger_01","CurvedDagger"], CurvedDagger);
Items.AddBaseItem(["SM_wp_1h_sword_05","Dagger"], Dagger);
Items.AddBaseItem(["SM_wp_sword_04","SacrificialDagger"], SacrificialDagger);
Items.AddBaseItem(["SM_wp_1h_sword_01","SurvivalKnife"], SurvivalKnife);
Items.AddBaseItem(["dagger_1","Toothpick"], Toothpick);
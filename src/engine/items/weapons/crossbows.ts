import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier } from "..";

export class Ballista extends Weapon {
    public override Namespace = "Crossbow_1";
    public override Name = "Ballista";
    public override WeaponType = WeaponType.Crossbow;
    public override Damage = Dices.D3D8;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D8"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class HeavyCrossbow extends Weapon {
    public override Namespace = "ArzaonCrossbow";
    public override Name = "Heavy Crossbow";
    public override WeaponType = WeaponType.Crossbow;
    public override Damage = Dices.D2D8;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D8"],
        ["Attributes", "1-2"]
    ]);
}

export class Crossbow extends Weapon {
    public override Namespace = "ArzaonCrossbow02";
    public override Name = "Crossbow";
    public override WeaponType = WeaponType.Crossbow;
    public override Damage = Dices.D1D8;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "2s"],
        ["Damage", "1D8"],
        ["Attributes", "1"]
    ]);
}

Items.AddBaseItem(["Crossbow_1","Ballista"], Ballista);
Items.AddBaseItem(["ArzaonCrossbow","HeavyCrossbow"], HeavyCrossbow);
Items.AddBaseItem(["ArzaonCrossbow02","Crossbow"], Crossbow);
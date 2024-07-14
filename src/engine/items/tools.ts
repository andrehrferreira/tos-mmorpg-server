import { Dices } from "@enums";
import { Items, Tool, Weapon, WeaponType, EquipamentTier } from ".";

export class AlchemistPestle extends Tool {
    public Namespace: string = "AlchemistPestle";
    public Name: string = "Alchemist Pestle"; 
    public Weight: number = 1;
    public GoldCost: number = 50;
}

export class JewelersTools extends Tool {
    public Namespace: string = "JewelersTools";
    public Name: string = "Jeweler`s Tools"; 
    public Weight: number = 2;
    public GoldCost: number = 200;
}

export class PaintingBrushes extends Tool {
    public Namespace: string = "PaintingBrushes";
    public Name: string = "Painting Brushes"; 
    public Weight: number = 2;
    public GoldCost: number = 100;
}

export class WritingInstruments extends Tool {
    public Namespace: string = "WritingInstruments";
    public Name: string = "Writing Instruments"; 
    public Weight: number = 1;
    public GoldCost: number = 100;
}

export class Pickaxe extends Weapon {
    public override Namespace = "Pickaxe";
    public override Name = "Pickaxe";
    public override WeaponType = WeaponType.Pickaxe;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T0;
    public GoldCost: number = 20;
}

export class LumberjackAxe extends Weapon {
    public override Namespace = "ArzaonAxe04";
    public override Name = "Lumberjack Axe";
    public override WeaponType = WeaponType.TwoHandedAxe;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T0;
    public GoldCost: number = 20;
}

export class Sickle extends Weapon {
    public override Namespace = "SM_tool_sickle_01";
    public override Name = "Sickle";
    public override WeaponType = WeaponType.Dagger;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T0;
    public GoldCost: number = 20;
}

export class FishRod extends Tool {
    public override Namespace = "FishRod";
    public override Name = "Fish Rod";
    public GoldCost: number = 20;
}

Items.AddBaseItem("AlchemistPestle", AlchemistPestle);
Items.AddBaseItem("JewelersTools", JewelersTools);
Items.AddBaseItem("PaintingBrushes", PaintingBrushes);
Items.AddBaseItem("WritingInstruments", WritingInstruments);
Items.AddBaseItem(["Pickaxe"], Pickaxe);
Items.AddBaseItem(["ArzaonAxe04","LumberjackAxe"], LumberjackAxe);
Items.AddBaseItem(["SM_tool_sickle_01", "Sickle"], Sickle);
Items.AddBaseItem(["FishRod"], FishRod);
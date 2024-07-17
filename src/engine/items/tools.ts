import { Dices } from "@enums";
import { Items, Tool, Weapon, WeaponType, EquipamentTier, PickaxeTool, AxeTool, ScytheTool, ItemRarity, AttributeType } from ".";

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

export class Pickaxe extends PickaxeTool {
    public override Namespace = "Pickaxe";
    public override Name = "Pickaxe";
    public override Tier = EquipamentTier.T0;
    public override GoldCost: number = 20;

    public override CraftingInfo = new Map([
        ["Durability", "100"]
    ]);

    public override generateAttrs(){
        this.setDurability(100);
    }
}

export class SilverPickaxe extends PickaxeTool {
    public override Namespace = "SilverPickaxe";
    public override Name = "Silver Pickaxe";
    public override Tier = EquipamentTier.T2;
    public override Rarity = ItemRarity.Uncommon;
    public override GoldCost: number = 300;

    public override CraftingInfo = new Map([
        ["Durability", "500"],
        ["Bonus Collects Mineral", "50%"]
    ]);

    public override generateAttrs(){
        this.setDurability(500);
        this.setAttr(AttributeType.BonusCollectsMineral, 50);
    }
}

export class GoldPickaxe extends PickaxeTool {
    public override Namespace = "GoldPickaxe";
    public override Name = "Gold Pickaxe";
    public override Tier = EquipamentTier.T5;
    public override Rarity = ItemRarity.Rare;
    public override GoldCost: number = 2000;

    public override CraftingInfo = new Map([
        ["Durability", "1000"],
        ["Bonus Collects Mineral", "100%"]
    ]);

    public override generateAttrs(){
        this.setDurability(1000);
        this.setAttr(AttributeType.BonusCollectsMineral, 100);
    }
}

export class LumberjackAxe extends AxeTool {
    public override Namespace = "ArzaonAxe04";
    public override Name = "Lumberjack Axe";
    public override Tier = EquipamentTier.T0;
    public GoldCost: number = 20;

    public override generateAttrs(){
        this.setDurability(100);
    }
}

export class SilverLumberjackAxe extends AxeTool {
    public override Namespace = "SilverLumberjackAxe";
    public override Name = "Silver LumberjackAxe";
    public override Tier = EquipamentTier.T2;
    public override Rarity = ItemRarity.Uncommon;
    public override GoldCost: number = 300;

    public override CraftingInfo = new Map([
        ["Durability", "500"],
        ["Bonus Collects Wood", "50%"]
    ]);

    public override generateAttrs(){
        this.setDurability(500);
        this.setAttr(AttributeType.BonusCollectsWood, 50);
    }
}

export class GoldLumberjackAxe extends AxeTool {
    public override Namespace = "GoldLumberjackAxe";
    public override Name = "Gold LumberjackAxe";
    public override Tier = EquipamentTier.T5;
    public override Rarity = ItemRarity.Rare;
    public override GoldCost: number = 2000;

    public override CraftingInfo = new Map([
        ["Durability", "1000"],
        ["Bonus Collects Wood", "100%"]
    ]);

    public override generateAttrs(){
        this.setDurability(1000);
        this.setAttr(AttributeType.BonusCollectsWood, 100);
    }
}

export class Sickle extends ScytheTool {
    public override Namespace = "SM_tool_sickle_01";
    public override Name = "Sickle";
    public override Tier = EquipamentTier.T0;
    public GoldCost: number = 20;

    public override generateAttrs(){
        this.setDurability(100);
    }
}

export class SilverSickle extends ScytheTool {
    public override Namespace = "SilverSickle";
    public override Name = "Silver Sickle";
    public override Tier = EquipamentTier.T2;
    public override Rarity = ItemRarity.Uncommon;
    public override GoldCost: number = 300;

    public override CraftingInfo = new Map([
        ["Durability", "500"],
        ["Bonus Collects Skins", "50%"]
    ]);

    public override generateAttrs(){
        this.setDurability(500);
        this.setAttr(AttributeType.BonusCollectsSkins, 50);
    }
}

export class GoldSickle extends ScytheTool {
    public override Namespace = "GoldSickle";
    public override Name = "Gold Sickle";
    public override Tier = EquipamentTier.T5;
    public override Rarity = ItemRarity.Rare;
    public override GoldCost: number = 2000;

    public override CraftingInfo = new Map([
        ["Durability", "1000"],
        ["Bonus Collects Skins", "100%"]
    ]);

    public override generateAttrs(){
        this.setDurability(1000);
        this.setAttr(AttributeType.BonusCollectsSkins, 100);
    }
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
Items.AddBaseItem(["SilverPickaxe"], SilverPickaxe);
Items.AddBaseItem(["GoldPickaxe"], GoldPickaxe);
Items.AddBaseItem(["ArzaonAxe04","LumberjackAxe"], LumberjackAxe);
Items.AddBaseItem("SilverLumberjackAxe", SilverLumberjackAxe);
Items.AddBaseItem("GoldLumberjackAxe", GoldLumberjackAxe);
Items.AddBaseItem(["SM_tool_sickle_01", "Sickle"], Sickle);
Items.AddBaseItem("SilverSickle", SilverSickle);
Items.AddBaseItem("GoldSickle", GoldSickle);
Items.AddBaseItem(["FishRod"], FishRod);
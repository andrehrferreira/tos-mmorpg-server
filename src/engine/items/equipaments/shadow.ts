import { 
    EquipamentType, Items, Equipament, 
    EquipamentTier, EquipmentWeight, ItemRarity 
} from "../../items";

export class ShadowMask extends Equipament {
    public override Namespace = "ShadowMask";
    public override Name = "Shadow's Mask";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;
    public override CardSlots: number = 3;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class ShadowBoots extends Equipament {
    public override Namespace = "ShadowBoots";
    public override Name = "Shadow's Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;
    public override CardSlots: number = 3;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class ShadowCape extends Equipament {
    public override Namespace = "ShadowCape";
    public override Name = "Shadow's Cape";
    public override EquipamentType = EquipamentType.Cloak;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;
    public override CardSlots: number = 3;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class ShadowChest extends Equipament {
    public override Namespace = "ShadowChest";
    public override Name = "Shadow's Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;
    public override CardSlots: number = 3;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class ShadowGloves extends Equipament {
    public override Namespace = "ShadowGloves";
    public override Name = "Shadow's Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;
    public override CardSlots: number = 3;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

Items.AddBaseItem("ShadowMask", ShadowMask);
Items.AddBaseItem("ShadowBoots", ShadowBoots);
Items.AddBaseItem("ShadowCape", ShadowCape);
Items.AddBaseItem("ShadowChest", ShadowChest);
Items.AddBaseItem("ShadowGloves", ShadowGloves);
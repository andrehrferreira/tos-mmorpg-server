import { 
    EquipamentType, Items, Equipament, 
    EquipamentTier, EquipmentWeight, ItemRarity 
} from "../../items";

export class AbsalonHelmet extends Equipament {
    public override Namespace = "AbsalonHelmet";
    public override Name = "Absalon's Helmet";
    public override EquipamentType = EquipamentType.Helmet;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class AbsalonBoots extends Equipament {
    public override Namespace = "AbsalonBoots";
    public override Name = "Absalon's Boots";
    public override EquipamentType = EquipamentType.Boots;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class AbsalonChest extends Equipament {
    public override Namespace = "AbsalonChest";
    public override Name = "Absalon's Chest";
    public override EquipamentType = EquipamentType.Chest;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class AbsalonPants extends Equipament {
    public override Namespace = "AbsalonPants";
    public override Name = "Absalon's Pants";
    public override EquipamentType = EquipamentType.Pants;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

export class AbsalonAcessories extends Equipament {
    public override Namespace = "AbsalonAcessories";
    public override Name = "Absalon's Acessories";
    public override EquipamentType = EquipamentType.Robe;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 0;
    public override GoldCost = 1;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 
    public override Rarity = ItemRarity.Unique;

    public override generateAttrs(){
        this.setArmor(100);
    }
}

Items.AddBaseItem("AbsalonHelmet", AbsalonHelmet);
Items.AddBaseItem("AbsalonBoots", AbsalonBoots);
Items.AddBaseItem("AbsalonChest", AbsalonChest);
Items.AddBaseItem("AbsalonPants", AbsalonPants);
Items.AddBaseItem("AbsalonAcessories", AbsalonAcessories);
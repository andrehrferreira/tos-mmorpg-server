import { 
    EquipamentType, Items, Equipament, 
    EquipamentTier, EquipmentWeight, ItemRarity 
} from "../../items";

export class DiabolicHat extends Equipament {
    public override Namespace = "GodSetHat";
    public override Name = "Diabolic's Hat";
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

export class DiabolicBoots extends Equipament {
    public override Namespace = "GodSetBoots";
    public override Name = "Diabolic's Boots";
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

export class DiabolicPants extends Equipament {
    public override Namespace = "GodSetPants";
    public override Name = "Diabolic's Pants";
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

export class DiabolicTunic extends Equipament {
    public override Namespace = "GodSetTunic";
    public override Name = "Diabolic's Tunic";
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

export class DiabolicRobe extends Equipament {
    public override Namespace = "GotSetRobe";
    public override Name = "Diabolic's Robe";
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

Items.AddBaseItem(["GodSetHat", "DiabolicHat"], DiabolicHat);
Items.AddBaseItem(["GodSetBoots", "DiabolicBoots"], DiabolicBoots);
Items.AddBaseItem(["GodSetPants", "DiabolicPants"], DiabolicPants);
Items.AddBaseItem(["GodSetTunic", "DiabolicTunic"], DiabolicTunic);
Items.AddBaseItem(["GotSetRobe", "DiabolicRobe"], DiabolicRobe);
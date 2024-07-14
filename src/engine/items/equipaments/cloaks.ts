import { Equipament, EquipamentTier, EquipamentType, Items } from "../../items";

export class ArcaneCloak extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_cloak_hood_down";
    public override Name = "Arcane Cloak";
    public override EquipamentType = EquipamentType.Cloak;
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 0;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"]
    ]);
}

export class DragonhideHood extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_cloak_base_V1_hood_down";
    public override Name = "Dragonhide Hood";
    public override EquipamentType = EquipamentType.Cloak;
    public override Weight = 1;
    public override GoldCost = 2000;
    public override MaxAttrs = 0;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"]
    ]);
}

export class EnchantedCloak extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_cloak_base";
    public override Name = "Enchanted Cloak";
    public override EquipamentType = EquipamentType.Cloak;
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 0;
    public override Tier = EquipamentTier.T4; 

    public override CraftingInfo = new Map([
        ["Tier", "4"]
    ]);
}

export class GodlyHood extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_cloak_base_V1";
    public override Name = "Godly Hood";
    public override EquipamentType = EquipamentType.Cloak;
    public override Weight = 1;
    public override GoldCost = 320;
    public override MaxAttrs = 0;
    public override Tier = EquipamentTier.T5; 

    public override CraftingInfo = new Map([
        ["Tier", "5"]
    ]);
}

export class LeatherCloak extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_cloak_base";
    public override Name = "Leather Cloak";
    public override EquipamentType = EquipamentType.Cloak;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 0;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"]
    ]);
}

export class SilkCloak extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_cloak_hood_down";
    public override Name = "Silk Cloak";
    public override EquipamentType = EquipamentType.Cloak;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 0;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"]
    ]);
}

export class UnholyCloak extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_cloak_base_high";
    public override Name = "Unholy Cloak";
    public override EquipamentType = EquipamentType.Cloak;
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 0;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"]
    ]);
}

Items.AddBaseItem(["SK_ma_tal_nrw_cloak_hood_down", "ArcaneCloak"], ArcaneCloak);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_cloak_base_V1_hood_down", "DragonhideHood"], DragonhideHood);
Items.AddBaseItem(["SK_ma_tal_nrw_cloak_base", "EnchantedCloak"], EnchantedCloak);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_cloak_base_V1", "GodlyHood"], GodlyHood);
Items.AddBaseItem(["SK_ma_tal_nrw_cloak_base", "LeatherCloak"], LeatherCloak);
Items.AddBaseItem(["SK_ma_tal_nrw_cloak_hood_down", "SilkCloak"], SilkCloak);
Items.AddBaseItem(["SK_ma_tal_nrw_cloak_base_high", "UnholyCloak"], UnholyCloak);


import { Resource, Items, ItemRarity } from "..";

export class Cotton extends Resource {
    public Namespace: string = "Cotton";
    public Name: string = "Cotton"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Fiber extends Resource {
    public Namespace: string = "Fiber";
    public Name: string = "Fiber"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class ArcaneFiber extends Resource {
    public Namespace: string = "ArcaneFiber";
    public Name: string = "Arcane Fiber"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
    public Rarity: ItemRarity = ItemRarity.Uncommon;
}

export class MasterCotton extends Resource {
    public Namespace: string = "MasterCotton";
    public Name: string = "Master Cotton"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;
    public Rarity: ItemRarity = ItemRarity.Uncommon;
}

export class Silk extends Resource {
    public Namespace: string = "Silk";
    public Name: string = "Silk"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

export class MysticSilk extends Resource {
    public Namespace: string = "MysticSilk";
    public Name: string = "Mystic Silk"; 
    public Weight: number = 0.1;
    public GoldCost: number = 25;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

export class DragonFlowerSilk extends Resource {
    public Namespace: string = "DragonFlowerSilk";
    public Name: string = "Dragon Flower Silk"; 
    public Weight: number = 0.1;
    public GoldCost: number = 30;
    public Rarity: ItemRarity = ItemRarity.Magic;
}

export class DivineCotton extends Resource {
    public Namespace: string = "DivineCotton";
    public Name: string = "Divine Cotton"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;
    public Rarity: ItemRarity = ItemRarity.Legendary;
}

Items.AddBaseItem("Cotton", Cotton);
Items.AddBaseItem("Fiber", Fiber);
Items.AddBaseItem("ArcaneFiber", ArcaneFiber);
Items.AddBaseItem("MasterCotton", MasterCotton);
Items.AddBaseItem("Silk", Silk);
Items.AddBaseItem("MysticSilk", MysticSilk);
Items.AddBaseItem("DragonFlowerSilk", DragonFlowerSilk);
Items.AddBaseItem("DivineCotton", DivineCotton);

//Cloth
export class LinenCloth extends Resource {
    public Namespace: string = "LinenCloth";
    public Name: string = "Linen Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class WoolenCloth extends Resource {
    public Namespace: string = "WoolenCloth";
    public Name: string = "Woolen Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class MageweaveCloth extends Resource {
    public Namespace: string = "MageweaveCloth";
    public Name: string = "Mageweave Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
    public Rarity: ItemRarity = ItemRarity.Uncommon;
}

export class PrimalCloth extends Resource {
    public Namespace: string = "PrimalCloth";
    public Name: string = "Primal Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;
    public Rarity: ItemRarity = ItemRarity.Uncommon;
}

export class MagicCloth extends Resource {
    public Namespace: string = "MagicCloth";
    public Name: string = "Magic Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

export class SilkCloth extends Resource {
    public Namespace: string = "SilkCloth";
    public Name: string = "Silk Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

export class EnchantedCloth extends Resource {
    public Namespace: string = "EnchantedCloth";
    public Name: string = "Enchanted Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 15;
    public Rarity: ItemRarity = ItemRarity.Magic;
}

export class DemonicCloth extends Resource {
    public Namespace: string = "DemonicCloth";
    public Name: string = "Demonic Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 30;
    public Rarity: ItemRarity = ItemRarity.Magic;
}

export class DarknessCloth extends Resource {
    public Namespace: string = "DarknessCloth";
    public Name: string = "Darkness Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 35;
    public Rarity: ItemRarity = ItemRarity.Magic;
}

export class DragonestCloth extends Resource {
    public Namespace: string = "DragonestCloth";
    public Name: string = "Dragonest Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 50;
    public Rarity: ItemRarity = ItemRarity.Legendary;
}

export class DivineCloth extends Resource {
    public Namespace: string = "DivineCloth";
    public Name: string = "Divine Cloth"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;
    public Rarity: ItemRarity = ItemRarity.Legendary;
}

Items.AddBaseItem("LinenCloth", LinenCloth);
Items.AddBaseItem("WoolenCloth", WoolenCloth);
Items.AddBaseItem("MageweaveCloth", MageweaveCloth);
Items.AddBaseItem("PrimalCloth", PrimalCloth);
Items.AddBaseItem("MagicCloth", MagicCloth);
Items.AddBaseItem("SilkCloth", SilkCloth);
Items.AddBaseItem("EnchantedCloth", EnchantedCloth);
Items.AddBaseItem("DemonicCloth", DemonicCloth);
Items.AddBaseItem("DarknessCloth", DarknessCloth);
Items.AddBaseItem("DragonestCloth", DragonestCloth);
Items.AddBaseItem("DivineCloth", DivineCloth);
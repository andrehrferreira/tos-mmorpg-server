import { Resource, Items, ItemRarity } from "..";

export class Ametist extends Resource {
    public Namespace: string = "Ametist";
    public Name: string = "Ametist"; 
    public Weight: number = 0.1;
    public GoldCost: number = 300;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

export class Diamond extends Resource {
    public Namespace: string = "Diamond";
    public Name: string = "Diamond"; 
    public Weight: number = 0.1;
    public GoldCost: number = 500;
    public Rarity: ItemRarity = ItemRarity.Legendary;
}

export class Emerald extends Resource {
    public Namespace: string = "Emerald";
    public Name: string = "Emerald"; 
    public Weight: number = 0.1;
    public GoldCost: number = 400;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

export class Pearl extends Resource {
    public Namespace: string = "Pearl";
    public Name: string = "Pearl"; 
    public Weight: number = 0.1;
    public GoldCost: number = 350;
    public Rarity: ItemRarity = ItemRarity.Magic;
}

export class Ruby extends Resource {
    public Namespace: string = "Ruby";
    public Name: string = "Ruby"; 
    public Weight: number = 0.1;
    public GoldCost: number = 450;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

export class Sunstone extends Resource {
    public Namespace: string = "Sunstone";
    public Name: string = "Sunstone"; 
    public Weight: number = 0.1;
    public GoldCost: number = 600;
    public Rarity: ItemRarity = ItemRarity.Legendary;
}

export class Topaz extends Resource {
    public Namespace: string = "Topaz";
    public Name: string = "Topaz"; 
    public Weight: number = 0.1;
    public GoldCost: number = 350;
    public Rarity: ItemRarity = ItemRarity.Rare;
}

Items.AddBaseItem("Ametist", Ametist);
Items.AddBaseItem("Diamond", Diamond);
Items.AddBaseItem("Emerald", Emerald);
Items.AddBaseItem("Pearl", Pearl);
Items.AddBaseItem("Ruby", Ruby);
Items.AddBaseItem("Sunstone", Sunstone);
Items.AddBaseItem("Topaz", Topaz);
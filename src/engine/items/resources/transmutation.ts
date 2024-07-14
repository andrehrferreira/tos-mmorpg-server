import { Items, Resource, ItemRarity, Consumable, BaseChest } from "..";

export class FragmentWhiteCrystal extends Resource {
    public Namespace: string = "FragmentWhiteCrystal";
    public Name: string = "Fragment White Crystal";
    public GoldCost: number = 1;
}

export class FragmentBlueCrystal extends Resource {
    public Namespace: string = "FragmentBlueCrystal";
    public Name: string = "Fragment Blue Crystal";
    public GoldCost: number = 1;
    public Rarity = ItemRarity.Rare;
}

export class FragmentGreenCrystal extends Resource {
    public Namespace: string = "FragmentGreenCrystal";
    public Name: string = "Fragment Green Crystal";
    public GoldCost: number = 1;
    public Rarity = ItemRarity.Uncommon;
}

export class FragmentOrangeCrystal extends Resource {
    public Namespace: string = "FragmentOrangeCrystal";
    public Name: string = "Fragment Orange Crystal";
    public GoldCost: number = 1;
    public Rarity = ItemRarity.Legendary;
}

export class FragmentPurpleCrystal extends Resource {
    public Namespace: string = "FragmentPurpleCrystal";
    public Name: string = "Fragment Purple Crystal";
    public GoldCost: number = 1;
    public Rarity = ItemRarity.Magic;
}

export class WhiteCrystal extends Resource {
    public Namespace: string = "WhiteCrystal";
    public Name: string = "White Crystal";
    public GoldCost: number = 100;
    public Rarity = ItemRarity.Uncommon;
}

export class RainbowCrystal extends BaseChest {
    public Namespace: string = "RainbowCrystal";
    public Name: string = "Rainbow Crystal";
    public GoldCost: number = 500;
    public Rarity = ItemRarity.Uncommon;

    constructor(){
        super();   
                
        this.dropChance(FragmentGreenCrystal, 20, 1);
        this.dropChance(FragmentBlueCrystal, 5, 1);
        this.dropChance(FragmentPurpleCrystal, 1, 1);
        this.dropChance(FragmentOrangeCrystal, 0.1, 1);
        this.dropChance(WhiteCrystal, 80, 1);
        this.dropChance(GreenCrystal, 5, 1);
        this.dropChance(BlueCrystal, 1, 1);
        this.dropChance(PurpleCrystal, 0.1, 1);
    }
}

export class GreenCrystal extends Resource {
    public Namespace: string = "GreenCrystal";
    public Name: string = "Green Crystal";
    public GoldCost: number = 1000;
    public Rarity = ItemRarity.Uncommon;
}

export class BlueCrystal extends Resource {
    public Namespace: string = "BlueCrystal";
    public Name: string = "Blue Crystal";
    public GoldCost: number = 5000;
    public Rarity = ItemRarity.Rare;
}

export class PurpleCrystal extends Resource {
    public Namespace: string = "PurpleCrystal";
    public Name: string = "Purple Crystal";
    public GoldCost: number = 10000;
    public Rarity = ItemRarity.Magic;
}
    
export class OrageCrystal extends Resource {
    public Namespace: string = "OrageCrystal";
    public Name: string = "Orage Crystal";
    public GoldCost: number = 50000;
    public Rarity = ItemRarity.Legendary;
}

Items.AddBaseItem("FragmentWhiteCrystal", FragmentWhiteCrystal);
Items.AddBaseItem("FragmentBlueCrystal", FragmentBlueCrystal);
Items.AddBaseItem("FragmentGreenCrystal", FragmentGreenCrystal);
Items.AddBaseItem("FragmentOrangeCrystal", FragmentOrangeCrystal);
Items.AddBaseItem("FragmentPurpleCrystal", FragmentPurpleCrystal);
Items.AddBaseItem("WhiteCrystal", WhiteCrystal);
Items.AddBaseItem("RainbowCrystal", RainbowCrystal);
Items.AddBaseItem("GreenCrystal", GreenCrystal);
Items.AddBaseItem("BlueCrystal", BlueCrystal);
Items.AddBaseItem("PurpleCrystal", PurpleCrystal);
Items.AddBaseItem("OrageCrystal", OrageCrystal);
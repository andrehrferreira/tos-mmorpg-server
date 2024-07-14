import { Item, ItemRarity, Items } from "..";

export class BlackSkull extends Item {
    public override Namespace: string = "BlackSkull";
    public override Name: string = "Black Skull"; 
    public override Weight: number = 10;
    public override GoldCost: number = 1;
    public override Rarity = ItemRarity.Unique;
}

export class BlueSkull extends Item {
    public override Namespace: string = "BlueSkull";
    public override Name: string = "Blue Skull"; 
    public override Weight: number = 10;
    public override GoldCost: number = 1;
    public override Rarity = ItemRarity.Unique;
}

export class GreenSkull extends Item {
    public override Namespace: string = "GreenSkull";
    public override Name: string = "Green Skull"; 
    public override Weight: number = 10;
    public override GoldCost: number = 1;
    public override Rarity = ItemRarity.Unique;
}

export class RedSkull extends Item {
    public override Namespace: string = "RedSkull";
    public override Name: string = "Red Skull"; 
    public override Weight: number = 10;
    public override GoldCost: number = 1;
    public override Rarity = ItemRarity.Unique;
}

export class YellowSkull extends Item {
    public override Namespace: string = "YellowSkull";
    public override Name: string = "Yellow Skull"; 
    public override Weight: number = 10;
    public override GoldCost: number = 1;
    public override Rarity = ItemRarity.Unique;
}

Items.AddBaseItem("BlackSkull", BlackSkull);
Items.AddBaseItem("BlueSkull", BlueSkull);
Items.AddBaseItem("GreenSkull", GreenSkull);
Items.AddBaseItem("RedSkull", RedSkull);
Items.AddBaseItem("YellowSkull", YellowSkull);
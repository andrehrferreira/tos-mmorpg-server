import { Items, Card, ItemRarity } from "..";

export class CardMoutainDragon extends Card {
    public override Namespace = "CardMoutainDragon";
    public override Name = "Card: Mountain Dragon";
    public override GoldCost = 1000;
    public override Attack = 6;
    public override HP = 10;
    public override Energy = 5;
    public override Rarity = ItemRarity.Legendary;

    public override generateAttrs(){
        this.setArmor(20);
    }
}

export class CardBigSlime extends Card {
    public override Namespace = "CardBigSlime";
    public override Name = "Card: Big Slime";
    public override GoldCost = 1000;
    public override Attack = 2;
    public override HP = 20;
    public override Energy = 5;
    public override Rarity = ItemRarity.Legendary;

    public override generateAttrs(){
        this.setFireResistence(10);
        this.setColdResistence(10);
        this.setPoisonResistence(10);
        this.setEnergyResistence(10);
        this.setLightResistence(10);
        this.setDarkResistence(10);
    }
}

export class CardFabio extends Card {
    public override Namespace = "CardFabio";
    public override Name = "Card: Fabio";
    public override GoldCost = 1;
    public override Attack = 1;
    public override HP = 1;
    public override Energy = 1;
    public override Rarity = ItemRarity.Legendary;
}

export class CardAkelodon extends Card {
    public override Namespace = "CardAkelodon";
    public override Name = "Card: Akelodon";
    public override GoldCost = 1;
    public override Attack = 6;
    public override HP = 10;
    public override Energy = 6;
    public override Rarity = ItemRarity.Legendary;
}

Items.AddBaseItem("CardMoutainDragon", CardMoutainDragon);
Items.AddBaseItem("CardBigSlime", CardBigSlime);
Items.AddBaseItem("CardFabio", CardFabio);
Items.AddBaseItem("CardAkelodon", CardAkelodon);
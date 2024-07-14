import { Items, Card, ItemRarity, AttributeType } from "..";

export class CardSkeletonKnight extends Card {
    public override Namespace = "CardSkeletonKnight";
    public override Name = "Card: Skeleton Knight";
    public override GoldCost = 300;
    public override Attack = 3;
    public override HP = 4;
    public override Energy = 2;
    public override Rarity = ItemRarity.Rare;

    public override generateAttrs(){
        this.setAttr(AttributeType.BonusDamage, 2);
    }
}

export class CardGiantWorm extends Card {
    public override Namespace = "CardGiantWorm";
    public override Name = "Card: Giant Worm";
    public override GoldCost = 300;
    public override Attack = 2;
    public override HP = 6;
    public override Energy = 4;
    public override Rarity = ItemRarity.Rare;

    public override generateAttrs(){
        this.setPoisonResistence(5);
    }
}

export class CardTroll extends Card {
    public override Namespace = "CardTroll";
    public override Name = "Card: Troll";
    public override GoldCost = 300;
    public override Attack = 4;
    public override HP = 6;
    public override Energy = 4;
    public override Rarity = ItemRarity.Rare;

    public override generateAttrs(){
        this.setArmor(5);
    }
}

Items.AddBaseItem("CardSkeletonKnight", CardSkeletonKnight);
Items.AddBaseItem("CardGiantWorm", CardGiantWorm);
Items.AddBaseItem("CardTroll", CardTroll);
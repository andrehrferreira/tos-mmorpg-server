import { Items, Card, ItemRarity, AttributeType } from "..";

export class CardMushroomMonsterShine extends Card {
    public override Namespace = "CardMushroomMonsterShine";
    public override Name = "Card: Mushroom Monster";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 4;
    public override Energy = 3;
    public override Rarity = ItemRarity.Uncommon;

    public override generateAttrs(){
        this.setArmor(3);
    }
}

export class CardSkeletonArcher extends Card {
    public override Namespace = "CardSkeletonArcher";
    public override Name = "Card: Skeleton Archer";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 3;
    public override Energy = 2;
    public override Rarity = ItemRarity.Uncommon;

    public override generateAttrs(){
        this.setAttr(AttributeType.BonusDamage, 2);
    }
}

export class CardSkeletonMage extends Card {
    public override Namespace = "CardSkeletonMage";
    public override Name = "Card: Skeleton Mage";
    public override GoldCost = 100;
    public override Attack = 4;
    public override HP = 2;
    public override Energy = 3;
    public override Rarity = ItemRarity.Uncommon;

    public override generateAttrs(){
        this.setAttr(AttributeType.BonusMagicDamage, 3);
    }
}

Items.AddBaseItem("CardMushroomMonsterShine", CardMushroomMonsterShine);
Items.AddBaseItem("CardSkeletonArcher", CardSkeletonArcher);
Items.AddBaseItem("CardSkeletonMage", CardSkeletonMage);
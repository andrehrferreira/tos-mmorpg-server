import { Items, Card, ItemRarity, AttributeType } from "..";

export class CardSlime extends Card {
    public override Namespace = "CardSlime";
    public override Name = "Card: Slime";
    public override GoldCost = 100;
    public override Attack = 1;
    public override HP = 2;
    public override Energy = 1;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setArmor(2);
    }
}

export class CardBomberBug extends Card {
    public override Namespace = "CardBomberBug";
    public override Name = "Card: Bomber Bug";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 3;
    public override Energy = 2;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setPoisonResistence(2);
    }
}

export class CardMushroomMonster extends Card {
    public override Namespace = "CardMushroomMonster";
    public override Name = "Card: Mushroom Monster";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 2;
    public override Energy = 2;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setPoisonResistence(1);
    }
}

export class CardSkeleton extends Card {
    public override Namespace = "CardSkeleton";
    public override Name = "Card: Skeleton";
    public override GoldCost = 100;
    public override Attack = 1;
    public override HP = 2;
    public override Energy = 1;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class CardPlantMonster extends Card {
    public override Namespace = "CardPlantMonster";
    public override Name = "Card: Plant Monster";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 2;
    public override Energy = 2;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setPoisonResistence(2);
    }
}

export class CardCrab extends Card {
    public override Namespace = "CardCrab";
    public override Name = "Card: Crab";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 2;
    public override Energy = 2;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setAttr(AttributeType.BonusStr, 1);
    }
}

export class CardGiantViper extends Card {
    public override Namespace = "CardGiantViper";
    public override Name = "Card: Giant Viper";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 2;
    public override Energy = 2;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        //this.setAttr(AttributeType.BonusStr, 1);
    }
}

export class CardFishman extends Card {
    public override Namespace = "CardFishman";
    public override Name = "Card: Fishman";
    public override GoldCost = 100;
    public override Attack = 1;
    public override HP = 2;
    public override Energy = 1;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class CardWeranglerfish extends Card {
    public override Namespace = "CardWeranglerfish";
    public override Name = "Card: Weranglerfish";
    public override GoldCost = 100;
    public override Attack = 2;
    public override HP = 2;
    public override Energy = 2;
    public override Rarity = ItemRarity.Common;

    public override generateAttrs(){
        this.setAttr(AttributeType.BonusStr, 2);
    }
}

Items.AddBaseItem("CardSlime", CardSlime);
Items.AddBaseItem("CardBomberBug", CardBomberBug);
Items.AddBaseItem("CardMushroomMonster", CardMushroomMonster);
Items.AddBaseItem("CardSkeleton", CardSkeleton);
Items.AddBaseItem("CardPlantMonster", CardPlantMonster);
Items.AddBaseItem("CardCrab", CardCrab);
Items.AddBaseItem("CardGiantViper", CardGiantViper);
Items.AddBaseItem("CardFishman", CardFishman);
Items.AddBaseItem("CardWeranglerfish", CardWeranglerfish);
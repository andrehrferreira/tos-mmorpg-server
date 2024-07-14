import { Items, Card, ItemRarity, AttributeType } from "..";

export class CardDragonide extends Card {
    public override Namespace = "CardDragonide";
    public override Name = "Card: Dragonide";
    public override GoldCost = 600;
    public override Attack = 5;
    public override HP = 4;
    public override Energy = 5;
    public override Rarity = ItemRarity.Magic;

    public override generateAttrs(){
        this.setArmor(5);
    }
}

export class CardSoulReaper extends Card {
    public override Namespace = "CardSoulReaper";
    public override Name = "Card: Soul Reaper";
    public override GoldCost = 600;
    public override Attack = 8;
    public override HP = 6;
    public override Energy = 5;
    public override Rarity = ItemRarity.Magic;

    public override generateAttrs(){
        this.setAttr(AttributeType.BonusMagicDamage, 10);
    }
}

Items.AddBaseItem("CardDragonide", CardDragonide);
Items.AddBaseItem("CardSoulReaper", CardSoulReaper);
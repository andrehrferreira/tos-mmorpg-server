import { ItemRarity, Items, PetItem } from "..";

import { 
    ChickenWhitePet, ChickenBlackPet, ChickenBrownPet,
    ChickenFromHellPet, GoatPet, PigPet,
    SheepPet,
    CowPet,
    Cow2Pet,
    Cow3Pet
} from "@mobiles";

export class PetChickenBlackItem extends PetItem {
    public override PetCreature = ChickenBlackPet;
    public override Namespace = "PetChickenBlackItem";
    public override Name = "Chicken";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetChickenBrownItem extends PetItem {
    public override PetCreature = ChickenBrownPet;
    public override Namespace = "PetChickenBrownItem";
    public override Name = "Chicken";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetChickenWhiteItem extends PetItem {
    public override PetCreature = ChickenWhitePet;
    public override Namespace = "PetChickenWhiteItem";
    public override Name = "Chicken";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetChickenFromHellItem extends PetItem {
    public override PetCreature = ChickenFromHellPet;
    public override Namespace = "PetChickenFromHellItem";
    public override Name = "Chicken From Hell";
    public override Rarity = ItemRarity.Legendary;
    public override MaxAttrs = 0;
}

export class PetGoatItem extends PetItem {
    public override PetCreature = GoatPet;
    public override Namespace = "PetGoatItem";
    public override Name = "Goat";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetPigItem extends PetItem {
    public override PetCreature = PigPet;
    public override Namespace = "PetPigItem";
    public override Name = "Pig";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetSheepItem extends PetItem {
    public override PetCreature = SheepPet;
    public override Namespace = "PetSheepItem";
    public override Name = "Sheep";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetCowItem extends PetItem {
    public override PetCreature = CowPet;
    public override Namespace = "PetCowItem";
    public override Name = "Cow";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetCow2Item extends PetItem {
    public override PetCreature = Cow2Pet;
    public override Namespace = "PetCow2Item";
    public override Name = "Cow";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetCow3Item extends PetItem {
    public override PetCreature = Cow3Pet;
    public override Namespace = "PetCow3Item";
    public override Name = "Cow";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

Items.AddBaseItem("PetChickenBlackItem", PetChickenBlackItem);
Items.AddBaseItem("PetChickenBrownItem", PetChickenBrownItem);
Items.AddBaseItem("PetChickenWhiteItem", PetChickenWhiteItem);
Items.AddBaseItem("PetChickenFromHellItem", PetChickenFromHellItem);
Items.AddBaseItem("PetGoatItem", PetGoatItem);
Items.AddBaseItem("PetPigItem", PetPigItem);
Items.AddBaseItem("PetSheepItem", PetSheepItem);
Items.AddBaseItem("PetCowItem", PetCowItem);
Items.AddBaseItem("PetCow2Item", PetCow2Item);
Items.AddBaseItem("PetCow3Item", PetCow3Item);
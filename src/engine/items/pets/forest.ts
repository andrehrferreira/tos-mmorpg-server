import { ItemRarity, Items, PetItem } from "..";

import { 
    BearPet, BoarPet, DeerPet, Wolf2Pet, 
    Wolf3Pet, Wolf4Pet, WolfPet
} from "@mobiles";

export class PetBearItem extends PetItem {
    public override PetCreature = BearPet;
    public override Namespace = "PetBearItem";
    public override Name = "Bear";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetDeerItem extends PetItem {
    public override PetCreature = DeerPet;
    public override Namespace = "PetDeerItem";
    public override Name = "Deer";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetBoarItem extends PetItem {
    public override PetCreature = BoarPet;
    public override Namespace = "PetBoarItem";
    public override Name = "Boar";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetWolfItem extends PetItem {
    public override PetCreature = WolfPet;
    public override Namespace = "PetWolfItem";
    public override Name = "Wolf";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetWolf2Item extends PetItem {
    public override PetCreature = Wolf2Pet;
    public override Namespace = "PetWolf2Item";
    public override Name = "Wolf";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetWolf3Item extends PetItem {
    public override PetCreature = Wolf3Pet;
    public override Namespace = "PetWolf3Item";
    public override Name = "Wolf";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetWolf4Item extends PetItem {
    public override PetCreature = Wolf4Pet;
    public override Namespace = "PetWolf4Item";
    public override Name = "Wolf";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

Items.AddBaseItem("PetBearItem", PetBearItem);
Items.AddBaseItem("PetDeerItem", PetDeerItem);
Items.AddBaseItem("PetBoarItem", PetBoarItem);
Items.AddBaseItem("PetWolfItem", PetWolfItem);
Items.AddBaseItem("PetWolf2Item", PetWolf2Item);
Items.AddBaseItem("PetWolf3Item", PetWolf3Item);
Items.AddBaseItem("PetWolf4Item", PetWolf4Item);
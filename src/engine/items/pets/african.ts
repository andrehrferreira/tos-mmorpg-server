import { ItemRarity, Items, PetItem } from "..";

import { 
    CrocodilePet, ElephantPet, HippopotamusPet, RhinocerosPet, ZebraPet
} from "@mobiles";

export class PetCrocodileItem extends PetItem {
    public override PetCreature = CrocodilePet;
    public override Namespace = "PetCrocodileItem";
    public override Name = "Crocodile";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetElephantItem extends PetItem {
    public override PetCreature = ElephantPet;
    public override Namespace = "PetElephantItem";
    public override Name = "Elephant";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetHippopotamusItem extends PetItem {
    public override PetCreature = HippopotamusPet;
    public override Namespace = "PetHippopotamusItem";
    public override Name = "Hippopotamus";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetRhinocerosItem extends PetItem {
    public override PetCreature = RhinocerosPet;
    public override Namespace = "PetRhinocerosItem";
    public override Name = "Rhinoceros";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

export class PetZebraItem extends PetItem {
    public override PetCreature = ZebraPet;
    public override Namespace = "PetZebraItem";
    public override Name = "Zebra";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;
}

Items.AddBaseItem("PetCrocodileItem", PetCrocodileItem);
Items.AddBaseItem("PetElephantItem", PetElephantItem);
Items.AddBaseItem("PetHippopotamusItem", PetHippopotamusItem);
Items.AddBaseItem("PetRhinocerosItem", PetRhinocerosItem);
Items.AddBaseItem("PetZebraItem", PetZebraItem);
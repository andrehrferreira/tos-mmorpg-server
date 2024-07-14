import { ItemRarity, Items, PetItem } from "..";

import { WaspPet, WaspPet02 } from "@mobiles";

export class PetWaspPetItem extends PetItem {
    public override PetCreature = WaspPet;
    public override Namespace = "PetWaspPetItem";
    public override Name = "Wasp";
    public override Rarity = ItemRarity.Uncommon;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

export class PetWasp02PetItem extends PetItem {
    public override PetCreature = WaspPet02;
    public override Namespace = "PetWasp02PetItem";
    public override Name = "Wasp";
    public override Rarity = ItemRarity.Uncommon;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

Items.AddBaseItem("PetWaspPetItem", PetWaspPetItem);
Items.AddBaseItem("PetWasp02PetItem", PetWasp02PetItem);
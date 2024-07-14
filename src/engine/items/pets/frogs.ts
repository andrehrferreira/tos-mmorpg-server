import { ItemRarity, Items, PetItem } from "..";

import { 
    FrogPet, Frog02Pet, Frog03Pet, 
    Frog04Pet, Frog05Pet, Frog06Pet
 } from "@mobiles";

export class PetFrogPetItem extends PetItem {
    public override PetCreature = FrogPet;
    public override Namespace = "PetFrogPetItem";
    public override Name = "Frog";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

export class PetFrog02PetItem extends PetItem {
    public override PetCreature = Frog02Pet;
    public override Namespace = "PetFrog02PetItem";
    public override Name = "Frog";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

export class PetFrog03PetItem extends PetItem {
    public override PetCreature = Frog03Pet;
    public override Namespace = "PetFrog03PetItem";
    public override Name = "Frog";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

export class PetFrog04PetItem extends PetItem {
    public override PetCreature = Frog04Pet;
    public override Namespace = "PetFrog04PetItem";
    public override Name = "Frog";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

export class PetFrog05PetItem extends PetItem {
    public override PetCreature = Frog05Pet;
    public override Namespace = "PetFrog05PetItem";
    public override Name = "Frog";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

export class PetFrog06PetItem extends PetItem {
    public override PetCreature = Frog06Pet;
    public override Namespace = "PetFrog06PetItem";
    public override Name = "Frog";
    public override Rarity = ItemRarity.Common;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setPoisonResistence(1, 2);
    }
}

Items.AddBaseItem("PetFrogPetItem", PetFrogPetItem);
Items.AddBaseItem("PetFrog02PetItem", PetFrog02PetItem);
Items.AddBaseItem("PetFrog03PetItem", PetFrog03PetItem);
Items.AddBaseItem("PetFrog04PetItem", PetFrog04PetItem);
Items.AddBaseItem("PetFrog05PetItem", PetFrog05PetItem);
Items.AddBaseItem("PetFrog06PetItem", PetFrog06PetItem);
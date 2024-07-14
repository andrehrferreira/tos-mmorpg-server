import { ItemRarity, Items, PetItem } from "..";

import { 
    WyrmBrownPet, WyrmMagicPet, WyrmPurplePet,
    WyrmFlamePet
 } from "@mobiles";

export class WyrmBrownPetItem extends PetItem {
    public override PetCreature = WyrmBrownPet;
    public override Namespace = "PetWyrmBrown";
    public override Name = "Wyrm";
    public override Armor = 10;
    public override Rarity = ItemRarity.Uncommon;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setArmor(5,10);
    }
}

export class WyrmMagicPetItem extends PetItem {
    public override PetCreature = WyrmMagicPet;
    public override Namespace = "PetWyrmMagic";
    public override Name = "Wyrm";
    public override FireResistence = 3;
    public override PoisonResistence = 3;
    public override EnergyResistence = 3;
    public override ColdResistence = 3;
    public override Rarity = ItemRarity.Uncommon;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setFireResistence(2,3);
        this.setPoisonResistence(2,3);
        this.setEnergyResistence(2,3);
        this.setColdResistence(2,3);
    }
}

export class WyrmPurplePetItem extends PetItem {
    public override PetCreature = WyrmPurplePet;
    public override Namespace = "PetWyrmPurple";
    public override Name = "Wyrm";
    public override LightResistence = 5;
    public override DarkResistence = 5;
    public override Rarity = ItemRarity.Uncommon;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setLightResistence(2,5);
        this.setDarkResistence(2,5);
    }
}

export class WyrmFlamePetItem extends PetItem {
    public override PetCreature = WyrmFlamePet;
    public override Namespace = "PetWyrmFlame";
    public override Name = "Wyrm";
    public override FireResistence = 10;
    public override Rarity = ItemRarity.Uncommon;
    public override MaxAttrs = 0;

    public override generateAttrs(){
        this.setFireResistence(5,10);
    }
}

Items.AddBaseItem("PetWyrmBrown", WyrmBrownPetItem);
Items.AddBaseItem("PetWyrmMagic", WyrmMagicPetItem);
Items.AddBaseItem("PetWyrmPurple", WyrmPurplePetItem);
Items.AddBaseItem("PetWyrmFlame", WyrmFlamePetItem);
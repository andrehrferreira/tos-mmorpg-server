import { Pet, Entity } from "../../entities";

export class WyrmBrownPet extends Pet {
    public override namespace = "WyrmBrownPet";
    public override name = "Wyrm";
    public override customVisual = "WyrmPet"
    public override minDistanceTarget: number = -100;
}

export class WyrmPurplePet extends Pet {
    public override namespace = "WyrmPurplePet";
    public override name = "Wyrm";
    public override customVisual = "WyrmPet2";
    public override minDistanceTarget: number = -100;
}

export class WyrmMagicPet extends Pet {
    public override namespace = "WyrmMagicPet";
    public override name = "Wyrm";
    public override customVisual = "WyrmPet3";
    public override minDistanceTarget: number = -100;
}

export class WyrmFlamePet extends Pet {
    public override namespace = "WyrmFlamePet";
    public override name = "Wyrm";
    public override customVisual = "WyrmPet4";
    public override minDistanceTarget: number = -100;
}

Entity.Pets.set("WyrmBrown", WyrmBrownPet);
Entity.Pets.set("WyrmPurple", WyrmPurplePet);
Entity.Pets.set("WyrmMagic", WyrmMagicPet);
Entity.Pets.set("WyrmFlame", WyrmFlamePet);
import { Pet, Entity } from "../../entities";

export class GoatPet extends Pet {
    public override namespace = "GoatPet";
    public override name = "Goat";
    public override customVisual = "Goat"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class PigPet extends Pet {
    public override namespace = "PigPet";
    public override name = "Pig";
    public override customVisual = "Pig"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class SheepPet extends Pet {
    public override namespace = "SheepPet";
    public override name = "Sheep";
    public override customVisual = "Sheep"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class ChickenWhitePet extends Pet {
    public override namespace = "ChickenWhitePet";
    public override name = "Chicken";
    public override customVisual = "Chicken3"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class ChickenBlackPet extends Pet {
    public override namespace = "ChickenBlackPet";
    public override name = "Chicken";
    public override customVisual = "Chicken2"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class ChickenBrownPet extends Pet {
    public override namespace = "ChickenBrownPet";
    public override name = "Chicken";
    public override customVisual = "Chicken"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class ChickenFromHellPet extends Pet {
    public override namespace = "ChickenFromHellPet";
    public override name = "Chicken From Hell";
    public override customVisual = "ChickenFromHell"
    public override minDistanceTarget: number = -50;
    public override speed = 1500;
}

export class CowPet extends Pet {
    public override namespace = "CowPet";
    public override name = "Cow";
    public override customVisual = "Cow"
    public override minDistanceTarget: number = -50;
    public override speed = 1500;
}

export class Cow2Pet extends Pet {
    public override namespace = "Cow2Pet";
    public override name = "Cow";
    public override customVisual = "Cow2"
    public override minDistanceTarget: number = -50;
    public override speed = 1500;
}

export class Cow3Pet extends Pet {
    public override namespace = "Cow3Pet";
    public override name = "Cow";
    public override customVisual = "Cow3"
    public override minDistanceTarget: number = -50;
    public override speed = 1500;
}

Entity.Pets.set("GoatPet", GoatPet);
Entity.Pets.set("PigPet", PigPet);
Entity.Pets.set("SheepPet", SheepPet);
Entity.Pets.set("ChickenWhitePet", ChickenWhitePet);
Entity.Pets.set("ChickenBlackPet", ChickenBlackPet);
Entity.Pets.set("ChickenBrownPet", ChickenBrownPet);
Entity.Pets.set("ChickenFromHellPet", ChickenFromHellPet);
Entity.Pets.set("CowPet", CowPet);
Entity.Pets.set("Cow2Pet", Cow2Pet);
Entity.Pets.set("Cow3Pet", Cow3Pet);
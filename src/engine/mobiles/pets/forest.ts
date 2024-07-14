import { Pet, Entity } from "../../entities";

export class BearPet extends Pet {
    public override namespace = "BearPet";
    public override name = "Bear";
    public override customVisual = "Bear"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class DeerPet extends Pet {
    public override namespace = "DeerPet";
    public override name = "Deer";
    public override customVisual = "Deer"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class BoarPet extends Pet {
    public override namespace = "BoarPet";
    public override name = "Boar";
    public override customVisual = "Boar"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class WolfPet extends Pet {
    public override namespace = "WolfPet";
    public override name = "Wolf";
    public override customVisual = "Wolf"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class Wolf2Pet extends Pet {
    public override namespace = "Wolf2Pet";
    public override name = "Wolf";
    public override customVisual = "Wolf2"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class Wolf3Pet extends Pet {
    public override namespace = "Wolf3Pet";
    public override name = "Wolf";
    public override customVisual = "Wolf3"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

export class Wolf4Pet extends Pet {
    public override namespace = "Wolf4Pet";
    public override name = "Wolf";
    public override customVisual = "Wolf4"
    public override minDistanceTarget: number = -50;
    public override speed = 600;
}

Entity.Pets.set("BearPet", BearPet);
Entity.Pets.set("DeerPet", DeerPet);
Entity.Pets.set("BoarPet", BoarPet);
Entity.Pets.set("WolfPet", WolfPet);
Entity.Pets.set("Wolf2Pet", Wolf2Pet);
Entity.Pets.set("Wolf3Pet", Wolf3Pet);
Entity.Pets.set("Wolf4Pet", Wolf4Pet);
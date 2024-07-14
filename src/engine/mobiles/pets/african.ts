import { Pet, Entity } from "../../entities";

export class CrocodilePet extends Pet {
    public override namespace = "CrocodilePet";
    public override name = "Crocodile";
    public override customVisual = "Crocodile"
    public override minDistanceTarget: number = 200;
    public override speed = 600;
}

export class ElephantPet extends Pet {
    public override namespace = "ElephantPet";
    public override name = "Elephant";
    public override customVisual = "Elephant"
    public override minDistanceTarget: number = 300;
    public override speed = 600;
}

export class HippopotamusPet extends Pet {
    public override namespace = "HippopotamusPet";
    public override name = "Hippopotamus";
    public override customVisual = "Hippopotamus"
    public override minDistanceTarget: number = 200;
    public override speed = 600;
}

export class RhinocerosPet extends Pet {
    public override namespace = "RhinocerosPet";
    public override name = "Rhinoceros";
    public override customVisual = "Rhinoceros"
    public override minDistanceTarget: number = 200;
    public override speed = 600;
}

export class ZebraPet extends Pet {
    public override namespace = "ZebraPet";
    public override name = "Zebra";
    public override customVisual = "Zebra"
    public override minDistanceTarget: number = 100;
    public override speed = 600;
}

Entity.Pets.set("CrocodilePet", CrocodilePet);
Entity.Pets.set("ElephantPet", ElephantPet);
Entity.Pets.set("HippopotamusPet", HippopotamusPet);
Entity.Pets.set("RhinocerosPet", RhinocerosPet);
Entity.Pets.set("ZebraPet", ZebraPet);
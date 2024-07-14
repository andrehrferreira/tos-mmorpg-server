import { Pet, Entity } from "../../entities";

export class FrogPet extends Pet {
    public override namespace = "Frog";
    public override name = "Frog";
    public override minDistanceTarget: number = -50;
}

export class Frog02Pet extends Pet {
    public override namespace = "Frog02";
    public override name = "Frog";
    public override minDistanceTarget: number = -50;
}

export class Frog03Pet extends Pet {
    public override namespace = "Frog03";
    public override name = "Frog";
    public override minDistanceTarget: number = -50;
}

export class Frog04Pet extends Pet {
    public override namespace = "Frog04";
    public override name = "Frog";
    public override minDistanceTarget: number = -50;
}

export class Frog05Pet extends Pet {
    public override namespace = "Frog05";
    public override name = "Frog";
    public override minDistanceTarget: number = -50;
}

export class Frog06Pet extends Pet {
    public override namespace = "Frog06";
    public override name = "Frog";
    public override minDistanceTarget: number = -50;
}

Entity.Pets.set("FrogPet", FrogPet);
Entity.Pets.set("Frog02Pet", Frog02Pet);
Entity.Pets.set("Frog03Pet", Frog03Pet);
Entity.Pets.set("Frog04Pet", Frog04Pet);
Entity.Pets.set("Frog05Pet", Frog05Pet);
Entity.Pets.set("Frog06Pet", Frog06Pet);
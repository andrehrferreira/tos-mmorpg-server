import { Pet, Entity } from "../../entities";

export class WaspPet extends Pet {
    public override namespace = "Wasp";
    public override name = "Wasp";
    public override minDistanceTarget: number = -100;
}

export class WaspPet02 extends Pet {
    public override namespace = "Wasp02";
    public override name = "Wasp";
    public override minDistanceTarget: number = -100;
}

Entity.Pets.set("WaspPet", WaspPet);
Entity.Pets.set("WaspPet02", WaspPet02);
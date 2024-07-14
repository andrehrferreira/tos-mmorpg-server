import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { Meat, Hides, PetGoatItem } from "@items";

export class Goat extends Creature {
    public override namespace = "Goat";
    public override name = "Goat";
    public override skinnerResources = Hides;
    public override skinnerAmount = Random.MinMaxInt(1, 2);
    public override skinnerTick = 2;
    public override skinnerGainExp = 1;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 2000;
    public override speed = 300;

    //Taming
    public override tamable = true;
    public override skillTamingMin = 1;
    public override petSockets = 1;
    public override maxSkillTamingUp = 2;
    public override itemTamingFinish = PetGoatItem;

    constructor(){
        super();

        this.setLife(5);
        this.setStr(1, 5);
        this.setDex(5, 8);
        this.setVig(1, 5);

        this.loot.dropChance(Meat, 100, 1, 5);
    }
}

Entity.addEntityBase("Goat", Goat);
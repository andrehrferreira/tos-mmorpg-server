import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { Bacon, Hides, Meat, PetPigItem } from "@items";

export class Pig extends Creature {
    public override namespace = "Pig";
    public override name = "Pig";
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
    public override itemTamingFinish = PetPigItem;

    constructor(){
        super();

        this.setLife(10);
        this.setStr(5, 10);
        this.setDex(2, 8);
        this.setVig(2, 5);
        
        this.loot.dropChance(Meat, 100, 5, 10);
        this.loot.dropChance(Bacon, 100, 1, 3);
    }
}

Entity.addEntityBase("Pig", Pig);
import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { Bacon, Hides, Meat, PetBoarItem } from "@items";

export class Boar extends Creature {
    public override namespace = "Boar";
    public override name = "Boar";
    public override passive = false;
    public override skinnerResources = Hides;
    public override skinnerAmount = Random.MinMaxInt(1, 3);
    public override skinnerTick = 4;
    public override skinnerGainExp = 2;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 5000;
    public override pawnSenseRadius: number = 1000;
    public override speed = 800;

    //Taming
    public override tamable = true;
    public override skillTamingMin = 3;
    public override petSockets = 2;
    public override maxSkillTamingUp = 4;
    public override itemTamingFinish = PetBoarItem;

    constructor(){
        super();

        this.setLife(80, 120);
        this.setStr(5, 10);
        this.setDex(2, 8);
        this.setVig(2, 5);
        
        this.loot.dropChance(Meat, 100, 5, 10);
        this.loot.dropChance(Bacon, 100, 1, 3);
    }
}

Entity.addEntityBase("Boar", Boar);
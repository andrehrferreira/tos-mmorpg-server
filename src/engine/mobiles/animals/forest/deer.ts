import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { Apple, Hides, Meat, DeerSkull, Horn, Bone, PetDeerItem } from "@items";
import { Dices } from "@enums";

export class Deer extends Creature {
    public override namespace = "Deer";
    public override name = "Deer";
    public override skinnerResources = Hides;
    public override skinnerAmount = Random.MinMaxInt(2, 5);
    public override skinnerTick = 3;
    public override skinnerGainExp = 1;
    public override passive = true;
    public override movementDistance: number = 3000;
    public override maxDistanceToRespawn: number = 5000;
    public override pawnSenseRadius: number = 1500;
    public override baseDamage = Dices.D1D6;
    public override speed = 1000;

    //Taming
    public override tamable = true;
    public override skillTamingMin = 2;
    public override petSockets = 2;
    public override maxSkillTamingUp = 3;
    public override itemTamingFinish = PetDeerItem;

    constructor(){
        super();

        this.setLife(20);
        this.setStr(5, 10);
        this.setDex(8, 10);
        this.setVig(5, 10);
        
        this.loot.dropChance(Meat, 100, 10, 20);
        this.loot.dropChance(Apple, 50, 1, 3);
        this.loot.dropChance(Horn, 10, 1);
        this.loot.dropChance(DeerSkull, 1, 1);
        this.loot.dropChance(Bone, 20, 1);
    }
}

Entity.addEntityBase("Deer", Deer);
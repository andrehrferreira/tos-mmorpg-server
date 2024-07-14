import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { Apple, FishRaw, Honey, Hides, GoldCoin, Meat, PetBearItem } from "@items";
import { Dices } from "@enums";

export class Bear extends Creature {
    public override namespace = "Bear";
    public override name = "Bear";
    public override skinnerResources = Hides;
    public override skinnerAmount = Random.MinMaxInt(1, 5);
    public override skinnerTick = 3;
    public override skinnerGainExp = 3;
    public override passive = false;
    public override movementDistance: number = 1000;
    public override maxDistanceToRespawn: number = 5000;
    public override pawnSenseRadius: number = 1500;
    public override baseDamage = Dices.D2D6;
    public override speed = 700;

    //Taming
    public override tamable = true;
    public override skillTamingMin = 4;
    public override petSockets = 3;
    public override maxSkillTamingUp = 5;
    public override itemTamingFinish = PetBearItem;

    constructor(){
        super();

        this.setLife(80, 100);
        this.setStr(15, 19);
        this.setDex(8, 10);
        this.setVig(12, 16);
        
        this.loot.dropChance(GoldCoin, 20, 5, 10);
        this.loot.dropChance(Apple, 50, 1, 3);
        this.loot.dropChance(Honey, 5, 1, 3);
        this.loot.dropChance(FishRaw, 10, 1, 2);
        this.loot.dropChance(Meat, 100, 10, 25);
    }
}

Entity.addEntityBase("Bear", Bear);
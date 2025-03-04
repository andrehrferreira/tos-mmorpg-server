import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { BaseUndead } from "../..";
import { Entity } from "../../../entities";

import { 
    Bone, BoneRing, CardSkeleton, GoldCoin, RoundMetalShield, ShortSword, Skull 
} from "@items";

export class Skeleton extends BaseUndead {
    public override namespace = "Skeleton";
    public override name = "Skeleton";
    public override customVisual = "POSkeleton";
    public override passive = false;

    public override targetMode = CreatureTargetMode.DamageCaused;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 100;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 1000;
    public override baseDamage = Dices.D2D8;
    public override speed = 650;

    constructor(){
        super();

        this.setLife(20, 35);

        this.setStr(10, 20);
        this.setDex(5, 12); 
        this.setInt(10, 12);
        this.setVig(10, 20);

        this.loot.dropChance(GoldCoin, 100, 5, 40);
        this.loot.dropChance(ShortSword, 10, 1);
        this.loot.dropChance(RoundMetalShield, 1, 1);
        this.loot.dropChance(Bone, 10, 1, 5);
        this.loot.dropChance(Skull, 1, 1);
        this.loot.dropChance(BoneRing, 1, 1);
        this.loot.dropChance(CardSkeleton, 1, 1);
    }
}

Entity.addEntityBase("Skeleton", Skeleton);
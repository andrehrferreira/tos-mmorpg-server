import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { BaseUndead } from "../..";
import { Entity } from "../../../entities";

import { 
    Bone, GoldCoin, Skull, LongBow, BoneRing, CardSkeletonArcher 
} from "@items"; 

export class SkeletonArcher extends BaseUndead {
    public override namespace = "SkeletonArcher";
    public override name = "Skeleton Archer";
    public override customVisual = "POSkeletonArcher";
    public override passive = false;

    public override targetMode = CreatureTargetMode.DamageCaused;
    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 2000;
    public override maxDistanceToRespawn: number = 6000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D2D6;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(30, 50);

        this.setStr(20, 30);
        this.setDex(50, 60); 
        this.setInt(10, 12);
        this.setVig(10, 20);

        this.setSkill(SkillName.LongRangeWeapons, 5);

        this.loot.dropChance(GoldCoin, 100, 20, 50);
        this.loot.dropChance(LongBow, 10, 1);
        this.loot.dropChance(Bone, 10, 1, 5);
        this.loot.dropChance(Skull, 10, 1);
        this.loot.dropChance(BoneRing, 5, 1);
        this.loot.dropChance(CardSkeletonArcher, 1, 1);
    }
}

Entity.addEntityBase("SkeletonArcher", SkeletonArcher);
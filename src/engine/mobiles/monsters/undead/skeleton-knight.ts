import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { BaseUndead } from "../..";
import { Entity } from "../../../entities";

import { 
    Bone, GoldCoin, RoundMetalShield, Broadsword, Skull, 
    CardSkeletonKnight, BoneRing
} from "@items";

export class SkeletonKnight extends BaseUndead {
    public override namespace = "SkeletonKnight";
    public override name = "Skeleton Knight";
    public override customVisual = "POSkeletonKnight";
    public override passive = false;

    public override targetMode = CreatureTargetMode.DamageCaused;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 2000;
    public override maxDistanceToRespawn: number = 6000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D2D8;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(100, 150);

        this.setStr(20, 30);
        this.setDex(5, 12); 
        this.setInt(10, 12);
        this.setVig(10, 20);

        this.addAction("BladeFury", 20);
        this.addAction("PreciseCut", 20);

        this.setSkill(SkillName.CombatWithWeapons, 5);

        this.loot.dropChance(GoldCoin, 100, 100, 200);
        this.loot.dropChance(Broadsword, 10, 1);
        this.loot.dropChance(RoundMetalShield, 10, 1);
        this.loot.dropChance(Bone, 10, 1, 5);
        this.loot.dropChance(Skull, 50, 1);        
        this.loot.dropChance(CardSkeletonKnight, 1, 1);
        this.loot.dropChance(BoneRing, 5, 1);
    }
}

Entity.addEntityBase("SkeletonKnight", SkeletonKnight);
import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { BaseUndead } from "../..";
import { Entity } from "../../../entities";

import { 
    Bone, GoldCoin, Skull, SacrificialDagger, BoneRing 
} from "@items";

export class SkeletonAssassin extends BaseUndead {
    public override namespace = "SkeletonAssassin";
    public override name = "Skeleton Assassin";
    public override customVisual = "POSkeletonAssassin";
    public override passive = false;

    public override targetMode = CreatureTargetMode.DamageCaused;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 2000;
    public override maxDistanceToRespawn: number = 6000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D3D10;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(50, 100);

        this.setStr(20, 30);
        this.setDex(40, 60); 
        this.setInt(10, 12);
        this.setVig(10, 20);
        
        this.addAction("PreciseCut", 20);
        this.addAction("BladeDance", 10);
        this.addAction("QuickStrike", 10);
        this.addAction("BladeStorm", 10);

        this.setSkill(SkillName.CombatWithWeapons, 5);

        this.loot.dropChance(GoldCoin, 100, 100, 200);
        this.loot.dropChance(SacrificialDagger, 10, 1);
        this.loot.dropChance(Bone, 10, 1, 5);
        this.loot.dropChance(Skull, 10, 1);
        this.loot.dropChance(BoneRing, 10, 1);
    }
}

Entity.addEntityBase("SkeletonAssassin", SkeletonAssassin);
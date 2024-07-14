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
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D2D8;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(20, 40);

        this.setStr(20, 30);
        this.setDex(5, 12); 
        this.setInt(10, 12);
        this.setVig(10, 20);

        this.setSkill(SkillName.CombatWithWeapons, 5);

        this.loot.dropChance(GoldCoin, 90, 5, 10);
        this.loot.dropChance(ShortSword, 10, 1);
        this.loot.dropChance(RoundMetalShield, 1, 1);
        this.loot.dropChance(Bone, 10, 1, 5);
        this.loot.dropChance(Skull, 1, 1);
        this.loot.dropChance(BoneRing, 1, 1);
        this.loot.dropChance(CardSkeleton, 1, 1);
    }
}

Entity.addEntityBase("Skeleton", Skeleton);
import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { BaseUndead } from "../../";
import { Entity } from "../../../entities";

import { 
    AncientDagger,
    AncientRune, AncientStaff, BlackPlantWithThorns, BloodBerry, 
    DarknessEssence, GoldCoin, MagicDust, Ruby, SmallLifePotion, 
    SmallManaPotion 
} from "@items";

export class AncientUnreadFlamen extends BaseUndead {
    public override namespace = "AncientUnreadFlamen";
    public override name = "Ancient Unread Flamen";
    public override passive = false;

    public override targetMode = CreatureTargetMode.DamageCaused;
    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 2000;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D3D10;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(200, 300);

        this.setStr(20, 30);
        this.setDex(30, 45); 
        this.setInt(100, 150);
        this.setVig(100, 200);

        this.addAction("Firebolt", 50);
        this.addAction("Fireball", 30);
        this.addAction("Poisonbolt", 30);
        this.addAction("Poison", 5);
        this.addAction("Blink", 20);
        this.addAction("BlackHole", 5);

        this.setSkill(SkillName.Necromancy, 5);
        this.setSkill(SkillName.Elementarism, 4);

        this.loot.dropChance(GoldCoin, 90, 30, 100);
        this.loot.dropChance(Ruby, 5, 1, 1);
        this.loot.dropChance(BlackPlantWithThorns, 50, 1, 3);
        this.loot.dropChance(BloodBerry, 50, 1, 3);
        this.loot.dropChance(AncientRune, 1, 1, 1);
        this.loot.dropChance(SmallLifePotion, 30, 1, 2);
        this.loot.dropChance(SmallManaPotion, 30, 1, 3);
        this.loot.dropChance(DarknessEssence, 5, 1, 2);
        this.loot.dropChance(MagicDust, 1, 1, 2);
        this.loot.dropChance(AncientStaff, 0.1, 1);
        this.loot.dropChance(AncientDagger, 0.1, 1);
    }
}

Entity.addEntityBase("AncientUnreadFlamen", AncientUnreadFlamen);
import { Boss, Entity, Player } from "../../../entities";
import { Ametist, BaseAction } from "../../../";
import { CreatureCombatMode, CreatureTargetMode, DamageType, Dices } from "@enums";

import { 
    NatureEssence, ElementalDust, Diamond,
    Emerald, Dill, OilPlant, GoldCoin,
    AncientRune, FragmentWhiteCrystal, 
    FragmentGreenCrystal, BigTreasureChest 
} from "@items";

export class BigSlime extends Boss {
    public override namespace = "BigSlime";
    public override name = "Big Slime";
    public override passive = true;
    public override speed = 700;
    public override maxSummons = 5;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 500;
    public override maxDistanceToRespawn: number = 6000;
    public override pawnSenseRadius = 500;
    public override baseDamage = Dices.D6D10;

    public override individualRewards = [BigTreasureChest];
    public override steamReward = "BIGSLIME";
    
    constructor(){
        super();

        this.setLife(10000);
        this.setStr(10, 100);
        this.setVig(50, 100);

        this.addAction("Poisonbolt", 30);

        this.loot.dropChance(GoldCoin, 100, 300, 1000);
        this.loot.dropChance(NatureEssence, 100, 10, 20);
        this.loot.dropChance(ElementalDust, 100, 10, 20);
        this.loot.dropChance(FragmentWhiteCrystal, 100, 5, 10);
        this.loot.dropChance(FragmentGreenCrystal, 50, 1, 5);
        this.loot.dropChance(Dill, 50, 20, 30);
        this.loot.dropChance(OilPlant, 50, 20, 30);
        this.loot.dropChance(AncientRune, 50, 1);
        this.loot.dropChance(Emerald, 50, 1);
        this.loot.dropChance(Ametist, 100, 1);
        this.loot.dropChance(BigTreasureChest, 5, 1);
        this.loot.dropChance(Diamond, 5, 1);        
    }

    public override takeDamage(
        causer: Entity, 
        dice: Dices, 
        damageType: DamageType, 
        bonusDamage: number = 0, 
        action: BaseAction = null
    ){
        if(damageType === DamageType.Physic){
            super.takeDamage(causer, Dices.D1D4, damageType, 0);
            this.createSummons("Slime", causer);            
        }            
        else
            super.takeDamage(causer, dice, damageType, bonusDamage, action);
    }
}

Entity.addEntityBase("BigSlime", BigSlime);
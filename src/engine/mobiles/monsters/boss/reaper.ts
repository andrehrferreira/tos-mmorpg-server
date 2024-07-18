import { Boss, Entity } from "../../../entities";
import { BaseAction, DarknessEssence } from "../../../";
import { CreatureCombatMode, DamageType, Dices } from "@enums";

import { 
    NatureEssence, ElementalDust, Diamond,
    Emerald, GoldCoin, AncientRune, FragmentWhiteCrystal, 
    FragmentGreenCrystal, DemonHorn, ColdEssence, Ametist,
    BigTreasureChest, FragmentBlueCrystal, CardSoulReaper 
} from "@items";

export class Reaper extends Boss {
    public override namespace = "Reaper";
    public override name = "Soul Reaper";
    public override customVisual = "Reaper";
    public override passive = false;
    public override speed = 300;
    public override maxSummons = 10;

    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 3000;
    public override maxDistanceToRespawn: number = 6000;
    public override pawnSenseRadius = 5000;
    public override baseDamage = Dices.D6D8;

    //public override individualRewards = []
    public override steamReward = "SOULREAPER";
    
    constructor(){
        super();

        this.setLife(60000);
        this.setStr(10);
        this.setVig(1000);
        this.setInt(300, 400);

        this.addAction("Blink", 20);
        this.addAction("BlackHole", 20);
        this.addAction("Curse", 50);
        this.addAction("EchoOfTheDeath", 10);
        this.addAction("DrainVitality", 10);
        
        this.loot.dropChance(GoldCoin, 100, 300, 1000);
        this.loot.dropChance(NatureEssence, 100, 10, 20);
        this.loot.dropChance(ElementalDust, 100, 10, 20);
        this.loot.dropChance(DarknessEssence, 100, 2, 20);  
        this.loot.dropChance(FragmentWhiteCrystal, 100, 5, 10);
        this.loot.dropChance(FragmentGreenCrystal, 50, 1, 5);
        this.loot.dropChance(FragmentBlueCrystal, 50, 1);
        this.loot.dropChance(AncientRune, 50, 1);
        this.loot.dropChance(Emerald, 50, 1);
        this.loot.dropChance(Ametist, 50, 1);
        this.loot.dropChance(BigTreasureChest, 5, 1);
        this.loot.dropChance(Diamond, 5, 1); 
        this.loot.dropChance(DemonHorn, 100, 1);
        this.loot.dropChance(CardSoulReaper, 0.1, 1);
    }

    public override takeDamage(
        causer: Entity, 
        dice: Dices, 
        damageType: DamageType, 
        bonusDamage: number = 0, 
        action: BaseAction = null
    ){
        //if(damageType === DamageType.Physic)            
        //    this.createSummons("Skeleton", causer);            

        super.takeDamage(causer, dice, damageType, bonusDamage, action);
    }
}

Entity.addEntityBase("Reaper", Reaper);
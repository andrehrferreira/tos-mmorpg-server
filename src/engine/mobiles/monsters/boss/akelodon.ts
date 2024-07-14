import { Boss, Entity } from "../../../entities";
import { ActionType, Ametist, ColdEssence, FragmentBlueCrystal } from "../../../";
import { CreatureCombatMode, Dices } from "@enums";

import { 
    NatureEssence, ElementalDust, Diamond,
    Emerald, GoldCoin, AncientRune, FragmentWhiteCrystal, 
    FragmentGreenCrystal, TreasuresOfTheSea,
    BigTreasureChest, CardAkelodon 
} from "@items";

export class Akelodon extends Boss {
    public override namespace = "Akelodon";
    public override name = "Akelodon the Lord of Corals";
    public override customVisual = "BossWereshark";
    public override passive = false;
    public override speed = 500;

    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 1000;
    public override maxDistanceToRespawn: number = 5000;
    public override pawnSenseRadius = 3000;
    public override baseDamage = Dices.D6D8;

    public override individualRewards = [ TreasuresOfTheSea ];
    public override steamReward = "AKELODON";
    
    constructor(){
        super();

        this.setLife(60000);
        this.setStr(1000);
        this.setVig(1000);

        this.addAction("WaterField", 50, ActionType.Area, true);
        this.addAction("WaterStrike", 50, ActionType.Target, true);

        this.loot.dropChance(GoldCoin, 100, 300, 1000);
        this.loot.dropChance(NatureEssence, 100, 10, 20);
        this.loot.dropChance(ElementalDust, 100, 10, 20);
        this.loot.dropChance(ColdEssence, 100, 20, 50);  
        this.loot.dropChance(FragmentWhiteCrystal, 100, 5, 10);
        this.loot.dropChance(FragmentGreenCrystal, 50, 1, 5);
        this.loot.dropChance(FragmentBlueCrystal, 50, 1);
        this.loot.dropChance(AncientRune, 50, 1);
        this.loot.dropChance(Emerald, 50, 1);
        this.loot.dropChance(Ametist, 50, 1);
        this.loot.dropChance(BigTreasureChest, 5, 1);
        this.loot.dropChance(Diamond, 5, 1);  
        this.loot.dropChance(CardAkelodon, 0.1, 1);
    }
}

Entity.addEntityBase("Akelodon", Akelodon);
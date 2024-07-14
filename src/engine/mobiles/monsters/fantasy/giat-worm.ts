import { Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { CreatureCombatMode, Dices } from "@enums";

import { 
    SpinedHides, NatureEssence, ElementalDust,
    Emerald, Ametist, EdgyRoot, Dill, Root,
    FragmentWhiteCrystal, CardGiantWorm
} from "@items";

export class GiatWorm extends Creature {
    public override namespace = "GiatWorm";
    public override name = "Giat Worm";
    public override passive = false;
    public override speed: number = 0;
    public override skinnerResources = SpinedHides;
    public override skinnerAmount = Random.MinMaxInt(2, 6);
    public override skinnerTick = 2;
    public override skinnerGainExp = 3;

    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 0;
    public override maxDistanceToRespawn: number = 2000;
    public override pawnSenseRadius = 4000;
    public override baseDamage = Dices.D4D8;
    
    public override multipleVisual = [
        "GiatWorm", "GiatWorm2", 
        "GiatWorm3", "GiatWorm4"
    ]

    constructor(){
        super();

        this.setLife(150, 200);
        this.setStr(10, 30);
        this.setPoisonResistence(100);

        this.addAction("Poisonbolt", 50);
        this.addAction("Poison", 50);

        this.loot.dropChance(NatureEssence, 100, 1, 10);
        this.loot.dropChance(ElementalDust, 5, 1);
        this.loot.dropChance(Emerald, 1, 1);
        this.loot.dropChance(Ametist, 1, 1);
        this.loot.dropChance(EdgyRoot, 50, 1, 10);
        this.loot.dropChance(Dill, 50, 1, 10);
        this.loot.dropChance(Root, 50, 1, 10);
        this.loot.dropChance(Ametist, 1, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 1, 1);
        this.loot.dropChance(CardGiantWorm, 1, 1);
    }
}

Entity.addEntityBase("GiatWorm", GiatWorm);
import { DefaultLootType, Random } from "../../../core";
import { Creature, Entity } from "../../../entities";
import { CreatureCombatMode, Dices } from "@enums";

import { 
    NatureEssence, Leek,
    Mushrooms, Onion, Root,
    MoonStone, Sand, FragmentWhiteCrystal,
    ScaledHides, CardBomberBug
} from "@items";

export class BomberBug extends Creature {
    public override namespace = "BomberBug";
    public override name = "Bomber Bug";
    public override passive = false;
    public override speed: number = 600;
    public override skinnerResources = ScaledHides;
    public override skinnerAmount = Random.MinMaxInt(1, 3);
    public override skinnerTick = 1;
    public override skinnerGainExp = 1;

    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 400;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 2000;
    public override baseDamage = Dices.D1D8;
    
    public override multipleVisual = [
        "BomberBugBlack", "BomberBugBlue", 
        "BomberBugGreen", "BomberBugGrey", 
        "BomberBugPurple", "BomberBugRed", 
        "BomberBugWhite", "BomberBugYellow", 
        "BomberBugYellow2", 
    ]

    constructor(){
        super();

        this.setLife(50, 100);
        this.setStr(10, 30);
        this.setPoisonResistence(100);

        this.addAction("Poisonbolt", 50);
        this.addAction("Poison", 50);

        this.loot.dropChance(Sand, 100, 1, 10);
        this.loot.dropChance(NatureEssence, 5, 1, 2);
        this.loot.dropChance(Leek, 50, 1, 2);
        this.loot.dropChance(Onion, 50, 1, 2);
        this.loot.dropChance(Root, 50, 1, 2);
        this.loot.dropChance(Mushrooms, 5, 1);
        this.loot.dropChance(MoonStone, 0.1, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 5, 1);
        this.loot.dropChance(CardBomberBug, 1, 1);
    }
}

Entity.addEntityBase("BomberBug", BomberBug);
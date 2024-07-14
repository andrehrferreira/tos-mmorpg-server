import { Random } from "../../../core";
import { BaseDragon } from "../../bases-creature";
import {  Entity } from "../../../entities";
import { CreatureTargetMode, CreatureCombatMode, Dices } from "@enums";

import { 
    DrakeScale, DragonHides,
    Diamond, Emerald, GreenHerbMix,
    RedAndBlackLeaves, FragmentWhiteCrystal,
    DarknessEssence, Grimhammer, FragmentGreenCrystal, FragmentBlueCrystal 
} from "@items";

export class Dragonide extends BaseDragon {
    public override namespace = "Dragonide";
    public override name = "Dragonide";
    public override passive = false;
    public override skinnerResources = DragonHides;
    public override skinnerAmount = 2;
    public override skinnerTick = 1;
    public override skinnerGainExp = 1;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Melee;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 800;
    public override baseDamage = Dices.D3D8;
    public override speed = 900;

    public override multipleVisual = [
        "Dragonide", "Dragonide2", 
        "Dragonid3",  
    ]

    constructor(){
        super();

        this.setLife(1000, 2500);
        this.setStr(120, 200);
        this.setDex(20, 30);

        this.loot.dropChance(DrakeScale, 100, 1, 5);
        this.loot.dropChance(GreenHerbMix, 10, 1);
        this.loot.dropChance(RedAndBlackLeaves, 10, 1);
        this.loot.dropChance(DarknessEssence, 10, 1, 3);
        this.loot.dropChance(Diamond, 1, 1);
        this.loot.dropChance(Emerald, 1, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 80, 1, 5);
        this.loot.dropChance(FragmentGreenCrystal, 1, 1);
        this.loot.dropChance(FragmentBlueCrystal, 0.1, 1);
        this.loot.dropChance(Grimhammer, 20, 1);
    }
}

Entity.addEntityBase("Dragonide", Dragonide);
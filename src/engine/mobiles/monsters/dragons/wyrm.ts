import { BaseDragon } from "../../bases-creature";
import { Entity } from "../../../entities";

import { 
    CreatureTargetMode, CreatureCombatMode, 
    Dices, SkillName 
} from "@enums";

import { 
    DrakeScale, DragonHides,
    Diamond, Emerald, FragmentWhiteCrystal,
} from "@items";

export class WyrmBrown extends BaseDragon {
    public override namespace = "Wyrm";
    public override name = "Wyrm";
    public override passive = false;
    public override skinnerResources = DragonHides;
    public override skinnerAmount = 1;
    public override skinnerTick = 1;
    public override skinnerGainExp = 1;

    public override targetMode = CreatureTargetMode.Closer;
    public override combatMode = CreatureCombatMode.Ranged;
    public override movementDistance: number = 600;
    public override maxDistanceToRespawn: number = 4000;
    public override pawnSenseRadius = 2000;
    public override baseDamage = Dices.D3D8;
    public override speed = 600;

    constructor(){
        super();

        this.setLife(50, 80);
        this.setStr(10, 30);
        this.setDex(20, 30);
        this.setInt(50, 100);

        this.setSkill(SkillName.Elementarism, 5);
        this.addAction("Firebolt", 50);

        this.loot.dropChance(DrakeScale, 100, 1);
        this.loot.dropChance(Diamond, 1, 1);
        this.loot.dropChance(Emerald, 1, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 5, 1);
    }
}

export class WyrmPurple extends WyrmBrown {
    public override namespace = "Wyrm2";
}

export class WyrmMagical extends WyrmBrown {
    public override namespace = "Wyrm3";
}

export class WyrmFlame extends WyrmBrown {
    public override namespace = "Wyrm4";
}

Entity.addEntityBase(["Wyrm", "WyrmBrown"], WyrmBrown);
Entity.addEntityBase(["Wyrm2", "WyrmPurple"], WyrmPurple);
Entity.addEntityBase(["Wyrm3", "WyrmMagical"], WyrmMagical);
Entity.addEntityBase(["Wyrm4", "WyrmFlame"], WyrmFlame);
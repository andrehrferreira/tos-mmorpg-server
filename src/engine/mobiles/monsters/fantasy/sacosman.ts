import { BaseDemon } from "../../";
import { Entity } from "../../../entities";
import { Dices } from "@enums";

import { 
    GoldCoin, DemonHorn, FragmentWhiteCrystal, FragmentBlueCrystal, FragmentGreenCrystal
} from "@items";

export class SacosMan extends BaseDemon {
    public override namespace = "SacosMan";
    public override name = "Saco`s Man";
    public override customVisual = "Karampus3";
    public override passive = false;
    public override baseDamage = Dices.D4D12;
    public override speed: 600;

    constructor(){
        super();

        this.setLife(1000);
        this.setStr(250);

        this.addAction("Flamestrike", 30);
 
        this.loot.dropChance(GoldCoin, 100, 250, 500);
        this.loot.dropChance(DemonHorn, 100, 1);
        this.loot.dropChance(FragmentWhiteCrystal, 100, 1, 10);
        this.loot.dropChance(FragmentGreenCrystal, 20, 1, 2);
        this.loot.dropChance(FragmentBlueCrystal, 0.1, 1);
    }
}

Entity.addEntityBase("SacosMan", SacosMan);
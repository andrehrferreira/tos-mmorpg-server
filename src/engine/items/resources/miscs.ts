import { Dices } from "@enums";
import { Entity, ItemRarity } from "../../";
import { Consumable, Item, Items, Resource, Stackable } from "..";

export class GoldCoin extends Stackable {
    public Namespace: string = "GoldCoin";
    public Name: string = "Gold Coin";
    public Weight: number = 0.01;
}

export class SilverCoin extends Stackable {
    public Namespace: string = "SilverCoin";
    public Name: string = "Silver Coin";
    public GoldCost: number = 1000;
    public Weight: number = 0.01;
}

export class AncientMagicStoneRunes extends Item {
    public Namespace: string = "AncientMagicStoneRunes";
    public Name: string = "Ancient Magic Stone Runes";
    public GoldCost: number = 5000;
    public Weight: number = 0.1;
}

export class AncientRune extends Item {
    public Namespace: string = "AncientRune";
    public Name: string = "Ancient Rune";
    public GoldCost: number = 1000;
    public Weight: number = 0.1;
}

export class Bandage extends Consumable {
    public Namespace: string = "Bandage";
    public Name: string = "Bandage";
    public GoldCost: number = 1;
    public Weight: number = 0.01;

    public override use(entity: Entity){
        if(!entity.inHealAction){
            entity.inHealAction = true;

            this.execActionInterval(6, 2000, () => {
                let value = entity.rollDice(Dices.D1D4);
                entity.heal(entity, value);
            }).then(() => {
                entity.inHealAction = false;
            });
        }
    }
}

export class LockpickSet extends Resource {
    public Namespace: string = "LockpickSet";
    public Name: string = "Lockpick Set";
    public GoldCost: number = 10;
    public Weight: number = 0.1;
}

export class Sand extends Stackable {
    public Namespace: string = "Sand";
    public Name: string = "Sand";
    public GoldCost: number = 1;
    public Weight: number = 0.01;
}

Items.AddBaseItem("GoldCoin", GoldCoin);
Items.AddBaseItem("SilverCoin", SilverCoin);
Items.AddBaseItem("AncientMagicStoneRunes", AncientMagicStoneRunes);
Items.AddBaseItem("AncientRune", AncientRune);
Items.AddBaseItem("Bandage", Bandage);
Items.AddBaseItem("LockpickSet", LockpickSet);
Items.AddBaseItem("Sand", Sand);

//Others
export class BatWing extends Resource {
    public Namespace: string = "BatWing";
    public Name: string = "Bat Wing";
    public GoldCost: number = 5;
}

export class Bone extends Resource {
    public Namespace: string = "Bone";
    public Name: string = "Bone";
    public GoldCost: number = 5;
}

export class DeerSkull extends Resource {
    public Namespace: string = "DeerSkull";
    public Name: string = "Deer Skull";
    public GoldCost: number = 10;
    public Rarity = ItemRarity.Rare;
}

export class Feather extends Resource {
    public Namespace: string = "Feather";
    public Name: string = "Feather";
    public GoldCost: number = 1;
}

export class PhoenixFeather extends Resource {
    public Namespace: string = "PhoenixFeather";
    public Name: string = "Phoenix Feather";
    public GoldCost: number = 1000;
    public Rarity = ItemRarity.Rare;
}

export class Fin extends Resource {
    public Namespace: string = "Fin";
    public Name: string = "Fin";
    public GoldCost: number = 5;
}

export class Horn extends Resource {
    public Namespace: string = "Horn";
    public Name: string = "Horn";
    public GoldCost: number = 100;
    public Rarity = ItemRarity.Uncommon;
}

export class Line extends Resource {
    public Namespace: string = "Line";
    public Name: string = "Line";
    public GoldCost: number = 1;
}

export class MinotaurEye extends Resource {
    public Namespace: string = "MinotaurEye";
    public Name: string = "Minotaur Eye";
    public GoldCost: number = 100;
    public Rarity = ItemRarity.Uncommon;
}

export class MoonStone extends Resource {
    public Namespace: string = "MoonStone";
    public Name: string = "Moon Stone";
    public GoldCost: number = 1000;
    public Rarity = ItemRarity.Magic;
}

export class Parchment extends Resource {
    public Namespace: string = "Parchment";
    public Name: string = "Parchment";
    public GoldCost: number = 10;
}

export class Scarab extends Resource {
    public Namespace: string = "Scarab";
    public Name: string = "Scarab";
    public GoldCost: number = 2000;
    public Rarity = ItemRarity.Rare;
}

export class Shell extends Resource {
    public Namespace: string = "Shell";
    public Name: string = "Shell";
    public GoldCost: number = 100;
    public Rarity = ItemRarity.Uncommon;
}

export class Skull extends Resource {
    public Namespace: string = "Skull";
    public Name: string = "Skull";
    public GoldCost: number = 100;
    public Rarity = ItemRarity.Uncommon;
}

export class SlugSnail extends Resource {
    public Namespace: string = "SlugSnail";
    public Name: string = "Slug Snail";
    public GoldCost: number = 5;
}

export class SoulStone extends Resource {
    public Namespace: string = "SoulStone";
    public Name: string = "Soul Stone";
    public GoldCost: number = 5000;
    public Rarity = ItemRarity.Legendary;
}

export class SpiderFang extends Resource {
    public Namespace: string = "SpiderFang";
    public Name: string = "Spider Fang";
    public GoldCost: number = 5;
}

export class Sting extends Resource {
    public Namespace: string = "Sting";
    public Name: string = "Sting";
    public GoldCost: number = 5;
}

export class Tusk extends Resource {
    public Namespace: string = "Tusk";
    public Name: string = "Tusk";
    public GoldCost: number = 100;
    public Rarity = ItemRarity.Uncommon;
}

export class VitalityStone extends Resource {
    public Namespace: string = "VitalityStone";
    public Name: string = "Vitality Stone";
    public GoldCost: number = 3000;
    public Rarity = ItemRarity.Magic;
}

export class Wool extends Resource {
    public Namespace: string = "Wool";
    public Name: string = "Wool";
    public GoldCost: number = 1;
}

export class ViperTooth extends Resource {
    public Namespace: string = "ViperTooth";
    public Name: string = "Viper Tooth";
    public GoldCost: number = 5;
}

export class DemonHorn extends Resource {
    public Namespace = "DemonHorn";
    public Name = "Demon Horn";
    public GoldCost = 5;
    public Rarity = ItemRarity.Rare;
}

Items.AddBaseItem("BatWing", BatWing);
Items.AddBaseItem("Bone", Bone);
Items.AddBaseItem("DeerSkull", DeerSkull);
Items.AddBaseItem("Feather", Feather);
Items.AddBaseItem("PhoenixFeather", PhoenixFeather);
Items.AddBaseItem("Fin", Fin);
Items.AddBaseItem("Horn", Horn);
Items.AddBaseItem("Line", Line);
Items.AddBaseItem("MinotaurEye", MinotaurEye);
Items.AddBaseItem("MoonStone", MoonStone);
Items.AddBaseItem("Parchment", Parchment);
Items.AddBaseItem("Scarab", Scarab);
Items.AddBaseItem("Shell", Shell);
Items.AddBaseItem("Skull", Skull);
Items.AddBaseItem("SlugSnail", SlugSnail);
Items.AddBaseItem("SoulStone", SoulStone);
Items.AddBaseItem("SpiderFang", SpiderFang);
Items.AddBaseItem("Sting", Sting);
Items.AddBaseItem("Tusk", Tusk);
Items.AddBaseItem("VitalityStone", VitalityStone);
Items.AddBaseItem("Wool", Wool);
Items.AddBaseItem("ViperTooth", ViperTooth);
Items.AddBaseItem("DemonHorn", DemonHorn);

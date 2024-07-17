import { Random } from "@engine";

import { 
    Items, Ring, EquipamentTier, ItemRarity, 
    AttributeType 
} from "../../items";

//Crafting Rings
export class SilverRing extends Ring {
    public override Namespace = "SilverRing";
    public override Name = "Silver Ring";
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 1;
    public override Tier = EquipamentTier.T0;
    
    public override CraftingInfo = new Map([
        ["Tier", "0"],
        ["Attributes", "1"]
    ]);
}

export class RubySilverRing extends Ring {
    public override Namespace = "RubySilverRing";
    public override Name = "Ruby Silver Ring";
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],
        ["Attributes", "1-2"],
        ["Bonus Damage", "2-10"]
    ]);

    public override generateAttrs(){
        super.generateAttrs();
        this.setAttr(AttributeType.BonusDamage, Random.MinMaxInt(2, 10));
    }
}

export class SilverAndDiamondRing extends Ring {
    public override Namespace = "SilverAndDiamondRing";
    public override Name = "Silver And Diamond Ring";
    public override Weight = 1;
    public override GoldCost = 1200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2;
    
    public override CraftingInfo = new Map([
        ["Tier", "2"],
        ["Attributes", "1-2"],
        ["Cold Resistence", "2-10"],
        ["Poison Resistence", "2-10"],
        ["Fire Resistence", "2-10"],
        ["Energy Resistence", "2-10"]
    ]);

    public override generateAttrs(){
        super.generateAttrs();
        this.setColdResistence(Random.MinMaxInt(2, 10));
        this.setPoisonResistence(Random.MinMaxInt(2, 10));
        this.setFireResistence(Random.MinMaxInt(2, 10));
        this.setEnergyResistence(Random.MinMaxInt(2, 10));
    }
}

export class SunstoneSilverRing extends Ring {
    public override Namespace = "SunstoneSilverRing";
    public override Name = "Sunstone Silver Ring";
    public override Weight = 1;
    public override GoldCost = 1200;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],
        ["Attributes", "1-2"],
        ["Bonus Magic Damage", "2-10"]
    ]);

    public override generateAttrs(){
        super.generateAttrs();
        this.setAttr(AttributeType.BonusMagicDamage, Random.MinMaxInt(2, 10));
    }
}

export class GoldRing extends Ring {
    public override Namespace = "GoldRing";
    public override Name = "Gold Ring";
    public override Weight = 1;
    public override GoldCost = 500;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override CraftingInfo = new Map([
        ["Tier", "2"],
        ["Attributes", "1-2"]
    ]);
}

//Drop Rings
export class BoneRing extends Ring {
    public override Namespace = "BoneRing";
    public override Name = "Bone Ring";
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 
    public override Rarity = ItemRarity.Uncommon;

    public override CraftingInfo = new Map([
        ["Tier", "1"],
        ["Attributes", "1-2"],
        ["Armor", "2"]
    ]);

    public override generateAttrs(){
        super.generateAttrs();
        this.setArmor(2);
    }
}

//Class Rings
export class ArcherRing extends Ring {
    public override Namespace = "ArcherRing";
    public override Name = "Archer Ring";
    public override Weight = 1;
    public override GoldCost = 3000;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],
        ["Stamina Regen", "10"],
        ["Bonus Dex", "10"]
    ]);

    public override generateAttrs(){
        super.generateAttrs();
        this.setAttr(AttributeType.StaminaRegen, 10);
        this.setAttr(AttributeType.BonusDex, 10);
    }
}

export class WarriorRing extends Ring {
    public override Namespace = "WarriorRing";
    public override Name = "Warrior Ring";
    public override Weight = 1;
    public override GoldCost = 3000;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],
        ["Health Regen", "10"],
        ["Bonus Str", "10"]
    ]);

    public override generateAttrs(){
        super.generateAttrs();
        this.setAttr(AttributeType.HealthRegen, 10);
        this.setAttr(AttributeType.BonusStr, 10);
    }
}

export class WizardRing extends Ring {
    public override Namespace = "WizardRing";
    public override Name = "Wizard Ring";
    public override Weight = 1;
    public override GoldCost = 3000;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T3; 

    public override CraftingInfo = new Map([
        ["Tier", "3"],
        ["Mana Regen", "10"],
        ["Bonus Int", "10"]
    ]);

    public override generateAttrs(){
        super.generateAttrs();
        this.setAttr(AttributeType.ManaRegen, 10);
        this.setAttr(AttributeType.BonusInt, 10);
    }
}

Items.AddBaseItem("SilverRing", SilverRing);
Items.AddBaseItem("RubySilverRing", RubySilverRing);
Items.AddBaseItem("SunstoneSilverRing", SunstoneSilverRing);
Items.AddBaseItem("SilverAndDiamondRing", SilverAndDiamondRing);
Items.AddBaseItem("GoldRing", GoldRing);
Items.AddBaseItem("BoneRing", BoneRing);
Items.AddBaseItem("ArcherRing", ArcherRing);
Items.AddBaseItem("WarriorRing", WarriorRing);
Items.AddBaseItem("WizardRing", WizardRing);


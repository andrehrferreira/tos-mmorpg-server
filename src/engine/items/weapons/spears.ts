import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier } from "..";

export class Bardiche extends Weapon {
    public Namespace: string = "bardiche";
    public Name: string = "Bardiche";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D1D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D10"],
        ["Attributes", "1"]
    ]);
}

export class BecDeCorbyn extends Weapon {
    public Namespace: string = "ArzaonHalberd03";
    public Name: string = "Bec-De-Corbyn";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D3D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D10"],
        ["Attributes", "1-2"],
        ["Max Slots", "0-1"]
    ]);
}

export class DeadlyPole extends Weapon {
    public Namespace: string = "SM_wp_lance_01";
    public Name: string = "Deadly Pole";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D5D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "5D10"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class Glaive extends Weapon {
    public Namespace: string = "ArzaonHalberd08";
    public Name: string = "Glaive";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D2D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1"]
    ]);
}

export class Halberd extends Weapon {
    public Namespace: string = "ArzaonHalberd02";
    public Name: string = "Halberd";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D3D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D10"],
        ["Attributes", "1-2"],
        ["Max Slots", "0-1"]
    ]);
}

export class Harpoon extends Weapon {
    public Namespace: string = "ArzaonSpear03";
    public Name: string = "Harpoon";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D2D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1"]
    ]);
}

export class Impaler extends Weapon {
    public Namespace: string = "SM_wp_lance_01";
    public Name: string = "Impaler";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D4D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "3s"],
        ["Damage", "4D10"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class IronSpear extends Weapon {
    public Namespace: string = "ArzaonSpear08";
    public Name: string = "Iron Spear";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D1D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D10"],
        ["Attributes", "1"]
    ]);
}

export class Javelin extends Weapon {
    public Namespace: string = "ArzaonSpear06";
    public Name: string = "Javelin";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D1D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D10"],
        ["Attributes", "1"]
    ]);
}

export class Lance extends Weapon {
    public Namespace: string = "ArzaonSpear04";
    public Name: string = "Lance";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D1D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D10"],
        ["Attributes", "1"]
    ]);
}

export class OrnatedHalberd extends Weapon {
    public Namespace: string = "ArzaonHalberd06";
    public Name: string = "Ornated Halberd";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D2D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1"]
    ]);
}

export class Partisan extends Weapon {
    public Namespace: string = "partisan";
    public Name: string = "Partisan";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D4D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "3s"],
        ["Damage", "4D10"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class Pike extends Weapon {
    public Namespace: string = "ArzaonSpear05";
    public Name: string = "Pike";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D4D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "3s"],
        ["Damage", "4D10"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class Pitchfork extends Weapon {
    public Namespace: string = "SM_tool_pitchfork_01";
    public Name: string = "Pitchfork";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D1D8;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T0;
    public override GoldCost = 100;
    public override CraftingInfo = new Map([
        ["Tier", "0"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D8"],
        ["Attributes", "1"]
    ]);
}

export class Poleaxe extends Weapon {
    public Namespace: string = "ArzaonHalberd07";
    public Name: string = "Poleaxe";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D2D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1"]
    ]);
}

export class SimpleSpear extends Weapon {
    public Namespace: string = "ArzaonSpear07";
    public Name: string = "Simple Spear";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D1D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D10"],
        ["Attributes", "1"]
    ]);
}

export class Stingstaff extends Weapon {
    public Namespace: string = "ArzaonSpear02";
    public Name: string = "Stingstaff";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D2D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D10"],
        ["Attributes", "1"]
    ]);
}

export class Thornpike extends Weapon {
    public Namespace: string = "ArzaonSpear01";
    public Name: string = "Thornpike";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D3D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D10"],
        ["Attributes", "1-2"],
        ["Max Slots", "0-1"]
    ]);
}

export class TribalHalberd extends Weapon {
    public Namespace: string = "ArzaonHalberd05";
    public Name: string = "Tribal Halberd";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D5D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "5D10"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class UndeadSpear extends Weapon {
    public Namespace: string = "AncientUndeadSpear";
    public Name: string = "Undead Spear";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D5D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "5D10"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class VonzirsDespair extends Weapon {
    public Namespace: string = "AncientUndeadSpear";
    public Name: string = "Vonzir's Despair";
    public WeaponType: WeaponType = WeaponType.Spear;
    public Damage: Dices = Dices.D5D10;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "5D10"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

Items.AddBaseItem(["bardiche","Bardiche"], Bardiche);
Items.AddBaseItem(["ArzaonHalberd03","BecDeCorbyn"], BecDeCorbyn);
Items.AddBaseItem(["SM_wp_lance_01","DeadlyPole"], DeadlyPole);
Items.AddBaseItem(["ArzaonHalberd08","Glaive"], Glaive);
Items.AddBaseItem(["ArzaonHalberd02","Halberd"], Halberd);
Items.AddBaseItem(["ArzaonSpear03","Harpoon"], Harpoon);
Items.AddBaseItem(["SM_wp_lance_01","Impaler"], Impaler);
Items.AddBaseItem(["ArzaonSpear08","IronSpear"], IronSpear);
Items.AddBaseItem(["ArzaonSpear06","Javelin"], Javelin);
Items.AddBaseItem(["ArzaonSpear04","Lance"], Lance);
Items.AddBaseItem(["ArzaonHalberd06","OrnatedHalberd"], OrnatedHalberd);
Items.AddBaseItem(["partisan","Partisan"], Partisan);
Items.AddBaseItem(["ArzaonSpear05","Pike"], Pike);
Items.AddBaseItem(["SM_tool_pitchfork_01","Pitchfork"], Pitchfork);
Items.AddBaseItem(["ArzaonHalberd07","Poleaxe"], Poleaxe);
Items.AddBaseItem(["ArzaonSpear07","SimpleSpear"], SimpleSpear);
Items.AddBaseItem(["ArzaonSpear02","Stingstaff"], Stingstaff);
Items.AddBaseItem(["ArzaonSpear01","Thornpike"], Thornpike);
Items.AddBaseItem(["ArzaonHalberd05","TribalHalberd"], TribalHalberd);
Items.AddBaseItem(["AncientUndeadSpear","UndeadSpear"], UndeadSpear);
Items.AddBaseItem(["AncientUndeadSpear","VonzirsDespair"], VonzirsDespair);
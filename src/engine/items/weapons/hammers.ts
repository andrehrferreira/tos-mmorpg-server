import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier } from "..";

export class Earthshaker extends Weapon {
    public override Namespace = "ArzaonHammer03";
    public override Name = "Earthshaker";
    public override WeaponType = WeaponType.TwoHandedHammer;
    public override Damage = Dices.D5D12;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "3s"],
        ["Damage", "5D12"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class Grimhammer extends Weapon {
    public Namespace: string = "ArzaonHammer04";
    public Name: string = "Grimhammer";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D4D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "3s"],
        ["Damage", "4D12"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class ImprovisedClub extends Weapon {
    public Namespace: string = "SM_wp_club_01_b";
    public Name: string = "Improvised Club";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
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

export class Ironfury extends Weapon {
    public Namespace: string = "ArzaonHammer07";
    public Name: string = "Ironfury";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D3D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D12"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class LaxRage extends Weapon {
    public Namespace: string = "ArzaonHammer01";
    public Name: string = "Lax Rage";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D5D12;
    public AttackSpeed: number = 4;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "4s"],
        ["Damage", "5D12"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class LongHammer extends Weapon {
    public Namespace: string = "ArzaonHammer08";
    public Name: string = "Long Hammer";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D3D12;
    public AttackSpeed: number = 4;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "4s"],
        ["Damage", "3D12"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class LongMace extends Weapon {
    public Namespace: string = "ArzaonMace08";
    public Name: string = "Long Mace";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D1D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D12"],
        ["Attributes", "1"]
    ]);
}

export class Mace extends Weapon {
    public Namespace: string = "ArzaonMace04";
    public Name: string = "Mace";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D2D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D12"],
        ["Attributes", "1-2"]
    ]);
}

export class Martel extends Weapon {
    public Namespace: string = "ArzaonMace02";
    public Name: string = "Martel";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D2D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D12"],
        ["Attributes", "1-2"]
    ]);
}

export class MorningStar extends Weapon {
    public Namespace: string = "ArzaonMace07";
    public Name: string = "Morning Star";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D2D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D12"],
        ["Attributes", "1-2"]
    ]);
}

export class Skullcrusher extends Weapon {
    public Namespace: string = "ArzaonMace06";
    public Name: string = "Skullcrusher";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D1D12;
    public AttackSpeed: number = 4;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D12"],
        ["Attributes", "1"]
    ]);
}

export class Sledgehammer extends Weapon {
    public Namespace: string = "ArzaonHammer05";
    public Name: string = "Sledgehammer";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D4D12;
    public AttackSpeed: number = 4;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "4s"],
        ["Damage", "4D12"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class SpikedClub extends Weapon {
    public Namespace: string = "SM_wp_club_01_a";
    public Name: string = "Spiked Club";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D1D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D12"],
        ["Attributes", "1"]
    ]);
}

export class SpikedMace extends Weapon {
    public Namespace: string = "ArzaonMace01";
    public Name: string = "Spiked Mace";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D3D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D12"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class SpikedThing extends Weapon {
    public Namespace: string = "BallOfThorns";
    public Name: string = "Spiked Thing";
    public WeaponType: WeaponType = WeaponType.TwoHandedHammer;
    public Damage: Dices = Dices.D3D12;
    public AttackSpeed: number = 3;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "3s"],
        ["Damage", "3D12"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class Steelcrush extends Weapon {
    public override Namespace = "ArzaonHammer06";
    public override Name = "Steelcrush";
    public override WeaponType = WeaponType.TwoHandedHammer;
    public override Damage = Dices.D4D12;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "3s"],
        ["Damage", "4D12"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class Stormbreaker extends Weapon {
    public override Namespace = "ArzaonHammer02";
    public override Name = "Stormbreaker";
    public override WeaponType = WeaponType.TwoHandedHammer;
    public override Damage = Dices.D5D12;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "4s"],
        ["Damage", "5D12"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class Voidhammer extends Weapon {
    public override Namespace = "ArzaonMace05";
    public override Name = "Voidhammer";
    public override WeaponType = WeaponType.TwoHandedHammer;
    public override Damage = Dices.D2D12;
    public override AttackSpeed = 4;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "3s"],
        ["Damage", "2D12"],
        ["Attributes", "1-2"]
    ]);
}

export class WeirdClub extends Weapon {
    public override Namespace = "SM_wp_blunt_01_spiky";
    public override Name = "Weird Club";
    public override WeaponType = WeaponType.TwoHandedHammer;
    public override Damage = Dices.D1D12;
    public override AttackSpeed = 3;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "3s"],
        ["Damage", "1D12"],
        ["Attributes", "1"]
    ]);
}

Items.AddBaseItem(["ArzaonHammer03","Earthshaker"], Earthshaker);
Items.AddBaseItem(["ArzaonHammer04","Grimhammer"], Grimhammer);
Items.AddBaseItem(["SM_wp_club_01_b","ImprovisedClub"], ImprovisedClub);
Items.AddBaseItem(["ArzaonHammer07","Ironfury"], Ironfury);
Items.AddBaseItem(["ArzaonHammer01","LaxRage"], LaxRage);
Items.AddBaseItem(["ArzaonHammer08","LongHammer"], LongHammer);
Items.AddBaseItem(["ArzaonMace08","LongMace"], LongMace);
Items.AddBaseItem(["ArzaonMace04","Mace"], Mace);
Items.AddBaseItem(["ArzaonMace02","Martel"], Martel);
Items.AddBaseItem(["ArzaonMace07","MorningStar"], MorningStar);
Items.AddBaseItem(["ArzaonMace06","Skullcrusher"], Skullcrusher);
Items.AddBaseItem(["ArzaonHammer05","Sledgehammer"], Sledgehammer);
Items.AddBaseItem(["SM_wp_club_01_a","SpikedClub"], SpikedClub);
Items.AddBaseItem(["ArzaonMace01","SpikedMace"], SpikedMace);
Items.AddBaseItem(["BallOfThorns","SpikedThing"], SpikedThing);
Items.AddBaseItem(["ArzaonHammer06","Steelcrush"], Steelcrush);
Items.AddBaseItem(["ArzaonHammer02","Stormbreaker"], Stormbreaker);
Items.AddBaseItem(["ArzaonMace05","Voidhammer"], Voidhammer);
Items.AddBaseItem(["SM_wp_blunt_01_spiky","WeirdClub"], WeirdClub);
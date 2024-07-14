import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier } from "..";

export class AncientStaff extends Weapon {
    public override Namespace = "AncientUndeadStick";
    public override Name = "Ancient Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class ArchmageStaff extends Weapon {
    public override Namespace = "SM_wpn_mage_staff_02";
    public override Name = "Archmage Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D4D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "2s"],
        ["Damage", "4D6"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class BrilliantStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_04";
    public override Name = "Brilliant Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D4D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "2s"],
        ["Damage", "4D6"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class Broom extends Weapon { 
    public override Namespace = "SM_tool_broom_01";
    public override Name = "Broom";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T0;
    public override GoldCost = 100;
    public override CraftingInfo = new Map([
        ["Tier", "0"],        
        ["Attack Speed", "2s"],
        ["Damage", "1D4"],
        ["Attributes", "1"]
    ]);
}

export class CrystalStaff extends Weapon {
    public override Namespace = "wpn_staff_cultist_03";
    public override Name = "Crystal Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "2s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class CursedStaff extends Weapon {
    public override Namespace = "wpn_staff_cultist_01";
    public override Name = "Cursed Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "2s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class CemeteryStaff extends Weapon {
    public override Namespace = "wpn_staff_cultist_04";
    public override Name = "Cemetery Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class DoubleEdgedStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_08";
    public override Name = "Double Edged Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "2s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class DruidicStaff extends Weapon {
    public override Namespace = "SM_wp_staff_druid_01_b";
    public override Name = "Druidic Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "2s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class EnervatedStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_01";
    public override Name = "Enervated Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T2;
    public override GoldCost = 600;
    public override CraftingInfo = new Map([
        ["Tier", "2"],        
        ["Attack Speed", "2s"],
        ["Damage", "2D6"],
        ["Attributes", "1-2"]
    ]);
}

export class ForestStaff extends Weapon {
    public override Namespace = "SM_wpn_mage_staff_01";
    public override Name = "Forest Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "2s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class JudgementStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_05";
    public override Name = "Judgement Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class MagincerStaff extends Weapon {
    public override Namespace = "SM_wpn_mage_staff_04";
    public override Name = "Magincer Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D4D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "2s"],
        ["Damage", "4D6"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

export class NoviceStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_03";
    public override Name = "Novice Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "2s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class OrbStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_11";
    public override Name = "Orb Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "2s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class PriestStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_02";
    public override Name = "Priest Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D1D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "2s"],
        ["Damage", "1D6"],
        ["Attributes", "1"]
    ]);
}

export class ShepherdStaff extends Weapon {
    public override Namespace = "SM_wp_staff_druid_01_a";
    public override Name = "Shepherd Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T0;
    public override GoldCost = 100;
    public override CraftingInfo = new Map([
        ["Tier", "0"],        
        ["Attack Speed", "2s"],
        ["Damage", "1D4"],
        ["Attributes", "1"]
    ]);
}

export class TribalStaff extends Weapon {
    public override Namespace = "SKM_wp_staff_druid_01_b";
    public override Name = "Tribal Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D2D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T1;
    public override GoldCost = 300;
    public override CraftingInfo = new Map([
        ["Tier", "1"],        
        ["Attack Speed", "2s"],
        ["Damage", "2D6"],
        ["Attributes", "1"]
    ]);
}

export class VoidStaff extends Weapon {
    public override Namespace = "wpn_staff_cultist_02";
    public override Name = "Void Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D3D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T3;
    public override GoldCost = 1200;
    public override CraftingInfo = new Map([
        ["Tier", "3"],        
        ["Attack Speed", "2s"],
        ["Damage", "3D6"],
        ["Attributes", "2-3"],
        ["Max Slots", "0-1"]
    ]);
}

export class VolcanicStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_06";
    public override Name = "Volcanic Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D4D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T4;
    public override GoldCost = 2000;
    public override CraftingInfo = new Map([
        ["Tier", "4"],        
        ["Attack Speed", "2s"],
        ["Damage", "4D6"],
        ["Attributes", "3-4"],
        ["Max Slots", "0-2"]
    ]);
}

/*export class WoodenStaff extends Weapon {
    public override Namespace = "SM_wpn_mage_staff_03";
    public override Name = "Wooden Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D1D4;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T0;
    public override GoldCost = 100;
}*/

export class HolyStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_09";
    public override Name = "Holy Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class EnergyStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_10";
    public override Name = "Energy Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class SunStaff extends Weapon {
    public override Namespace = "SM_fantasy_staff_set05_07";
    public override Name = "Sun Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D5D6;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

export class DiabolicStaff extends Weapon {
    public override Namespace = "DiabolicStaff";
    public override Name = "Diabolic's Staff";
    public override WeaponType = WeaponType.Staff;
    public override Damage = Dices.D6D12;
    public override AttackSpeed = 0.1;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 3000;
    public override CraftingInfo = new Map([
        ["Tier", "5"],        
        ["Attack Speed", "2s"],
        ["Damage", "5D6"],
        ["Attributes", "4"],
        ["Max Slots", "0-3"]
    ]);
}

Items.AddBaseItem(["AncientUndeadStick","AncientStaff"], AncientStaff);
Items.AddBaseItem(["SM_wpn_mage_staff_02","ArchmageStaff"], ArchmageStaff); 
Items.AddBaseItem(["SM_fantasy_staff_set05_04","BrilliantStaff"], BrilliantStaff); 
Items.AddBaseItem(["SM_tool_broom_01","Broom"], Broom); 
Items.AddBaseItem(["wpn_staff_cultist_03","CrystalStaff"], CrystalStaff); 
Items.AddBaseItem(["wpn_staff_cultist_01","CursedStaff"], CursedStaff); 
Items.AddBaseItem(["wpn_staff_cultist_04", "CemeteryStaff"], CemeteryStaff); 
Items.AddBaseItem(["SM_fantasy_staff_set05_08","DoubleEdgedStaff"], DoubleEdgedStaff); 
Items.AddBaseItem(["SM_wp_staff_druid_01_b","DruidicStaff"], DruidicStaff); 
Items.AddBaseItem(["SM_fantasy_staff_set05_01","EnervatedStaff"], EnervatedStaff); 
Items.AddBaseItem(["SM_wpn_mage_staff_01","ForestStaff"], ForestStaff); 
Items.AddBaseItem(["SM_wpn_mage_staff_04","MagincerStaff"], MagincerStaff); 
Items.AddBaseItem(["SM_fantasy_staff_set05_03","NoviceStaff"], NoviceStaff); 
Items.AddBaseItem(["SM_fantasy_staff_set05_11","OrbStaff"], OrbStaff); 
Items.AddBaseItem(["SM_fantasy_staff_set05_02","PriestStaff"], PriestStaff); 
Items.AddBaseItem(["SM_wp_staff_druid_01_a","ShepherdStaff"], ShepherdStaff); 
Items.AddBaseItem(["SKM_wp_staff_druid_01_b","TribalStaff"], TribalStaff); 
Items.AddBaseItem(["wpn_staff_cultist_02","VoidStaff"], VoidStaff);
Items.AddBaseItem(["SM_fantasy_staff_set05_06","VolcanicStaff"], VolcanicStaff);
//Items.AddBaseItem(["SM_wpn_mage_staff_03","WoodenStaff"], WoodenStaff);
Items.AddBaseItem(["SM_fantasy_staff_set05_05","JudgementStaff"], JudgementStaff);
Items.AddBaseItem(["SM_fantasy_staff_set05_09","HolyStaff"], HolyStaff);
Items.AddBaseItem(["SM_fantasy_staff_set05_10","EnergyStaff"], EnergyStaff);
Items.AddBaseItem(["SunStaff", "SM_fantasy_staff_set05_07"], SunStaff);
Items.AddBaseItem(["DiabolicStaff"], DiabolicStaff);

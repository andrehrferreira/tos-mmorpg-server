import { 
    Equipament, EquipamentTier, 
    EquipamentType, EquipmentWeight, 
    Items 
} from "../../items";

export class ArmoredDarkPlateGloves extends Equipament {
    public override Namespace = "sk_ma_gauntlet_death_01_b";
    public override Name = "Armored Dark Plate Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class ArmoredKnightGloves extends Equipament {
    public override Namespace = "SK_gloves_03_b";
    public override Name = "Armored Knight Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class ArmoredRoyalGuardGloves extends Equipament {
    public override Namespace = "SK_gloves_03_a";
    public override Name = "Armored Royal Guard Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 5;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class BardGloves extends Equipament {
    public override Namespace = "SK_gloves_02_a";
    public override Name = "Bard Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class BattleplateGloves extends Equipament {
    public override Namespace = "SK_ma_bracers_heavy_04_b";
    public override Name = "Battleplate Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class BracerOfEndingVisions extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_bracers_cloth_a";
    public override Name = "Bracer Of Ending Visions";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class CataclysmicMailFists extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_musc_bracers_04_metal_001";
    public override Name = "Cataclysmic Mail Fists";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class ChampionGloves extends Equipament {
    public override Namespace = "sk_ma_gauntlet_death_01_c";
    public override Name = "Champion Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 3;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class ChampionScaledHands extends Equipament {
    public override Namespace = "SK_gloves_01_e";
    public override Name = "Champion Scaled Hands";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class CombatantBracer extends Equipament {
    public override Namespace = "SK_gloves_01_e";
    public override Name = "Combatant Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class ConquerorsMailGloves extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_skeleton_bracers_01";
    public override Name = "Conqueror's Mail Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 3;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class DarkPlateGloves extends Equipament {
    public override Namespace = "sk_ma_gauntlet_death_01_e";
    public override Name = "Dark Plate Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class DefenderOfBlightBracer extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_barbar_bracers_light_01_001";
    public override Name = "Defender Of Blight Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 1000;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class DragonhideLeatherGloves extends Equipament {
    public override Namespace = "sk_ma_gauntlet_01";
    public override Name = "Dragonhide Leather Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class GlovesOfCursedComrades extends Equipament {
    public override Namespace = "sk_ma_gauntlet_death_01_d";
    public override Name = "Gloves Of Cursed Comrades";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class GlovesOfEndingWarlords extends Equipament {
    public override Namespace = "sk_ma_gauntlet_dragon_01_b";
    public override Name = "Gloves Of Ending Warlords";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 20;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class GlovesOfRelentlessSorrow extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_musc_gloves_spiky_001";
    public override Name = "Gloves Of Relentless Sorrow";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class GlovesOfTheTalon extends Equipament {
    public override Namespace = "SK_gloves_01_a";
    public override Name = "Gloves Of The Talon";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 500;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class GranArcaneBracer extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_caster_bracers_01_light";
    public override Name = "Gran Arcane Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class GreatleatherGloves extends Equipament {
    public override Namespace = "SK_gloves_01_b";
    public override Name = "Greatleather Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class GuanrdianGloves extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_skeleton_bracers_03";
    public override Name = "Guanrdian Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class GuardOfTheLightGloves extends Equipament {
    public override Namespace = "SK_ma_bracers_heavy_04_a";
    public override Name = "Guard Of The Light Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class GuardiansHeavyLeatherGrasps extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_bracers_d";
    public override Name = "Guardian's Heavy Leather Grasps";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class HandguardsOfAncientPower extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_bracers_cloth_a";
    public override Name = "Handguards Of Ancient Power";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class HeavyLeatherGrasps extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_barbar_bracers_leather_02_001";
    public override Name = "Heavy Leather Grasps";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class HideGlovesOfShadowWhispers extends Equipament {
    public override Namespace = "SK_ma_bracers_heavy_04_e";
    public override Name = "Hide Gloves Of Shadow Whispers";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class IronGrips extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_bracer_c";
    public override Name = "Iron Grips";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class IvoryGloves extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_skeleton_bracers_01";
    public override Name = "Ivory Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 4;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class LeatherBracer extends Equipament {
    public override Namespace = "SK_gloves_01_d";
    public override Name = "Leather Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class MagicianBracer extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_bracers_cloth_b";
    public override Name = "Magician Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1, 2);
    }
}

export class MercenaryGloves extends Equipament {
    public override Namespace = "sk_ma_gauntlet_death_01_a2";
    public override Name = "Mercenary Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class MobilityGloves extends Equipament {
    public override Namespace = "SK_gloves_04_a";
    public override Name = "Mobility Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 320;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class NatureProtectorBrace extends Equipament {
    public override Namespace = "SK_gloves_01_c_";
    public override Name = "Nature Protector Brace";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class NatureProtectorGloves extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_bracer_b";
    public override Name = "Nature Protector Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class PromiseOfVengeanceGloves extends Equipament {
    public override Namespace = "SK_ma_bracers_heavy_03_a";
    public override Name = "Promise Of Vengeance Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 2000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class RecruitsGauntlets extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_skeleton_bracers_02";
    public override Name = "Recruit's Gauntlets";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class RoaringMailGloves extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_bracer_c";
    public override Name = "Roaring Mail Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class SanctunGloves extends Equipament {
    public override Namespace = "SK_ma_bracers_heavy_04_c";
    public override Name = "Sanctun Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

export class SavageWoolGauntlets extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_barbar_glove_01_a_001";
    public override Name = "Savage Wool Gauntlets";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class ShadowHideGrips extends Equipament {
    public override Namespace = "SK_ma_bracers_heavy_04_d";
    public override Name = "Shadow Hide Grips";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 5;
    public override GoldCost = 800;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T3; 

    public override generateAttrs(){
        this.setArmor(2,4);
    }
}

export class SoldierGloves extends Equipament {
    public override Namespace = "SK_fe_meta_tal_nrw_musc_bracers_03_b_001";
    public override Name = "Soldier Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 2;
    public override GoldCost = 800;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class SpikedMailBracer extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_barbar_bracers_leather_02_001";
    public override Name = "Spiked Mail Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Medium;
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 3;
    public override Tier = EquipamentTier.T2; 

    public override generateAttrs(){
        this.setArmor(2,3);
    }
}

export class SturdyBracer extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_barbar_bracers_leather_02_001";
    public override Name = "Sturdy Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 2;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class TrooperBracer extends Equipament {
    public override Namespace = "SK_ma_tal_nrw_skeleton_bracers_02";
    public override Name = "Trooper Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class UnholyGloves extends Equipament {
    public override Namespace = "sk_ma_gauntlet_death_01_a";
    public override Name = "Unholy Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 1000;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T5; 

    public override generateAttrs(){
        this.setArmor(5,8);
    }
}

export class VengefulClothHands extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_caster_bracers_cloth_c";
    public override Name = "Vengeful Cloth Hands";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 100;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T2; 

    public override generateAttrs(){
        this.setArmor(1,2);
    }
}

export class WitchBracer extends Equipament {
    public override Namespace = "SK_ma_meta_tal_nrw_cultist_bracer_b";
    public override Name = "Witch Bracer";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Light;
    public override Weight = 1;
    public override GoldCost = 20;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T0; 

    public override generateAttrs(){
        this.setArmor(1);
    }
}

export class WrathfulGloves extends Equipament {
    public override Namespace = "sk_ma_gauntlet_death_01_b_fur";
    public override Name = "Wrathful Gloves";
    public override EquipamentType = EquipamentType.Gloves;
    public override EquipmentWeight = EquipmentWeight.Heavy;
    public override Weight = 10;
    public override GoldCost = 800;
    public override MaxAttrs = 4;
    public override Tier = EquipamentTier.T4; 

    public override generateAttrs(){
        this.setArmor(3,5);
    }
}

Items.AddBaseItem(["sk_ma_gauntlet_death_01_b","ArmoredDarkPlateGloves"], ArmoredDarkPlateGloves);
Items.AddBaseItem(["SK_gloves_03_b","ArmoredKnightGloves"], ArmoredKnightGloves);
Items.AddBaseItem(["SK_gloves_03_a","ArmoredRoyalGuardGloves"], ArmoredRoyalGuardGloves);
Items.AddBaseItem(["SK_gloves_02_a","BardGloves"], BardGloves);
Items.AddBaseItem(["SK_ma_bracers_heavy_04_b","BattleplateGloves"], BattleplateGloves);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_bracers_cloth_a","BracerOfEndingVisions"], BracerOfEndingVisions);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_musc_bracers_04_metal_001","CataclysmicMailFists"], CataclysmicMailFists);
Items.AddBaseItem(["sk_ma_gauntlet_death_01_c","ChampionGloves"], ChampionGloves);
Items.AddBaseItem(["SK_gloves_01_e","ChampionScaledHands"], ChampionScaledHands);
Items.AddBaseItem(["SK_gloves_01_e","CombatantBracer"], CombatantBracer);
Items.AddBaseItem(["SK_ma_tal_nrw_skeleton_bracers_01","ConquerorsMailGloves"], ConquerorsMailGloves);
Items.AddBaseItem(["sk_ma_gauntlet_death_01_e","DarkPlateGloves"], DarkPlateGloves);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_barbar_bracers_light_01_001","DefenderOfBlightBracer"], DefenderOfBlightBracer);
Items.AddBaseItem(["sk_ma_gauntlet_01","DragonhideLeatherGloves"], DragonhideLeatherGloves);
Items.AddBaseItem(["sk_ma_gauntlet_death_01_d","GlovesOfCursedComrades"], GlovesOfCursedComrades);
Items.AddBaseItem(["sk_ma_gauntlet_dragon_01_b","GlovesOfEndingWarlords"], GlovesOfEndingWarlords);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_musc_gloves_spiky_001","GlovesOfRelentlessSorrow"], GlovesOfRelentlessSorrow);
Items.AddBaseItem(["SK_gloves_01_a","GlovesOfTheTalon"], GlovesOfTheTalon);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_caster_bracers_01_light","GranArcaneBracer"], GranArcaneBracer);
Items.AddBaseItem(["SK_gloves_01_b","GreatleatherGloves"], GreatleatherGloves);
Items.AddBaseItem(["SK_ma_tal_nrw_skeleton_bracers_03","GuanrdianGloves"], GuanrdianGloves);
Items.AddBaseItem(["SK_ma_bracers_heavy_04_a","GuardOfTheLightGloves"], GuardOfTheLightGloves);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_bracers_d","GuardiansHeavyLeatherGrasps"], GuardiansHeavyLeatherGrasps);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_bracers_cloth_a","HandguardsOfAncientPower"], HandguardsOfAncientPower);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_barbar_bracers_leather_02_001","HeavyLeatherGrasps"], HeavyLeatherGrasps);
Items.AddBaseItem(["SK_ma_bracers_heavy_04_e","HideGlovesOfShadowWhispers"], HideGlovesOfShadowWhispers);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_bracer_c","IronGrips"], IronGrips);
Items.AddBaseItem(["SK_ma_tal_nrw_skeleton_bracers_01","IvoryGloves"], IvoryGloves);
Items.AddBaseItem(["SK_gloves_01_d","LeatherBracer"], LeatherBracer);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_bracers_cloth_b","MagicianBracer"], MagicianBracer);
Items.AddBaseItem(["sk_ma_gauntlet_death_01_a2","MercenaryGloves"], MercenaryGloves);
Items.AddBaseItem(["SK_gloves_04_a","MobilityGloves"], MobilityGloves);
Items.AddBaseItem(["SK_gloves_01_c_","NatureProtectorBrace"], NatureProtectorBrace);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_bracer_b","NatureProtectorGloves"], NatureProtectorGloves);
Items.AddBaseItem(["SK_ma_bracers_heavy_03_a","PromiseOfVengeanceGloves"], PromiseOfVengeanceGloves);
Items.AddBaseItem(["SK_ma_tal_nrw_skeleton_bracers_02","RecruitsGauntlets"], RecruitsGauntlets);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_bracer_c","RoaringMailGloves"], RoaringMailGloves);
Items.AddBaseItem(["SK_ma_bracers_heavy_04_c","SanctunGloves"], SanctunGloves);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_barbar_glove_01_a_001","SavageWoolGauntlets"], SavageWoolGauntlets);
Items.AddBaseItem(["SK_ma_bracers_heavy_04_d","ShadowHideGrips"], ShadowHideGrips);
Items.AddBaseItem(["SK_fe_meta_tal_nrw_musc_bracers_03_b_001","SoldierGloves"], SoldierGloves);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_barbar_bracers_leather_02_001","SpikedMailBracer"], SpikedMailBracer);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_barbar_bracers_leather_02_001","SturdyBracer"], SturdyBracer);
Items.AddBaseItem(["SK_ma_tal_nrw_skeleton_bracers_02","TrooperBracer"], TrooperBracer);
Items.AddBaseItem(["sk_ma_gauntlet_death_01_a","UnholyGloves"], UnholyGloves);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_caster_bracers_cloth_c","VengefulClothHands"], VengefulClothHands);
Items.AddBaseItem(["SK_ma_meta_tal_nrw_cultist_bracer_b","WitchBracer"], WitchBracer);
Items.AddBaseItem(["sk_ma_gauntlet_death_01_b_fur","WrathfulGloves"], WrathfulGloves);

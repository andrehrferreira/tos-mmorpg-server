import { Dices } from "@enums";
import { Items, Weapon, WeaponType, EquipamentTier, ItemRarity } from "..";

export class ShadowScythe extends Weapon {
    public override Namespace = "ShadowScythe";
    public override Name = "Shadow's Scythe";
    public override WeaponType = WeaponType.Axe;
    public override Damage = Dices.D6D8;
    public override AttackSpeed = 2;
    public override Tier = EquipamentTier.T5;
    public override GoldCost = 1;
    public override Rarity = ItemRarity.Unique;
}

Items.AddBaseItem("ShadowScythe", ShadowScythe);
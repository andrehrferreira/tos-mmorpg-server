import { ItemRarity, Items, MountItem } from "..";

export class MountHorse extends MountItem {
    public override Namespace = "MountHorse";
    public override Name = "Horse";
    public override Rarity = ItemRarity.Common;
}

Items.AddBaseItem("MountHorse", MountHorse);
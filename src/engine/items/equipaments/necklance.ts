import { Random } from "@engine";

import { 
    Items, Necklance, EquipamentTier
} from "../../items";

export class AmetistNecklace extends Necklance {
    public override Namespace = "AmetistNecklace";
    public override Name = "Ametist Necklace";
    public override Weight = 1;
    public override GoldCost = 2000;
    public override MaxAttrs = 2;
    public override Tier = EquipamentTier.T1; 

    public override CraftingInfo = new Map([
        ["Tier", "1"],
        ["Light Resistence", "2-10"],
        ["Dark Resistence", "2-10"]
    ]);

    public override generateAttrs(){
        this.setLightResistence(Random.MinMaxInt(2, 10));
        this.setDarkResistence(Random.MinMaxInt(2, 10));
    }
}

Items.AddBaseItem("AmetistNecklace", AmetistNecklace);
import { BaseChest } from ".";

import { 
    Items, GoldCoin, Emerald, Diamond, Ametist,
    Pearl, Ruby, Sunstone, Topaz, FragmentWhiteCrystal,
    FragmentGreenCrystal, FragmentBlueCrystal, 
    FragmentOrangeCrystal, ItemRarity, ColdEssence, 
    NatureEssence
} from "../../items";

export class TreasuresOfTheSea extends BaseChest {
    public override Namespace: string = "TreasuresOfTheSea";
    public override Name: string = "Treasures Of The Sea";
    public override GoldCost: number = 10000; 
    public override Rarity = ItemRarity.Rare;

    constructor(){
        super();   
        
        this.dropChance(GoldCoin, 100, 3000, 5000);
        this.dropChance(ColdEssence, 100, 30, 50);
        this.dropChance(NatureEssence, 100, 20, 30);
        
        //Stones
        this.dropChance(Pearl, 100, 1, 3);
        this.dropChance(Emerald, 50, 1);
        this.dropChance(Diamond, 50, 1);
        this.dropChance(Ametist, 50, 1);
        this.dropChance(Ruby, 1, 1);
        this.dropChance(Sunstone, 1, 1);
        this.dropChance(Topaz, 1, 1);

        //Transmutation
        this.dropChance(FragmentWhiteCrystal, 100, 10, 20);
        this.dropChance(FragmentGreenCrystal, 90, 5, 10);
        this.dropChance(FragmentBlueCrystal, 30, 1, 5);
        this.dropChance(FragmentOrangeCrystal, 1, 1);
    }
}

Items.AddBaseItem("TreasuresOfTheSea", TreasuresOfTheSea);
import { BaseChest } from ".";

import { 
    Items, GoldCoin, Emerald, Diamond, Ametist,
    Pearl, Ruby, Sunstone, Topaz, FragmentWhiteCrystal,
    FragmentGreenCrystal, FragmentBlueCrystal, FragmentOrangeCrystal
} from "../../items";

export class BigTreasureChest extends BaseChest {
    public Namespace: string = "BigTreasureChest";
    public Name: string = "Big Treasure Chest";
    public GoldCost: number = 1; 

    constructor(){
        super();   
        
        this.dropChance(GoldCoin, 100, 500, 3000);
        
        //Stones
        this.dropChance(Emerald, 50, 1);
        this.dropChance(Diamond, 1, 1);
        this.dropChance(Ametist, 50, 1);
        this.dropChance(Pearl, 10, 1);
        this.dropChance(Ruby, 10, 1);
        this.dropChance(Sunstone, 1, 1);
        this.dropChance(Topaz, 10, 1);

        //Transmutation
        this.dropChance(FragmentWhiteCrystal, 100, 5, 10);
        this.dropChance(FragmentGreenCrystal, 50, 1, 5);
        this.dropChance(FragmentBlueCrystal, 10, 1);
        this.dropChance(FragmentOrangeCrystal, 0.1, 1);
    }
}

Items.AddBaseItem("BigTreasureChest", BigTreasureChest);
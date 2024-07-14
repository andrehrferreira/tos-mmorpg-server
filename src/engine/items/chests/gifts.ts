import { BaseChest } from ".";

import { 
    Items, GoldCoin, Emerald, Diamond, Ametist,
    Pearl, Ruby, Sunstone, Topaz, FragmentWhiteCrystal,
    FragmentGreenCrystal, FragmentBlueCrystal, FragmentOrangeCrystal, CardAkelodon, CardBigSlime, CardFabio, CardBomberBug, CardSkeleton, CardSlime, PowerScroll
} from "../../items";

export class BetaGift extends BaseChest {
    public Namespace: string = "BetaGift";
    public Name: string = "Beta Gift";
    public GoldCost: number = 1; 

    constructor(){
        super();   
        
        this.dropChance(GoldCoin, 100, 10000);
        this.dropChance(PowerScroll, 100, 1);
        
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

        //Cards
        this.dropChance(CardAkelodon, 0.1, 1);
        this.dropChance(CardBigSlime, 0.1, 1);
        this.dropChance(CardFabio, 100, 1);
        this.dropChance(CardBomberBug, 10, 1);
        this.dropChance(CardSkeleton, 10, 1);
        this.dropChance(CardSlime, 10, 1);
    }
}

Items.AddBaseItem("BetaGift", BetaGift);
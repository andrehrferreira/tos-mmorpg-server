import { Resource, Items } from "..";

export class BlackPlantWithThorns extends Resource {
    public Namespace: string = "BlackPlantWithThorns";
    public Name: string = "Black Plant With Thorns"; 
    public Weight: number = 0.1;
    public GoldCost: number = 30;
}

export class BlackMushroom extends Resource {
    public Namespace: string = "BlackMushroom";
    public Name: string = "Black Mushroom"; 
    public Weight: number = 0.1;
    public GoldCost: number = 20;
}

export class BloodBerry extends Resource {
    public Namespace: string = "BloodBerry";
    public Name: string = "Blood Berry"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;
}

export class BlueFlower extends Resource {
    public Namespace: string = "BlueFlower";
    public Name: string = "Blue Flower"; 
    public Weight: number = 0.1;
    public GoldCost: number = 30;
}

export class DemonMushroom extends Resource {
    public Namespace: string = "DemonMushroom";
    public Name: string = "Demon Mushroom"; 
    public Weight: number = 0.1;
    public GoldCost: number = 2;
}

export class Dill extends Resource {
    public Namespace: string = "Dill";
    public Name: string = "Dill"; 
    public Weight: number = 0.1;
    public GoldCost: number = 2;
}

export class EdgyRoot extends Resource {
    public Namespace: string = "EdgyRoot";
    public Name: string = "Edgy Root"; 
    public Weight: number = 0.1;
    public GoldCost: number = 50;
}

export class FireFlower extends Resource {
    public Namespace: string = "FireFlower";
    public Name: string = "Fire Flower"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class Garlic extends Resource {
    public Namespace: string = "Garlic";
    public Name: string = "Garlic"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;
}

export class Leaves extends Resource {
    public Namespace: string = "Leaves";
    public Name: string = "Leaves"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class ManaMushroom extends Resource {
    public Namespace: string = "ManaMushroom";
    public Name: string = "Mana Mushroom"; 
    public Weight: number = 0.1;
    public GoldCost: number = 4;
}

export class OilPlant extends Resource {
    public Namespace: string = "OilPlant";
    public Name: string = "Oil Plant"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class RedAndBlackLeaves extends Resource {
    public Namespace: string = "RedAndBlackLeaves";
    public Name: string = "Red And Black Leaves"; 
    public Weight: number = 0.1;
    public GoldCost: number = 300;
}

export class RedFruit extends Resource {
    public Namespace: string = "RedFruit";
    public Name: string = "Red Fruit"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class Root extends Resource {
    public Namespace: string = "Root";
    public Name: string = "Root"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class Rose extends Resource {
    public Namespace: string = "Rose";
    public Name: string = "Rose"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;
}

export class Rucola extends Resource {
    public Namespace: string = "Rucola";
    public Name: string = "Rucola"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class SulfurousAsh extends Resource {
    public Namespace: string = "SulfurousAsh";
    public Name: string = "Sulfurous Ash"; 
    public Weight: number = 0.1;
    public GoldCost: number = 50;
}

export class WhiteFlower extends Resource {
    public Namespace: string = "WhiteFlower";
    public Name: string = "White Flower"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;
}

export class Wildrose extends Resource {
    public Namespace: string = "Wildrose";
    public Name: string = "Wildrose"; 
    public Weight: number = 0.1;
    public GoldCost: number = 500;
}

export class YellowFlower extends Resource {
    public Namespace: string = "YellowFlower";
    public Name: string = "Yellow Flower"; 
    public Weight: number = 0.1;
    public GoldCost: number = 2;
}

export class YellowFruit extends Resource {
    public Namespace: string = "YellowFruit";
    public Name: string = "Yellow Fruit"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;
}

Items.AddBaseItem("BlackPlantWithThorns", BlackPlantWithThorns);
Items.AddBaseItem("BloodBerry", BloodBerry);
Items.AddBaseItem("BlueFlower", BlueFlower);
Items.AddBaseItem("BlackMushroom", BlackMushroom);
Items.AddBaseItem("DemonMushroom", DemonMushroom);
Items.AddBaseItem("Dill", Dill);
Items.AddBaseItem("EdgyRoot", EdgyRoot);
Items.AddBaseItem("FireFlower", FireFlower);
Items.AddBaseItem("Garlic", Garlic);
Items.AddBaseItem("Leaves", Leaves);
Items.AddBaseItem("ManaMushroom", ManaMushroom);
Items.AddBaseItem("OilPlant", OilPlant);
Items.AddBaseItem("RedAndBlackLeaves", RedAndBlackLeaves);
Items.AddBaseItem("RedFruit", RedFruit);
Items.AddBaseItem("Root", Root);
Items.AddBaseItem("Rose", Rose);
Items.AddBaseItem("Rucola", Rucola);
Items.AddBaseItem("SulfurousAsh", SulfurousAsh);
Items.AddBaseItem("WhiteFlower", WhiteFlower);
Items.AddBaseItem("Wildrose", Wildrose);
Items.AddBaseItem("YellowFlower", YellowFlower);
Items.AddBaseItem("YellowFruit", YellowFruit);
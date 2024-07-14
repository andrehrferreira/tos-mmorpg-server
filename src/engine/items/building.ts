import { Resource, Items, Item } from ".";

//Crafting Tools
export class AlchemistTable extends Item {
    public Namespace: string = "AlchemistTable";
    public Name: string = "Alchemist Table"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

export class CarpentryTable extends Item {
    public Namespace: string = "CarpentryTable";
    public Name: string = "Carpentry Table"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

export class CookingPit extends Item {
    public Namespace: string = "CookingPit";
    public Name: string = "Cooking Pit"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

export class Forge extends Item {
    public Namespace: string = "Forge";
    public Name: string = "Forge"; 
    public Weight: number = 30;
    public GoldCost: number = 500;
}

export class TailoringTools extends Item {
    public Namespace: string = "TailoringTools";
    public Name: string = "Tailoring Tools"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

Items.AddBaseItem("AlchemistTable", AlchemistTable);
Items.AddBaseItem("CarpentryTable", CarpentryTable);
Items.AddBaseItem("CookingPit", CookingPit);
Items.AddBaseItem("Forge", Forge);
Items.AddBaseItem("TailoringTools", TailoringTools);

//Wood Parts
export class WoodFloor extends Resource {
    public Namespace: string = "WoodFloor";
    public Name: string = "Wood Floor"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

export class WoodRoof extends Resource {
    public Namespace: string = "WoodRoof";
    public Name: string = "Wood Roof"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

export class WoodWall extends Resource {
    public Namespace: string = "WoodWall";
    public Name: string = "Wood Wall"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

export class WoodFence extends Resource {
    public Namespace: string = "WoodFence";
    public Name: string = "Wood Fence"; 
    public Weight: number = 1;
    public GoldCost: number = 10;
}

export class WoodWindow extends Resource {
    public Namespace: string = "WoodWindow";
    public Name: string = "Wood Window"; 
    public Weight: number = 1;
    public GoldCost: number = 10;
}

export class WoodDoor extends Resource {
    public Namespace: string = "WoodDoor";
    public Name: string = "Wood Door"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

Items.AddBaseItem("WoodFloor", WoodFloor);
Items.AddBaseItem("WoodRoof", WoodRoof);
Items.AddBaseItem("WoodWall", WoodWall);
Items.AddBaseItem("WoodFence", WoodFence);
Items.AddBaseItem("WoodWindow", WoodWindow);
Items.AddBaseItem("WoodDoor", WoodDoor);

//Stone Parts
export class StoneFloor extends Resource {
    public Namespace: string = "StoneFloor";
    public Name: string = "Stone Floor"; 
    public Weight: number = 30;
    public GoldCost: number = 300;
}

export class StoneWall extends Resource {
    public Namespace: string = "StoneWall";
    public Name: string = "Stone Wall"; 
    public Weight: number = 20;
    public GoldCost: number = 200;
}

export class StoneRoof extends Resource {
    public Namespace: string = "StoneRoof";
    public Name: string = "Stone Roof"; 
    public Weight: number = 20;
    public GoldCost: number = 200;
}

export class StoneWindow extends Resource {
    public Namespace: string = "StoneWindow";
    public Name: string = "Stone Window"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

export class StoneFence extends Resource {
    public Namespace: string = "StoneFence";
    public Name: string = "Stone Fence"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

export class StoneDoor extends Resource {
    public Namespace: string = "StoneDoor";
    public Name: string = "Stone Door"; 
    public Weight: number = 10;
    public GoldCost: number = 100;
}

Items.AddBaseItem("StoneFloor", StoneFloor);
Items.AddBaseItem("StoneWall", StoneWall);
Items.AddBaseItem("StoneRoof", StoneRoof);
Items.AddBaseItem("StoneWindow", StoneWindow);
Items.AddBaseItem("StoneFence", StoneFence);
Items.AddBaseItem("StoneDoor", StoneDoor);

//Forniture
export class WoodBed extends Resource {
    public Namespace: string = "WoodBed";
    public Name: string = "Wood Bed"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

export class WoodBookcase extends Resource {
    public Namespace: string = "WoodBookcase";
    public Name: string = "Wood Bookcase"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

export class WoodCabinet extends Resource {
    public Namespace: string = "WoodCabinet";
    public Name: string = "Wood Cabinet"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

export class WoodChair extends Resource {
    public Namespace: string = "WoodChair";
    public Name: string = "Wood Chair"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

export class WoodChest extends Resource {
    public Namespace: string = "WoodChest";
    public Name: string = "Wood Chest"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

Items.AddBaseItem("WoodBed", WoodBed);
Items.AddBaseItem("WoodBookcase", WoodBookcase);
Items.AddBaseItem("WoodCabinet", WoodCabinet);
Items.AddBaseItem("WoodChair", WoodChair);
Items.AddBaseItem("WoodChest", WoodChest);
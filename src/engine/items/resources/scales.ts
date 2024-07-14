import { Resource, Items } from "..";

export class AncientDragonScale extends Resource {
    public Namespace: string = "AncientDragonScale";
    public Name: string = "Ancient Dragon Scale"; 
    public Weight: number = 20;
    public GoldCost: number = 5000;
}

export class DragonScale extends Resource {
    public Namespace: string = "DragonScale";
    public Name: string = "Dragon Scale"; 
    public Weight: number = 15;
    public GoldCost: number = 1000;
}

export class DrakeScale extends Resource {
    public Namespace: string = "DrakeScale";
    public Name: string = "Drake Scale"; 
    public Weight: number = 10;
    public GoldCost: number = 200;
}

Items.AddBaseItem("AncientDragonScale", AncientDragonScale);
Items.AddBaseItem("DragonScale", DragonScale);
Items.AddBaseItem("DrakeScale", DrakeScale);
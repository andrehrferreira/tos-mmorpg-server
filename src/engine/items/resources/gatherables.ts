import { Resource, Items } from "..";

//Base
export class Coal extends Resource {
    public Namespace: string = "Coal";
    public Name: string = "Coal"; 
    public Weight: number = 0.5;
    public GoldCost: number = 1;
}

export class Stone extends Resource {
    public Namespace: string = "Stone";
    public Name: string = "Stone"; 
    public Weight: number = 0.5;
    public GoldCost: number = 1;
}

export class Tin extends Resource {
    public Namespace: string = "Tin";
    public Name: string = "Tin"; 
    public Weight: number = 0.2;
    public GoldCost: number = 1;
}

export class Stick extends Resource {
    public Namespace: string = "Stick";
    public Name: string = "Stick"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

Items.AddBaseItem("Coal", Coal);
Items.AddBaseItem("Stone", Stone);
Items.AddBaseItem("Tin", Tin);
Items.AddBaseItem("Stick", Stick);
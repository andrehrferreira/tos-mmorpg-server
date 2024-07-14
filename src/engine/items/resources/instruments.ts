import { Items, Item } from "..";

export class Flute extends Item {
    public Namespace: string = "Flute";
    public Name: string = "Flute"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

Items.AddBaseItem("Flute", Flute);
import { Items, Consumable } from "..";

export class BetaTicket extends Consumable {
    public Namespace: string = "BetaTicket";
    public Name: string = "Beta Ticket"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

Items.AddBaseItem("BetaTicket", BetaTicket);
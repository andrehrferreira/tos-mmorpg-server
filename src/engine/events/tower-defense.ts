import { EventInstance, EventInstanceType } from "..";

export class TowerDefense extends EventInstance {
    public override type = EventInstanceType.TowerDefense;
    public override MapNamespace = "TowerDefense";      
}

EventInstance.AddEventBase(EventInstanceType.TowerDefense, TowerDefense);
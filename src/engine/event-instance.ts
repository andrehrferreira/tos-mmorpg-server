import { Player } from "./entities";
import { Maps } from "./maps";
import { MapsService } from "@services";

export enum EventInstanceType {
    TowerDefense,
    BattleCastle,
    Moba,
    CardGame,
    Arena
}

export enum EventQueueType {
    Solo,
    Party,
    Queue
}

export abstract class EventInstance {
    public static EventsBase: Map<EventInstanceType, { new (): any }> = new Map<EventInstanceType, { new (): any }>();
    public type: EventInstanceType;
    public abstract MapNamespace: string;
    public mapId: string;
    public map: Maps;
    public players: Array<Player> = new Array<Player>();

    public static AddEventBase(eventType: EventInstanceType, event: { new (): any }) {
        EventInstance.EventsBase.set(eventType, event);
    }

    public static GetEventBase(eventType: EventInstanceType) : { new (): any } | null {
        return EventInstance.EventsBase.has(eventType) ? EventInstance.EventsBase.get(eventType) : null;
    }

    public static CreateEvent(eventType: EventInstanceType, mapsService: MapsService) : EventInstance | null {
        const eventBase = EventInstance.GetEventBase(eventType);

        if(eventBase){
            const event = new eventBase();
            event.mapId = Maps.createInstance(event.MapNamespace, mapsService);
            event.map = Maps.getMap(event.mapId);
            return event;
        }

        return null;        
    }

    public Join(player: Player) {
        this.players.push(player);
    }   
}   
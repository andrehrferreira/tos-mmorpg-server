import { Entity } from "@engine";

export interface MapRef {
    tick: number;
    entities: Array<Entity>;
    entitiesIndex: Map<string, Entity>;
}
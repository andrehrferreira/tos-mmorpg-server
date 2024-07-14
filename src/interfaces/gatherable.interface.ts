import { GatherableType } from "../engine/gatherable";

export interface IGatherable {
    map: string;
    x: number;
    y: number;
    z: number;
    timer: number;
    respawnOnStart: boolean;
    timeout: number;
    entities: Array<GatherableType>;
    meshIndex: string;
}
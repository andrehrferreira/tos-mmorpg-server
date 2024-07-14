export interface IRespawn {
    map: string;
    x: number;
    y: number;
    z: number;
    timer: number;
    respawnOnStart: boolean;
    timeout: number;
    entities: Array<string>;
}
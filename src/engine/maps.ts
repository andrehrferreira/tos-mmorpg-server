import { GUID } from '@utils';
import { MapsService } from '@services';
import { Logger } from '@nestjs/common';

import { 
    packetRemoveEntity, 
    packetLoadLevel 
} from '@network';

import { Respawn } from './mobiles';
import { LinkedList } from './utils';
import { Boss, Creature, Entity, Player } from './entities';
import { Gatherable, GatherableResource, GatherableType } from './gatherable';
import { Vector3 } from './core';

export class Maps extends LinkedList<Maps> {
    private logger: Logger = new Logger('Player');
    public static maps: Map<string, Maps> =  new Map<string, Maps>();

    public id: string;
    public static deltaTime: number = 0.3;
    public namespace : string = null;
    public mapTick: number = 0;
    public mapIndex: number = 20;
    public entitiesIndexById : Map<string, Entity> = new Map<string, Entity>();
    public entitiesMapIndex : Map<string, Entity> = new Map<string, Entity>();
    public entitiesPersistedId = 1; 
    private mapsService: MapsService;
    public respawns: Map<string, Respawn> = new Map<string, Respawn>();
    public foliageIndex: Map<number, string> = new Map<number, string>();
    public foliage: Map<string, Gatherable> = new Map<string, Gatherable>();
    public static foliageInitialData: Map<string, string> = new Map<string, string>();

    constructor(namespace: string, mapsService: MapsService) {
        super();
        this.id = GUID.NewID();
        this.namespace = namespace;
        this.append(this);
        this.mapsService = mapsService;
        this.getRespawns();        
    }

    static parseLevelData(levelName: string, dataFile: string, mapsService: MapsService) {
        let map = Maps.getOrCreateMap(levelName, mapsService);

        if(dataFile !== ""){
            const [index, data] = dataFile.split("@");
            const indexItems = index.split("|");
            const dataItems = data.split("|");
            let indexArr : Map<number, string> = new Map<number, string>();
            let totalSpots = 0;

            for(let indexData of indexItems){
                const [id, mesh] = indexData.split(":")
                indexArr.set(parseInt(id), mesh);
            }

            map.foliageIndex = indexArr;
            
            for(let dataPart of dataItems){
                const [meshIndex, type, x, y, z] = dataPart.split(",");
                const foliageId = `${x}${y}${z}`;
                totalSpots++;

                map.foliage.set(foliageId, new Gatherable({
                    map: levelName,
                    respawnOnStart: true,
                    timeout: new Date().getTime(),
                    timer: 120, //300
                    entities: [parseInt(type) as GatherableType],
                    x: parseInt(x), 
                    y: parseInt(y), 
                    z: parseInt(z),
                    meshIndex,
                    foliageId
                }));

                map.foliage.set(meshIndex, new Gatherable({
                    map: levelName,
                    respawnOnStart: true,
                    timeout: new Date().getTime(),
                    timer: 120, //300
                    entities: [parseInt(type) as GatherableType],
                    x: parseInt(x), 
                    y: parseInt(y), 
                    z: parseInt(z),
                    meshIndex,
                    foliageId
                }));
            }

            map.refreshMapInitialData();
            return totalSpots;
        }
        else {
            return 0;
        }        
    }

    static getMap(namespace: string) : Maps | null {        
        return (this.maps.has(namespace)) ? this.maps.get(namespace) : null;
    }

    static getEntity(socket: any, entityId: string) {
        if(socket && socket.character) {
            const map = Maps.getMap(socket.character.map);
            return (map) ? map.findEntityById(entityId) : null;
        }
        else {
            return null;
        }        
    }

    static hasMap(namespace: string) : boolean {
        return this.maps.has(namespace);
    }

    static createMap(namespace: string, mapsService: MapsService) : boolean {
        if(!this.hasMap(namespace)){
            const map = new Maps(namespace, mapsService);
            this.maps.set(namespace, map);
            this.maps.set(namespace.toLowerCase(), map);
            return true;
        }

        return false;
    }

    static createInstance(namespace: string, mapsService: MapsService) : string {
        const mapId = GUID.NewID();
        const map = new Maps(namespace, mapsService);
        this.maps.set(mapId, map);
        return mapId;
    }

    static getOrCreateMap(namespace: string, mapsService: MapsService) : Maps {
        if(!this.hasMap(namespace))
            this.createMap(namespace, mapsService);

        return this.maps.get(namespace);
    }

    // Join / Leave / Teleport 
    async joinMap(entity: Entity) {
        let currentId = GUID.IntToId(this.mapIndex++); //GUID.NewID();
        
        if (this.entitiesIndexById.size > 0) {
            await this.entitiesIndexById.forEach(async otherEntity => {
                if (
                    entity.id === otherEntity.id
                ) {
                    otherEntity.areaOfInterece.map((entity) => packetRemoveEntity.send(entity, otherEntity));  

                    try{
                        if(otherEntity.socket)
                            otherEntity.socket.disconnect();
                    } catch {}
                    
                    (otherEntity as Player).save();
                    (otherEntity as Player).saveToDatabase();
                    (otherEntity as Player).destroy();                                   
                    this.entitiesIndexById.delete(otherEntity.id);
                    this.entitiesMapIndex.delete(otherEntity.mapIndex);
                    otherEntity.OnDetroy.next(otherEntity);
                   
                    await new Promise((resolve) => {
                        setTimeout(() => resolve, 2000);
                    });
                }
            });
        }

        if(entity instanceof Player){
            (entity as Player).mapIndex = currentId; 
            (entity as Player).socket.entityId = currentId; 
        }
                   
        entity.setMap(this, currentId);
        this.entitiesIndexById.set(entity.id, entity);
        this.entitiesMapIndex.set(currentId, entity);
        entity.updateAreaOfInterest();
        this.validateAndCleanIndices();
        return currentId;
    }

    leaveMap(player: Player) {   
        Player.players.delete(player.characterId);
        player.saveToDatabase();
        player.destroy();       
        player.OnDetroy.next(player); 
        this.entitiesIndexById.delete(player.id);
        this.entitiesMapIndex.delete(player.mapIndex);
        this.validateAndCleanIndices();
        player.setMap(null, "");
    }

    validateAndCleanIndices() {
        const characterIdSet: Set<string> = new Set();
        const entitiesToRemove: Set<string> = new Set();
    
        this.entitiesIndexById.forEach((entity, entityId) => {
            if (entity.characterId) {
                if (characterIdSet.has(entity.characterId)) {
                    if (!entity.socket || !entity.socket.connected) {
                        entitiesToRemove.add(entityId);
                    } else {
                        this.entitiesIndexById.forEach((otherEntity, otherEntityId) => {
                            if (
                                otherEntity.characterId === entity.characterId &&
                                otherEntityId !== entityId &&
                                (!otherEntity.socket || !otherEntity.socket.connected)
                            ) {
                                entitiesToRemove.add(otherEntityId);
                            }
                        });
                    }
                } else {
                    characterIdSet.add(entity.characterId);
                }
            }
        });
    
        entitiesToRemove.forEach(entityId => {        
            const entity = this.entitiesIndexById.get(entityId);

            if (entity) {
                this.entitiesIndexById.delete(entityId);
                this.entitiesMapIndex.delete(entity.mapIndex);

                if (entity.socket) 
                    entity.socket.close();
                
                entity.OnDetroy.next(entity);
            }
        });
    }

    teleportTo(player: Player, waypoint: string) {
        player.areaOfInterece.map((entity) => entity.removeFromAreaOfInterest(player));
        player.map.leaveMap(player);
        player.map = Maps.getMap(this.namespace);
        player.socket.character.map = this.namespace;
        player.setMap(null, "");
        player.save();   
        packetLoadLevel.send(player, this.namespace, waypoint);
    }

    //Respawn
    async getRespawns() {
        if(this.mapsService){
            const respawns = await this.mapsService.getRespawns(this.namespace);

            for(let respawn of respawns){
                const entities = JSON.parse(respawn.entities);
                const baseEntity = Entity.getEntityBase(entities[0]);

                if(baseEntity){
                    const tmpEntity = new baseEntity();

                    this.respawns.set(respawn.id, new Respawn(respawn.id, {
                        map: respawn.map,
                        respawnOnStart: respawn.respawnOnStart,
                        timeout: respawn.timeout,
                        timer: (tmpEntity instanceof Boss) ? 86400 : 300 ,//respawn.timer,
                        x: respawn.x,
                        y: respawn.y,
                        z: respawn.z,
                        entities: entities
                    }));
                }
            }
        }
    }

    async createRespawn(position: Vector3, entityName: string | string[]) {
        if(this.mapsService){
            const tmpId = GUID.NewID();
            const baseEntity = (Array.isArray(entityName)) ? 
                Entity.getEntityBase(entityName[0]) : 
                Entity.getEntityBase(entityName);

            if(baseEntity){
                const tmpEntity = new baseEntity();

                await this.mapsService.createRespawn({
                    id: tmpId,
                    map: this.namespace,
                    respawnOnStart: true,
                    timeout: new Date().getTime(),
                    timer: (tmpEntity instanceof Boss) ? 86400 : 300,
                    x: position.x,
                    y: position.y,
                    z: position.z,
                    entities: JSON.stringify((Array.isArray(entityName)) ? entityName : [entityName])
                });

                this.respawns.set(tmpId, new Respawn(tmpId, {
                    map: this.namespace,
                    respawnOnStart: true,
                    timeout: new Date().getTime(),
                    timer: (tmpEntity instanceof Boss) ? 86400 : 300,
                    x: position.x,
                    y: position.y,
                    z: position.z,
                    entities: (Array.isArray(entityName)) ? entityName : [entityName]
                }));
            }            
        }
    }

    async removeRespawn(id: string) {
        if(this.respawns.has(id)) {
            const respawn = this.respawns.get(id);            
            respawn.destroy();

            await this.mapsService.removeRespawn(id);

            if(respawn.EntityRespawned)
                respawn.EntityRespawned.destroy();       
                         
            this.respawns.delete(id);
        }
    }

    //Foliage
    addFoliage(instance: Gatherable, resource: GatherableResource) {
        const currentId = GUID.NewID();
        resource.setEntityId(currentId);
        this.foliage.set(currentId, instance);
    }

    setFoliageAsCollected(currentId: string) {
        if(this.foliage.has(currentId)){
            const resource = this.foliage.get(currentId);
            resource.collected();
            this.foliage.set(currentId, resource);
            this.refreshMapInitialData();
        }            
    }

    removeFoliage(foliageId) {
        if(this.foliage.has(foliageId))
            this.foliage.delete(foliageId);        
    }

    refreshMapInitialData() {
        let data = "";

        this.foliage.forEach((gatherable) => {            
            const locRef = `${gatherable.settings.x}${gatherable.settings.y}${gatherable.settings.z}`;
            const foliageId = (gatherable.entityRespawned) ? gatherable.entityRespawned.foliageId : 0;
            const tick = (gatherable.entityRespawned) ? gatherable.entityRespawned.tick : 0;
            const enable = (gatherable.entityRespawned && gatherable.entityRespawned.tick > 0) ? 1 : 0;
            data += ((data) ? "|" : "") + `${locRef},${foliageId},${enable},${tick}`;
        });

        Maps.foliageInitialData.set(this.namespace, data);
    }

    //Tick
    static tick() {
        if(this.maps)
            this.maps.forEach((map) => map.onTick());
    }

    static tickRespawn() {
        if(this.maps)
            this.maps.forEach((map) => map.onTickRespawn());
    }

    public onTick() {
        this.mapTick++;
        this.entitiesIndexById.forEach(entity => {
            if(entity instanceof Player)
                (entity as Player).tick(this.mapTick);
            else if(entity instanceof Creature)
                (entity as Creature).tick(this.mapTick);
            else
                entity.tick(this.mapTick);
        });
    }

    public onTickRespawn() {
        this.respawns.forEach(respawn => respawn.tick());
        this.foliage.forEach(foliage => foliage.tick());
    }

    //Entities
    public createOrUpdateEntity(entity: Entity) {
        const hasEntity = this.entitiesIndexById.has(entity.id);

        if(!hasEntity) {
            const currentId = GUID.IntToId(this.mapIndex++);//GUID.NewID();
            this.entitiesIndexById.set(entity.id, entity);
            this.entitiesMapIndex.set(currentId.toString(), entity);
        }
        else {            
            this.entitiesIndexById.set(entity.id, entity);
            this.entitiesMapIndex.set(entity.mapIndex, entity);
        }
    }

    public removeEntity(entity: Entity) {
        this.entitiesIndexById.delete(entity.id);
        this.entitiesMapIndex.delete(entity.mapIndex);

        entity.areaOfInterece.forEach(other => {
            if(other.socket)
                packetRemoveEntity.send(other, entity);           
        });
    }

    public findEntityById(entityId: string) {
        return (this.entitiesMapIndex.has(entityId)) ? this.entitiesMapIndex.get(entityId) : null;
    }
}

setInterval(() => Maps.tick(), Maps.deltaTime * 1000); // 250ms
setInterval(() => Maps.tickRespawn(), 60000); //1 Min
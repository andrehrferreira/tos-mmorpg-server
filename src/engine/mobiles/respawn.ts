import { Rotator, Transform, Vector3 } from "..";
import { Entity } from "../entities/entity";
import { Maps } from "../maps";
import { IRespawn } from "@interfaces"

export class Respawn {
    public Id: string;
    public Settings: IRespawn;
    public Map: Maps = null;
    public EntityRespawned: Entity = null;
    private Removed : boolean = false;

    constructor(id: string, settings: IRespawn){
        this.Id = id;
        this.Settings = settings;
        this.Map = Maps.getMap(settings.map);

        if(settings.respawnOnStart)
            this.createEntity();
    }

    tick(){
        if(
            !this.EntityRespawned && 
            !this.Removed &&
            new Date().getTime() > this.Settings.timeout
        ){
            this.Settings.timeout = new Date().getTime() + (this.Settings.timer * 1000);
            this.createEntity();   
        }            
    }

    destroy(){
        this.Removed = true;
    }

    createEntity(){
        if(this.EntityRespawned)
            this.EntityRespawned.destroy();

        const randomIndex = Math.floor(Math.random() * this.Settings.entities.length);
        const entityName = this.Settings.entities[randomIndex];
        const newEntity = Entity.create(entityName);

        if(newEntity){
            const respawnPosition = new Transform(
                new Vector3(this.Settings.x, this.Settings.y, this.Settings.z), 
                Rotator.Zero(), 
                Vector3.One()
            );

            newEntity.respawn = this;
            newEntity.OnDie.subscribe({ next: (entity) => entity.respawn.entityDie() });
            newEntity.OnDetroy.subscribe({ next: (entity) => entity.respawn.entityDie() });
            newEntity.transform = respawnPosition;
            newEntity.respawnPosition = respawnPosition.position;
            this.EntityRespawned = newEntity;
            this.Map.joinMap(this.EntityRespawned);
        }
    }

    entityDie(){
        this.Settings.timeout = new Date().getTime() + (this.Settings.timer * 1000);
        this.EntityRespawned = null;
    }

    removeRespawn(){
        this.Removed = true;
        this.Map.removeRespawn(this.Id);
    }
}
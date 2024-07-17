import { PowerScroll, Random, packetSteamArchivement } from "..";
import { Entity } from "./entity";
import { Creature} from "./creature";
import { Player } from ".";

export abstract class Boss extends Creature {
    public maxSummons: number = 5;
    public summons: Array<Entity> = new Array<Entity>();
    public individualRewards: Array<{ new (): any }> = new Array<{ new (): any }>();
    public steamReward: string;

    public override async die(causer: Entity) : Promise<void> {
        await super.die(causer);

        if(causer instanceof Player)
            (causer as Player).addItemByClass(PowerScroll, 1);

        const playersWhoCausedDamage = new Set<Player>();

        (this as Entity).damageCauser.forEach((damage, mapIndex) => {
            const entity = this.map.findEntityById(mapIndex);

            if (entity instanceof Player && entity !== causer) 
                playersWhoCausedDamage.add(entity);

            if(this.individualRewards.length > 0)
                this.individualRewards.map((item) => (entity as Player).addItemByClass(item, 1));

            if(this.steamReward)
                (entity as Player).setArchivement(this.steamReward)
        });

        const playersArray = Array.from(playersWhoCausedDamage);

        for(let i = 0; i < 5; i++){
            const playerIndex = Random.MinMaxInt(0, playersArray.length-1);
            await playersArray[playerIndex].addItemByClass(PowerScroll, 1);
        }
    }

    public summonDie(entity: Entity){
        this.summons = this.summons.filter(summon => summon.mapIndex !== entity.mapIndex);
    }

    public createSummons(entityName: string, causer: Entity){
        if(this.summons.length < this.maxSummons){
            const newEntity = Entity.create(entityName);

            if(newEntity){
                newEntity.transform = causer.transform.copy();
                newEntity.respawnPosition = causer.transform.position.copy();
                newEntity.maxDistanceToRespawn = 6000;
                newEntity.selectTarget(causer.mapIndex, causer);
                newEntity.destroyOnDie = true;
                newEntity.OnDie.subscribe((entity) => this.summonDie(entity));

                causer.map.joinMap(newEntity);
                this.summons.push(newEntity);
            }
        }
    }
}
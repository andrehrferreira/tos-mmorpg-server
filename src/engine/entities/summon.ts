import { EntitiesKind, Player, Team, TeamKind } from "..";
import { Creature } from "./creature";

export class Summon extends Creature {
    public owner: Player;
    public lifeTime: number;

    constructor(owner: Player){
        super();
        this.kind = EntitiesKind.Summon;
        this.team = new Team(TeamKind.Pet, this);
        this.teamOwner = owner;
        this.owner = owner;

        setInterval(this.tickLifetime.bind(this), 1000);
    }

    startLifeTime(lifetime: number){
        this.lifeTime = new Date().getTime() + lifetime * 1000;
    }

    tickLifetime(){
        if(!this.map || this.removed)
            return;
        
        if(this.lifeTime < new Date().getTime()){
            this.map.removeEntity(this);
        }
    }
}
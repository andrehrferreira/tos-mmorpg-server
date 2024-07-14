import { EntityStates, Player, StateFlags, Team, TeamKind } from "..";
import { Creature } from "./creature";
import { EntitiesKind } from "./entity";

export class Mount extends Creature {
    public owner: Player;

    constructor(owner: Player){
        super();
        this.kind = EntitiesKind.Mount;
        this.team = new Team(TeamKind.Pet, this);
        this.teamOwner = owner;
        this.owner = owner;
        this.guild = owner.guild;
        this.life = 10000;
    }

    public override init(){
        super.init();

        this.kind = EntitiesKind.Mount;
        this.states = new StateFlags(EntityStates.None);
        this.team = new Team(TeamKind.Pet, this);
    }
}
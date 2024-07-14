import { CreatureIAState, DamageType, Dices } from "@enums";
import { BaseAction, EntityStates, Player, StateFlags, Team, TeamKind } from "..";
import { Creature, CreatureType } from "./creature";
import { EntitiesKind, Entity } from "./entity";


export class Pet extends Creature {
    public override creatureType = CreatureType.Pet;
    public override passive: boolean = true;

    constructor(owner: Player){
        super();
        this.kind = EntitiesKind.Pet;
        this.team = new Team(TeamKind.Pet, this);
        this.teamOwner = owner;
        this.owner = owner;
        this.guild = owner.guild;
        this.life = 10000;
    }

    public init(){
        this.kind = EntitiesKind.Pet;
        this.states = new StateFlags(EntityStates.None);
        this.team = new Team(TeamKind.Pet, this);
    }

    public override takeDamage(
        causer: Entity, 
        dice: Dices, 
        damageType: DamageType, 
        bonusDamage: number = 0, 
        action: BaseAction = null
    ) : void {
        this.IAState = CreatureIAState.FollowingMaster;
    }
}
import { Entity, EntityStates, Pet } from "..";

export enum TeamKind {
    None,
    Monsters,
    NPCs,
    Players,
    Tower,
    Guards,
    Provocation,
    Team1,
    Team2,
    Pet
}

export class Team {
    public kind: TeamKind;
    public self: Entity;

    constructor(kind: TeamKind, self: Entity){
        this.kind = kind;
        this.self = self;
    }

    public IsEnemyOf(other: Team) : boolean {
        switch(this.kind) {
            case TeamKind.Monsters: return ((other.kind === TeamKind.Players) && other.self.states.dontHasFlag(EntityStates.Invulnerable)) || other.kind === TeamKind.Guards || other.kind === TeamKind.Provocation;
            case TeamKind.Players: return other.kind === TeamKind.None || other.kind === TeamKind.Monsters || other.kind === TeamKind.Provocation || (other.kind === TeamKind.Players && (other.self != this.self && (this.isDuelZoneEnemy(other) || this.isPlayerEnemy(other)))) || other.kind === TeamKind.Guards && this.self.states.hasFlag(EntityStates.NegativeKarma)
            case TeamKind.Tower: return true;
            case TeamKind.Guards: return ((other.kind === TeamKind.Players) && (other.self.states.hasFlag(EntityStates.NegativeKarma) ?? false)) || other.kind === TeamKind.Monsters;
            case TeamKind.Provocation: return other.kind === TeamKind.None || other.kind === TeamKind.Monsters || other.kind === TeamKind.Provocation || other.kind === TeamKind.Players;
            case TeamKind.Team1: return other.kind == TeamKind.Team2 && other.self.states.dontHasFlag(EntityStates.Invulnerable);
            case TeamKind.Team2: return other.kind == TeamKind.Team1 && other.self.states.dontHasFlag(EntityStates.Invulnerable);
            default: return false;
        }
    }

    public IsAllyOf(other: Team) : boolean {
        switch(this.kind) {
            case TeamKind.Monsters: return other.kind === TeamKind.Monsters;
            case TeamKind.NPCs: return true;
            case TeamKind.Players: return other.self.id === this.self.id || (other.self.teamOwner === this.self.teamOwner && other.self.teamOwner !== null && this.self.teamOwner !== null)
            case TeamKind.Guards: return (other.kind !== TeamKind.Players) || other.self.states.dontHasFlag(EntityStates.NegativeKarma);
            case TeamKind.Provocation: return false;
            case TeamKind.Tower: return other.kind == TeamKind.Tower || other.kind == TeamKind.Players;
            case TeamKind.Team1: return other.kind == TeamKind.Team1;
            case TeamKind.Team2: return other.kind == TeamKind.Team2;
            case TeamKind.Pet: return this.self.teamOwner === other.self.teamOwner || (this.self as Pet).owner?.characterId == other.self.characterId;
            default: return false;
        }
    }

    public isDuelZoneEnemy(pt: Team){
        return this.self.states.hasFlag(EntityStates.DuelZone) && 
        pt.self.states.hasFlag(EntityStates.DuelZone) && 
        pt.self.states.dontHasFlag(EntityStates.Invulnerable) &&
        this.self.teamOwner !== pt.self.teamOwner;
    }

    public isPlayerEnemy(pt: Team){
        return pt.self.states.dontHasFlag(EntityStates.Invulnerable) &&
        pt.self.states.dontHasFlag(EntityStates.SafeZone) &&
        this.self.states.dontHasFlag(EntityStates.SafeZone) &&
        this.self.teamOwner !== pt.self.teamOwner;
    }
}
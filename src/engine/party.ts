import { GUID } from '@utils';
import { Player } from "./entities";
import { 
    packetSystemMessage, packetRequestParty,
    packetPartyData 
} from "@network"

export class Party {
    public static partySessions: Map<string, Party> = new Map<string, Party>();

    public id: string;
    public owner: Player;
    public maxMembers: number = 5;
    public members: Map<string, Player> = new Map<string, Player>();

    constructor(owner: Player){
        this.id = GUID.NewID();
        this.owner = owner;
        Party.partySessions.set(this.id, this);
        this.members.set(this.owner.characterId, this.owner);
    }

    public static getSession(id: string) {
        return Party.partySessions.has(id) ? Party.partySessions.get(id) : null;
    }

    public static destroySession(id: string){
        if(Party.partySessions.has(id))
            Party.partySessions.delete(id);
    }

    public static updateParty(party: Party){
        let session = Party.getSession(party.id);

        if(session){
            session.owner = party.owner;
            session.maxMembers = party.maxMembers;
            session.members = party.members;
        }
    }

    refreshCharacter(player: Player){
        if(this.owner.characterId === player.characterId)
            this.owner = player;

        this.members.set(player.characterId, player);
        const partyData = this.serialize(player);
        Player.players.set(player.characterId, player);

        setTimeout(() => {
            packetPartyData.send(player, partyData);
        }, 2000);
    }

    requestMember(characterId: string){
        if(Player.players.has(characterId)){
            const player = Player.players.get(characterId);

            if(player && !player.party)
                packetRequestParty.send(player, this.id, this.owner.name);
            else 
                packetSystemMessage.sendDirectSocket(this.owner.socket, `The player is already in another group.`);
        }
    }

    joinMember(player: Player){
        if(this.members.size < this.maxMembers) {
            this.members.set(player.characterId, player);
            player.party = this;
            player.partyOwner = this.owner;
            Player.players.set(player.characterId, player);
            player.save();
            packetSystemMessage.sendDirectSocket(player.socket, `You have been accepted into the group organized by ${this.owner.name}.`);
            Party.updateParty(this);

            this.members.forEach((member) => {
                if(member.characterId !== player.characterId)
                    packetSystemMessage.sendDirectSocket(member.socket, `Member ${player.name} joined the group.`);
            });

            this.broadcast();
        }
        else {
            packetSystemMessage.sendDirectSocket(player.socket, `I'm joining a group that is already complete.`);
        }
    }
    
    leave(player: Player){
        if(this.members.has(player.characterId)){
            this.members.delete(player.characterId);
            player.party = null;
            player.partyOwner = null;
            player.save();
            Player.players.set(player.characterId, player);

            packetPartyData.send(player, JSON.stringify({
                members: [], 
                isleader: false, 
                force: true
            }))

            if(this.owner.characterId === player.characterId){
                if(this.members.size){
                    for(let playerId in this.members.values){
                        let player = this.members.get(playerId);

                        if(player){
                            this.owner = player;

                            this.members.forEach((member) => {
                                member.partyOwner = player;
                            });

                            packetSystemMessage.sendDirectSocket(player.socket, `You have been promoted as group leader`);

                            break;
                        }
                    }
                }
            }

            Party.updateParty(this);
            packetSystemMessage.sendDirectSocket(player.socket, `You left the group`);

            this.members.forEach((member) => {
                packetSystemMessage.sendDirectSocket(member.socket, `Member ${player.name} left the group`);
            });

            this.broadcast(true);
        }
    }

    tick(tickNumber: number){
        if(tickNumber % 60 === 0)
            this.broadcast();        
    }

    broadcast(force: boolean = false) {
        if(this.members.size > 0){
            this.members.forEach((player) => {
                const partyData = this.serialize(player, force);
                packetPartyData.send(player, partyData)
            });
        }            
    }

    serialize(player: Player, force: boolean = false) : string {
        let data: any = { members: [], isleader: (player.characterId === this.owner.characterId), force };

        data.sessionId = this.id;

        this.members.forEach((member) => {
            if(member.characterId !== player.characterId){
                data.members.push({
                    c: member.characterId,
                    n: member.name,
                    l: member.life,
                    ml: member.maxLife,
                    m: member.mana,
                    mm: member.maxMana,
                    s: member.stamina,
                    sm: member.maxStamina,
                    a: (member.lastUpdate > new Date().getTime() + (30 * 1000)),
                    o: (member.characterId === this.owner.characterId),
                    t: member.hashtag
                });
            }            
        })

        return JSON.stringify(data);
    }
}
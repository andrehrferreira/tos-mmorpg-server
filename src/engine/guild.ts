import { GuildService, RepositoryService } from "@services";
import { Entity, Player } from "./entities";

import { 
    packetSystemMessage, packetJoinGuild,
    packetGuildData
} from "@network";

export enum GuildAccessLevel {
    Recruter,
    Member,
    Staff,
    Owner
}

export class GuildMember {
    Id: string;
    Name: string;
    Tag: string;
    Plevel: GuildAccessLevel
}

export class GuildJoinRequest {
    Id: string;
    Name: string;
    Tag: string;
}

export class Guilds {
    public static CachedGuilds: Map<string, Guild> = new Map<string, Guild>();
    public static CachedGuildsByName: Map<string, Guild> = new Map<string, Guild>();

    public static fromDatabase(data: any) : Guild | null { 
        const guild = new Guild(
            data.id, 
            data.owner, 
            data.guildName, 
            data.flag,
            data.maxMembers,
            data.level,
            data.requests
        );  
        
        Guilds.CachedGuilds.set(data.id, guild);
        Guilds.CachedGuildsByName.set(data.guildName, guild);
        guild.parseMembers(JSON.parse(data.members)); 
        return guild;
    }

    public static hasGuild(id: string) : boolean {
        return Guilds.CachedGuilds.has(id);
    }

    public static hasGuildByName(name: string) : boolean {
        return Guilds.CachedGuildsByName.has(name);
    }

    public static getGuild(id: string){
        return (Guilds.CachedGuilds.has(id)) ? Guilds.CachedGuilds.get(id) : null;
    }

    public static getGuilds() {
        let guildList = [];

        Guilds.CachedGuilds.forEach((guild, id) => {
            if(guildList.length < 50){
                guildList.push({
                    id,
                    guildName: guild.Name,
                    members: guild.Members.length,
                    flag: guild.Flag,
                    maxMembers: guild.MaxMembers,
                    level: guild.Level
                });
            }
        });

        return guildList;
    }
}

export class Guild {
    public Owner: string;
    public Id: string;
    public Name: string;
    public Flag: string;
    public Members: Array<GuildMember> = new Array<GuildMember>();
    public Requests: Array<GuildJoinRequest> = new Array<GuildJoinRequest>();
    public MaxMembers: number;
    public Level: number;

    constructor(
        id: string, 
        owner: string, 
        name: string, 
        flag: string = "",
        maxMembers: number = 100,
        level: number = 1,
        requests: string = "[]"
    ){
        this.Id = id;
        this.Owner = owner;
        this.Name = name;
        this.Flag = flag;
        this.MaxMembers = maxMembers;
        this.Level = level
        this.Requests = JSON.parse(requests)
    }

    parseMembers(data){
        for(let member of data){
            this.Members.push({
                Id: member.id,
                Name: member.name,
                Plevel: member.plevel,
                Tag: member.tag
            });
        }
    }

    async update(services: GuildService){
        Guilds.CachedGuilds.set(this.Id, this);
        Guilds.CachedGuildsByName.set(this.Name, this);

        let guild: any = this.serialize(true);

        guild.members = JSON.stringify(guild.members.map((member) => ({
            id: member.Id,
            name: member.Name,
            plevel: member.Plevel,
            tag: member.Tag
        })));

        guild.requets = JSON.stringify(guild.requets);

        await services.updateGuild({
            id: this.Id,
            ...guild
        });
    }

    hasPlevel(plevel: GuildAccessLevel, player: Player) : boolean {
        const member = this.Members.find(member => member.Id === player.characterId);
        return member ? member.Plevel >= plevel : false;
    }

    async addRequest(player: Player){
        const exists = this.Requests.some(request => request.Id === player.characterId);

        if (!exists && !player.guild && this.Members.length < this.MaxMembers) {
            if(this.Members.length <= 0){
                this.Members.push({
                    Id: player.characterId,
                    Name: player.name,
                    Plevel: GuildAccessLevel.Owner,
                    Tag: player.hashtag
                });

                this.Owner = player.characterId;
                player.guild = this;
                player.save();
                player.saveToDatabase();

                const entities = new Set([...player.areaOfInterece, this]);

                entities.forEach((entity: Entity) => {
                    if(entity instanceof Player){
                        packetJoinGuild.send(entity, {
                            entityId: player.mapIndex,
                            guildId: this.Id,
                            guildName: this.Name
                        });
                    }
                });

                await this.update(player.socket.services.guildService as GuildService);

                packetSystemMessage.sendDirectSocket(player.socket, `Congratulations, you are now the owner of the guild.`);
                packetGuildData.send(player, JSON.stringify(this.serialize(this.Owner === player.characterId)));
            }
            else{
                this.Requests.push({
                    Id: player.characterId,
                    Name: player.name,
                    Tag: player.hashtag
                });
    
                await this.update(player.socket.services.guildService as GuildService);
                packetSystemMessage.sendDirectSocket(player.socket, `You sent a request to join the guild "${this.Name}".`);
            }
        } 
        else if(this.Members.length >= this.MaxMembers){
            packetSystemMessage.sendDirectSocket(player.socket, `The guild already has as many members as possible at the moment.`);
        }
        else {
            packetSystemMessage.sendDirectSocket(player.socket, `You have already sent a request to join the guild.`);
        }
    }

    async acceptRequest(player: Player, requestId: string) {
        if (!this.hasPlevel(GuildAccessLevel.Staff, player)) {
            packetSystemMessage.sendDirectSocket(player.socket, `You do not have permission to accept requests.`);
            return;
        }

        const requestIndex = this.Requests.findIndex(request => request.Id === requestId);

        if (requestIndex === -1) {
            packetSystemMessage.sendDirectSocket(player.socket, `Request not found.`);
            return;
        }

        if(this.Members.length >= this.MaxMembers){
            packetSystemMessage.sendDirectSocket(player.socket, `The total number of members has already been reached so for now.`);
            return;
        }

        const [request] = this.Requests.splice(requestIndex, 1);
        const newMember = Player.getPlayerByTag(request.Tag);

        if(newMember){
            this.Members.push({
                Id: request.Id,
                Name: request.Name,
                Plevel: GuildAccessLevel.Recruter,
                Tag: request.Tag
            });

            newMember.guild = this;
            newMember.save();
            newMember.saveToDatabase();

            const entities = new Set([...newMember.areaOfInterece, this]);

            entities.forEach((entity: Entity) => {
                if(entity instanceof Player){
                    packetJoinGuild.send(entity, {
                        entityId: newMember.mapIndex,
                        guildId: this.Id,
                        guildName: this.Name
                    });
                }
            });
        }

        await this.update(player.socket.services.guildService as GuildService);

        packetSystemMessage.sendDirectSocket(player.socket, `Request accepted. ${request.Name} is now a member of the guild.`);
        packetGuildData.send(player, JSON.stringify(this.serialize(this.Owner === player.characterId)));
    }

    async denyRequest(player: Player, requestId: string){
        if (!this.hasPlevel(GuildAccessLevel.Staff, player)) {
            packetSystemMessage.sendDirectSocket(player.socket, `You do not have permission to deny requests.`);
            return;
        }

        const requestIndex = this.Requests.findIndex(request => request.Id === requestId);

        if (requestIndex === -1) {
            packetSystemMessage.sendDirectSocket(player.socket, `Request not found.`);
            return;
        }

        this.Requests.splice(requestIndex, 1);

        await this.update(player.socket.services.guildService as GuildService);

        packetSystemMessage.sendDirectSocket(player.socket, `Request denied.`);
        packetGuildData.send(player, JSON.stringify(this.serialize(this.Owner === player.characterId)));
    }

    async removeGuildMember(player: Player, characterId: string){
        if (!this.hasPlevel(GuildAccessLevel.Staff, player)) {
            packetSystemMessage.sendDirectSocket(player.socket, `You do not have permission to deny requests.`);
            return;
        }

        const memberIndex = this.Members.findIndex(member => member.Id === characterId);

        if (memberIndex === -1) {
            packetSystemMessage.sendDirectSocket(player.socket, `Member not found.`);
            return;
        }

        const [removedMember] = this.Members.splice(memberIndex, 1);
        const removedPlayer = Player.getPlayerByTag(removedMember.Tag);

        if (removedPlayer) {
            removedPlayer.guild = null;
            removedPlayer.save();
            removedPlayer.saveToDatabase();
        }

        //Update local storage
        let character = Player.getData(removedPlayer.characterId);
        character.guildId = null;
        character.guildName = null;
        Player.fromDatabase(character);

        //Update database
        await this.update(player.socket.services.guildService as GuildService);

        await (player.socket.services.repository as RepositoryService).updateCharacter(removedPlayer.characterId, {
            guildId: null,
            guildName: null
        });

        packetSystemMessage.sendDirectSocket(player.socket, `Member removed successfully.`);
        packetGuildData.send(player, JSON.stringify(this.serialize(this.Owner === player.characterId)));
    }

    async leaveGuild(player: Player){
        const memberIndex = this.Members.findIndex(member => member.Id === player.characterId);

        if (memberIndex === -1) {
            packetSystemMessage.sendDirectSocket(player.socket, `Member not found.`);
            return;
        }

        const removedMember = this.Members[memberIndex];

        if(removedMember.Plevel <= GuildAccessLevel.Staff || (removedMember.Plevel === GuildAccessLevel.Owner && this.Members.length <= 1)){
            this.Members.splice(memberIndex, 1);
            const removedPlayer = Player.getPlayerByTag(removedMember.Tag);

            if (removedPlayer) {
                removedPlayer.guild = null;
                removedPlayer.save();
                removedPlayer.saveToDatabase();
            }

            //Update local storage
            let character = Player.getData(player.characterId);
            character.guildId = null;
            character.guildName = null;
            Player.fromDatabase(character);

            await (player.socket.services.repository as RepositoryService).updateCharacter(player.characterId, {
                guildId: null,
                guildName: null
            });

            packetSystemMessage.sendDirectSocket(player.socket, `You left the guild.`);
            packetGuildData.send(player, JSON.stringify(this.serialize(this.Owner === player.characterId)));
        }
        else if(removedMember.Plevel === GuildAccessLevel.Owner && this.Members.length > 1){
            packetSystemMessage.sendDirectSocket(player.socket, `For you to close the guild you need to remove all members first.`);
        }
    }

    serialize(returnRequests: boolean = false){
        let dataBase = {
            id: this.Id,
            owner: this.Owner,
            guildName: this.Name,
            members: this.Members,
            maxMembers: this.MaxMembers,
            level: this.Level,
            flag: this.Flag,
            requets: []
        };

        if(returnRequests)
            dataBase.requets = this.Requests;
                    
        return dataBase;
    }
}
import * as uuid from "uuid";
import * as uuidToHex from "uuid-to-hex";

import { Injectable, Logger } from "@nestjs/common";
import { Guilds, Maps } from "@engine";
import { RepositoryService } from '../utils/repository.service';


@Injectable()
export class GuildService {
    private readonly logger = new Logger(GuildService.name);

    constructor(
		private repository: RepositoryService
	){}

    async loadAll(){
        this.logger.verbose("Loading Guilds...");

        const guildsData = await this.repository.getGuilds();

        for(let guild of guildsData)
            Guilds.fromDatabase(guild);
        
        this.logger.verbose(`${guildsData.length} guilds loaded...`);
    }

    createGuildId(): string {
        const tmpUUID = uuid.v4();
        const hexStringWithLeadingZero = uuidToHex(tmpUUID, true);
        return hexStringWithLeadingZero.substr(0, 10);
    }

    async createGuild(
        owner: string, 
        guildName: string, 
        flag: any,
        members: string
    ) {
        const guildId = this.createGuildId();

        const result = this.repository.createGuild(guildId, {
            owner,
            guildName,
            flag: JSON.stringify(flag),
            members
        });

        return (result) ? guildId : null;
    }

    async updateGuild(data: any){
        await this.repository.updateGuild(data);
    }
}
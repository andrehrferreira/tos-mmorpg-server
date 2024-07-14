import Redis from "ioredis";
import { Queue } from "bull";

import { Injectable } from '@nestjs/common';
import { InjectRedis } from "@nestjs-modules/ioredis";
import { InjectQueue } from "@nestjs/bull";
import { RepositoryService, SteamService } from './utils';
import { ItemsService, GuildService, MapsService } from './ingame';

export * from "./auth.service";
export * from "./server.service";
export * from "./ingame";
export * from "./utils";

@Injectable()
export class Services {
    constructor(
        @InjectRedis() private readonly redis: Redis,
        @InjectQueue('gameserver') private gameServerQueue: Queue,
        public repository: RepositoryService,
        public itemsService: ItemsService,
        public guildService: GuildService,
        public mapsService: MapsService,
        public steamService: SteamService 
    ){}
}
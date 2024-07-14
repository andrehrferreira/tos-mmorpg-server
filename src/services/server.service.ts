import Redis from 'ioredis';

import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { InjectRedis } from '@nestjs-modules/ioredis';

import { ServerGameDocument } from "@repositories";
import { IServer } from '@interfaces';

@Injectable()
export class ServerService {
	constructor(
        @InjectRedis() private readonly redis: Redis,
		@InjectModel("servers") private serverGameDocument: Model<ServerGameDocument>,	
	){}

    async getAllServers(){
        const serversCache = await this.redis.get("allservers");

        if(serversCache)
            return { status: 200, data: JSON.parse(serversCache) };

        const allServers = await this.serverGameDocument.find({}, null, { fields: { 
            name: true, apiUrl: true, gameServer: true,
            pingIP: true, privateServer: true, type: true,
            status: true, rate: true
        } }
        ).lean();

        const servers = this.parsePublicData(allServers);
        await this.redis.set("allservers", JSON.stringify(servers), "EX", 3600);

        return { status: 200, data: allServers };
    }

    async getAllServersWS(){
        const serversCache = await this.redis.get("allservers");

        if(serversCache)
            return JSON.parse(serversCache);

        const allServers = await this.serverGameDocument.find({}, null, { fields: { 
            name: true, apiUrl: true, gameServer: true,
            pingIP: true, privateServer: true, type: true,
            status: true, rate: true
        } }
        ).lean();

        const servers = this.parsePublicData(allServers);
        await this.redis.set("allservers", JSON.stringify(servers), "EX", 3600);

        return allServers;
    }

    parsePublicData(docs){
        const removeFields = ["createdAt", "updatedAt", "active", "public", "__v"];

        return docs.map((doc) => {
            for(const key in doc){
                if(((!doc[key] || removeFields.indexOf(key) > -1) || doc[key] === 0 || doc[key] === "0") && doc[key] !== false)
                    delete doc[key];

                if(key == "Amount")
                    doc[key] = parseInt(doc[key]);
            }

            return doc;
        }).filter((item) => item);
    }

    async createOrUpdateServer(serverData: IServer, ownerId: string){
        const serverName = await this.serverGameDocument.findOne({ _id: serverData._id, ownerId });

        if(serverName){
            delete serverData["ownerId"];
            await this.serverGameDocument.updateOne({ _id: serverName._id }, { $set: serverData });
        }
        else 
            await this.serverGameDocument.insertMany({ ...serverData, ownerId });

        return "ok";
    }
}

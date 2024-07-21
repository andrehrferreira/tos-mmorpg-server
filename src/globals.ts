import * as path from "path";

import { ThrottlerModule } from "@nestjs/throttler";
import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { HttpModule } from "@nestjs/axios";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { RedisModule } from '@nestjs-modules/ioredis';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import * as AWS from 'aws-sdk';

//Services
import { 
    CryptoService,
    RepositoryService,
    EmailService,
    AuthService,
    ServerService,
    CharactersService,
    ItemsService,
    MapsService,
    ContainerService,
    GuildService,
    SteamService,
    Services
} from "@services";

import { 
    Entities, SQLiteRepository, 
    AccountsSchema, ServerGameSchema 
} from "@repositories";

export const Providers = [
    ConfigService, CryptoService, RepositoryService, SQLiteRepository,
    AuthService, CharactersService, EmailService, ItemsService,
    ServerService, MapsService, ContainerService, GuildService, 
    SteamService, Services
];

export const Imports = [
    MongooseModule.forFeature([
        { name: "accounts", schema: AccountsSchema },
        { name: "servers", schema: ServerGameSchema }
    ]),
]

let GoogleApisCredentials = { token_uri: "", client_id: "", private_key: ""};

try{
    GoogleApisCredentials = require("../googleapis.json");
} catch{}

@Module({})
export class Globals {
    static forRoot(): DynamicModule {
        return {
            module: Globals,
            imports: [
                HttpModule,
                ConfigModule.forRoot(),            
                BullModule.forRoot({  
                    redis: {
                        host: process.env.REDIS_HOST,
                        port: parseInt(process.env.REDIS_PORT)
                    }
                }),
                BullModule.registerQueue({ name: "email" }),
                BullModule.registerQueue({ name: "gameserver" }),
                MongooseModule.forRoot(process.env.MONGODB_URL, {
                    dbName: process.env.MONGODB_DATABASE,
                    user: process.env.MONGODB_USER,
                    pass: process.env.MONGODB_PASS
                }),
                TypeOrmModule.forRoot({
                    type: 'sqlite',
                    database: process.env.DATABASE_SQLITE_PATH,
                    synchronize: true,
                    logging: false,
                    entities: Entities
                }),
                TypeOrmModule.forFeature(Entities),
                MailerModule.forRoot({
                    transport: {
                        SES: new AWS.SES({
                            region: "us-east-1",
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        }),
                        secure: false,
                        ignoreTLS: true,
                        requireTLS: false,
                        debug: true
                    },
                    defaults: { from: process.env.EMAIL_FROM },
                    template: {
                        dir: path.resolve("./src/templates/"),
                        adapter: new HandlebarsAdapter(),
                        options: {
                            strict: true,
                        }
                    }
                }),
                RedisModule.forRoot({
                    type: "single",
                    url: process.env.REDIS_URL
                }),
                MongooseModule.forFeature([
                    { name: "accounts", schema: AccountsSchema },
                    { name: "servers", schema: ServerGameSchema }
                ]),  
                /*ThrottlerModule.forRoot([{
                    ttl: 10000,
                    limit: 100,
                }]),  */
                WinstonModule.forRoot({
                    level: 'debug',
                    transports: [
                        new winston.transports.Console({
                            format: winston.format.combine(
                                winston.format.timestamp(),
                                winston.format.ms(),
                                nestWinstonModuleUtilities.format.nestLike('ToS-Server', {
                                    colors: true,
                                    prettyPrint: true,
                                }),
                            ),
                        }),
                    ]
                }),  
            ],
            providers: Providers,
            exports: [TypeOrmModule, BullModule, ConfigModule, HttpModule]
        };
    }
}

import * as crypto from "crypto";
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { IRepository, ICharacter } from '@interfaces';
import { LogLevel } from "@enums";
import { AccountDTO } from "@repositories";

@Injectable()
export class SuperbaseRepository implements IRepository {
    private readonly logger = new Logger(SuperbaseRepository.name);
    private clientInstance: SupabaseClient;
    
    constructor(
        private readonly configService: ConfigService,
    ) {
        this.clientInstance = createClient(
            this.configService.get('SUPABASE_URL'),
            this.configService.get('SUPABASE_KEY')
        );
    }
    validateEmail(masterId: string, code: string) : Promise<boolean>{
        throw new Error("Method not implemented.");
    }

    updateAccountInformations(accountId: string, data: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    createLogReport(type: string, level: LogLevel, snapshot: string) {
        throw new Error("Method not implemented.");
    }
    
    async singUp(email: string, password: string) {
        const encryptedPassword = crypto.createHash("sha256").update(password).digest("hex");

        const { data, error } = await this.clientInstance.auth.signUp({
            email,
            password: encryptedPassword
        });

        if(error){
            this.logger.error(error);
            throw new InternalServerErrorException(error);
        }
        
        return data;
    }

    async signInWithPassword(email: string, password: string) : Promise<AccountDTO> {
        throw new Error("Method not implemented.");
        /*const encryptedPassword = crypto.createHash("sha256").update(password).digest("hex");

        const { data, error } = await this.clientInstance.auth.signInWithPassword({
            email,
            password: encryptedPassword
        });

        if(error){
            this.logger.error(error);
            throw new InternalServerErrorException(error);
        }
        
        return {
            masterId: data.user.id,            
            //token: data.session.access_token
        };*/
    }
    
    async getCharacterCount(accountId: string): Promise<number> {
        const { count } = await this.clientInstance.from("Characters")
        .select("*", { count: 'exact', head: true })
        .eq("account", accountId);

        return count;
    }

    async getCharacters(accountId: string) {
        const limitCharsPerAccount = parseInt(this.configService.get('TOR_CHARS_PER_ACCOUNT'));

        const { data } = await this.clientInstance.from("Characters")
        .select("name, visual, hashtag")
        .eq("account", accountId)
        .limit(limitCharsPerAccount);

        return { characters: data };
    }

    async createCharacter(data: ICharacter) {
        const result = await this.clientInstance.from("Characters").insert(data);
        return (!result.error);
    }

    changePassword(masterId: string, oldPassword: string, newPassword: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
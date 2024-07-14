import * as crypto from "crypto";

import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ICharacter } from "@interfaces";

@Injectable()
export class SupabaseServices {
    private readonly logger = new Logger(SupabaseServices.name);
    private clientInstance: SupabaseClient;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.clientInstance = createClient(
            this.configService.get('SUPABASE_URL'),
            this.configService.get('SUPABASE_KEY')
        );
    }

    public async singUp(email: string, password: string){
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

    public async signInWithPassword(email: string, password: string){
        const encryptedPassword = crypto.createHash("sha256").update(password).digest("hex");

        const { data, error } = await this.clientInstance.auth.signInWithPassword({
            email,
            password: encryptedPassword
        });

        if(error){
            this.logger.error(error);
            throw new InternalServerErrorException(error);
        }
        
        return {
            id: data.user.id,
            token: data.session.access_token
        };
    }

    public async retriveUser(token: string){
        return this.clientInstance.auth.getUser(token);
    }

    public async getCharacterCount(accountId: string) : Promise<number> {
        const { count } = await this.clientInstance.from("Characters")
        .select("*", { count: 'exact', head: true })
        .eq("account", accountId);

        return count;
    }

    public async getCharacters(accountId: string) {
        const limitCharsPerAccount = parseInt(this.configService.get('TOR_CHARS_PER_ACCOUNT'));

        const { data } = await this.clientInstance.from("Characters")
        .select("name, visual, hashtag")
        .eq("account", accountId)
        .limit(limitCharsPerAccount);

        return { characters: data };
    }

    public async createCharacter(data: ICharacter){
        return this.clientInstance.from("Characters").insert(data);
    }   

    public async deleteCharacter(){

    }
}
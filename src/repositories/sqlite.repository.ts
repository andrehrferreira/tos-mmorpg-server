import { Repository } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { authenticator } from "otplib";

import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";

import { CryptoService } from "../services/utils/crypto.service";
import { IRepository } from "@interfaces";
import { LogLevel } from "@enums";

import { 
    CharacterEntity, 
    ItemEntity, 
    LogsEntity, 
    RespawnEntity,
    ContainerEntity,
    GuildEntity 
} from "./entities";

@Injectable()
export class SQLiteRepository implements IRepository {
    constructor(
        @InjectRepository(LogsEntity) private readonly logsRepository: Repository<LogsEntity>,
        //@InjectRepository(AccountEntity) private readonly accountRepository: Repository<AccountEntity>,
        @InjectRepository(CharacterEntity) private readonly characterRepository: Repository<CharacterEntity>,
        @InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>,
        @InjectRepository(RespawnEntity) private readonly respawnRepository: Repository<RespawnEntity>,
        @InjectRepository(ContainerEntity) private readonly containerRepository: Repository<ContainerEntity>,
        @InjectRepository(GuildEntity) private readonly guildRepository: Repository<GuildEntity>,
        private readonly cryptoService: CryptoService
    ) {}
        
    async createLogReport(type: string, level: LogLevel = LogLevel.Info, snapshot: string = "") {
        const log = this.logsRepository.create({ type, level, snapshot });
        await this.logsRepository.save(log);
    }

    /*async singUpLocalAccount(masterId: string, hashedUsername: string, hashedPassword: string, emailToken: string, optin: string){
        try {
            const account = this.accountRepository.create({ 
                masterId, 
                serverId: uuidv4(),
                username: hashedUsername, 
                password: hashedPassword,
                optin,
                emailToken,
                othersId: []  
            });

            const result = await this.accountRepository.save(account);
            return (result && result.masterId) ? result : null;
        }
        catch(e){
            return e.message;
        } 
    }*/

    /*async singUp(masterId: string, email: string, password: string) {
        try {
            const hashedUsername = this.cryptoService.hashUsername(email);
            const hashedPassword = this.cryptoService.hashPassword(password);
            const emailToken = this.cryptoService.encryptEmail(email);
            const exists = await this.accountRepository.findOne({ where: { username: hashedUsername } });

            if(exists)
                throw new HttpException("The informed user already exists in the database", HttpStatus.BAD_REQUEST);
            
            const account = this.accountRepository.create({ 
                masterId: masterId, 
                serverId: uuidv4(),
                username: hashedUsername, 
                password: hashedPassword,
                optin: authenticator.generateSecret(),
                emailToken,
                othersId: []  
            });

            const result = await this.accountRepository.save(account);
            return (result && result.masterId) ? result : null;
        }
        catch(e){
            return e.message;
        }        
    }*/

    /*async signInWithPassword(email: string, password: string, minPlevel: number = 1): Promise<AccountDTO> {
       const hashedUsername = this.cryptoService.hashUsername(email);
        const hashedPassword = this.cryptoService.hashPassword(password);

        const account = await this.accountRepository.findOne({ where: { 
            username: hashedUsername, 
            password: hashedPassword
        }, select: [
            "masterId", "fingerprints", "plevel", "pin", "optin", 
            "twoFactorEnabled", "emailValidation", "emailToken",
            "block", "blockTimeout", "banned", "bannedReason", 
            "banDatetime"
        ]});

        if (!account) 
          throw new NotFoundException('User not found or incorrect password.');

        account.lastLogin = new Date();
        await this.accountRepository.save(account);
        
        return account;
    }*/

    /*async updateAccountInformations(accountId: string, data: any): Promise<boolean> {
        try {
            const account = await this.accountRepository.findOne({
                where: { masterId: accountId },
            });

            if (!account) 
                throw new NotFoundException('Account not found.');
            
            Object.assign(account, data);
            await this.accountRepository.save(account);

            return true;
        } catch (error) {
            throw new HttpException('Error updating account information', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

    /*async getAccount(accountId: string){
        const account = await this.accountRepository.findOne({ where: { 
            masterId: accountId 
        }, select: [
            "plevel", "twoFactorEnabled", "emailValidation",
            "block", "blockTimeout", "banned", "bannedReason", 
            "banDatetime", "serverId", "masterId", "diffKey"
        ]});

        if (!account) 
          throw new NotFoundException('User not found or incorrect password.');

        return account;
    }*/

    async getCharacterCount(accountId: string): Promise<number> {
        return this.characterRepository.count({ where: { accountId } });
    }

    async getAllCharacters(){
        try {       
            return await this.characterRepository.find({});        
        } catch (error) {
            throw new NotFoundException('Characters not found.');
        } 
    }

    async getCharacters(accountId: string) {
        try {
            let characters = await this.characterRepository.find({ 
                select: { 
                    id: true, name: true, hashtag: true, visual: true,
                    chestArmor: true, helmetArmor: true, bootsArmor: true,
                    glovesArmor: true, pantsArmor: true, robe: true,
                    cloak: true, offhand: true, mainhand: true
                },
                where: { accountId }, 
                take: 10, 
            });
            
            return characters;        
        } catch (error) {
            throw new NotFoundException('Characters not found.');
        }
    }

    async getCharacter(accountId: string, characterId: string, fields: string[] | string = "*"){
        try {
            let selectFields: (keyof CharacterEntity)[];

            if (fields === "*") {
                selectFields = undefined;
            } 
            else {
                const fieldsArray = Array.isArray(fields) ? fields : fields.split(',');
                selectFields = fieldsArray as (keyof CharacterEntity)[];
                const essentialFields: (keyof CharacterEntity)[] = ['id'];
                selectFields = [...new Set([...selectFields, ...essentialFields])];
            }

            let character: any = await this.characterRepository.findOne({ 
                where: { accountId, id: characterId },
                select: selectFields
            });

            character.skills = (character.skills) ? JSON.parse(character.skills) : {};
            character.inventory = (character.inventory) ? JSON.parse(character.inventory) : {};
            character.proficiencies = (character.proficiencies) ? JSON.parse(character.proficiencies) : {};
 
            return character;        
        } catch (error) {
            throw new NotFoundException('Character not found.');
        }
    }

    async createCharacter(data: any) : Promise<boolean> {
        data.skills = JSON.stringify(data.skills);
        const character = this.characterRepository.create(data);
        const char = await this.characterRepository.save(character);
        return (char != null && char != undefined);
    }

    async updateCharacter(id: string, data: any): Promise<boolean> {
        try {
            const character = await this.characterRepository.findOneBy({ id });

            if (!character) 
                throw new NotFoundException('Character not found.');
            
            Object.assign(character, data);
            await this.characterRepository.save(character);

            return true;
        } catch { }
    }   

    async deleteCharacter(id: string): Promise<boolean> {
        try {
            await this.characterRepository.delete({ id });
            return true;
        } catch { }

        return false;
    }

    /*async changePassword(masterId: string, oldPassword: string, newPassword: string): Promise<boolean> {
        try {
            const hashedOldPassword = this.cryptoService.hashPassword(oldPassword);
            const hashedNewPassword = this.cryptoService.hashPassword(newPassword);
    
            const account = await this.accountRepository.findOne({
                where: {
                    masterId,
                    password: hashedOldPassword,
                },
            });
    
            if (!account) 
                throw new NotFoundException('User not found or incorrect old password.');
                
            account.password = hashedNewPassword;
            await this.accountRepository.save(account);
    
            return true;
        } 
        catch (error) {
            throw new HttpException('Error changing password', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }   */ 

    /*async validateEmail(masterId: string, code: string) : Promise<boolean> {
        const account = await this.accountRepository.findOne({
            where: { masterId, emailValidationCode: code },
        });

        if(account){
            await this.updateAccountInformations(masterId, { emailValidation: true });
            return true;
        }
        else{
            return false;
        }
    }*/

    /*removeBlockAccount(masterId: string){
        return this.updateAccountInformations(masterId, { block: false, blockTimeout: 0 });
    }*/

    /* Items */
    async createItem(data: any): Promise<boolean> {
        const item = this.itemRepository.create(data);
        const itemDb = await this.itemRepository.save(item);
        return (itemDb != null && itemDb != undefined);
    }

    async getItem(ref: string): Promise<null | any> {
        const item = await this.itemRepository.findOneBy({ id: ref });
        return (item) ? item : null;
    }

    async getItems() : Promise<null | any> {
        const items = await this.itemRepository.find({});
        return (items) ? items : null;
    }

    async updateItem(ref: string, data: any) : Promise<boolean> {
        try{
            const item = await this.itemRepository.findOneBy({ id: ref });

            if (item){
                Object.assign(item, data);
                await this.itemRepository.save(item);
                return true;
            }
        }
        catch(e){}

        return false;
    }

    async deleteItem(ref: string){
        const result = await this.itemRepository.delete({ id: ref });
        return result;
    }

    /* Respawn */
    async createRespawn(data: any) : Promise<boolean> {
        const respawn = this.respawnRepository.create(data);
        const respawnDb = await this.respawnRepository.save(respawn);
        return (respawnDb != null && respawnDb != undefined);
    }

    async getRespawns(map: string){
        const respawns = await this.respawnRepository.find({ where: { map } });
        return respawns;
    }

    async removeRespawn(id: string) : Promise<boolean> {
        const respawn = await this.respawnRepository.findOne({ where: { id } });

        if(respawn){
            await this.respawnRepository.delete(respawn);
            return true;
        }
        else{
            return false;
        }
    }

    /* Containers */
    async createContainer(data: any) : Promise<boolean> {
        try{
            const containerExists = await this.containerRepository.findOne({ where: { 
                containerId: data.containerId, 
                characterId: data.characterId 
            }});

            if(!containerExists){
                const container = this.containerRepository.create(data);
                const containerDb = await this.containerRepository.save(container);
                return (containerDb != null && containerDb != undefined);
            }
        } catch (e){ }

        return false;        
    }

    async getContainers() {
        const containers = await this.containerRepository.find({});
        return containers;
    }

    async getContainer(containerId: string, characterId: string) {
        const container = await this.containerRepository.findOne({ where: { containerId, characterId }});
        return container;
    }

    async updateContainer(data: any) : Promise<boolean> {
        try{
            const container = await this.containerRepository.findOne({ where: { 
                containerId: data.containerId
            }});

            if (container) {
                Object.assign(container, data);
                await this.containerRepository.save(container);
                return true;
            }
        } catch (e){ }
        
        return false;
    }

    async upsertContainer(data: any) : Promise<boolean> {
        try{
            let tryUpdate = null;
            tryUpdate = await this.updateContainer(data);
            return (!tryUpdate) ? await this.createContainer(data) : true;
        } catch (e){ }
        
        return false
    }

    async deleteContainer(containerId: string){
        try{
            await this.containerRepository.findOne({ where: { 
                containerId
            }});

            return true;
        } catch { }
        
        return false;
    }

    /* Guild */
    async getGuilds() : Promise<null | any> {
        const guilds = await this.guildRepository.find({});
        return (guilds) ? guilds : null;
    }

    async createGuild(guildId: string, data: any) : Promise<boolean> {
        const guild = this.guildRepository.create({ id: guildId, ...data });
        const guildDb = await this.guildRepository.save(guild);
        return (guildDb != null && guildDb != undefined);
    }

    async updateGuild(data: any) : Promise<boolean> {
        try{
            const guild = await this.guildRepository.findOne({ where: { 
                id: data.id
            }});

            if (guild) {
                Object.assign(guild, data);
                await this.guildRepository.save(guild);
                return true;
            }
        } catch (e){  }
        
        return false;
    }
}

export const Entities = [
    /*AccountEntity,*/ CharacterEntity, 
    ItemEntity, LogsEntity, RespawnEntity,
    ContainerEntity, GuildEntity
];

export const SQLiteRepositoryModules = TypeOrmModule.forFeature(Entities);
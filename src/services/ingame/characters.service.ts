import * as fs from 'fs';
import * as path from 'path';
import * as JWT from "jsonwebtoken";
import * as YAML from 'yaml';
import * as uuid from "uuid";
import Redis from 'ioredis';

import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { ICharacterCreatePayload, ICharacterPayloadInfo } from '@interfaces';
import { Containers, ItemRarity, Items, Player, packetCreateCharacterError } from "@engine";
import { GUID } from "@utils";

import { RepositoryService } from "../utils/repository.service";
import { ItemsService } from './items.service';
import { ContainerService } from './container.service';

@Injectable()
export class CharactersService {
    private readonly logger = new Logger(CharactersService.name);
    private readonly gameServerSettings : any;

	constructor(
        @InjectRedis() private readonly redis: Redis,
        private readonly configService: ConfigService,
		private repository: RepositoryService,
        private itemsService: ItemsService,
        private containerService: ContainerService
	){
        const file = fs.readFileSync(path.resolve("./game-server.yml"), 'utf8')
        this.gameServerSettings = YAML.parse(file);
    }

    async loadAll(){
        this.logger.verbose("Loading Players...");

        const allCharacters = await this.repository.getAllCharacters();

        for(let character of allCharacters)
            Player.fromDatabase(character);
        
        this.logger.verbose(`${allCharacters.length} Players...`);
    }

    createHash(){
        return Math.floor(100000 + Math.random() * 900000);
    }

	async createCharacter(characterPayload: ICharacterCreatePayload, token: string){
        try{
            const limitCharsPerAccount = parseInt(this.configService.get('TOR_CHARS_PER_ACCOUNT'));
            const decoded = JWT.verify(token, this.configService.get('TOS_JWT_SECRET'));

            const characterCount = await this.repository.getCharacterCount(decoded.data.masterId);
            const payload : ICharacterPayloadInfo = JSON.parse(characterPayload.payload);

            if(characterCount > limitCharsPerAccount)
                throw new Error(`The limit of characters per account is ${limitCharsPerAccount}`);

            if(characterPayload.name.length < 3 || characterPayload.name.length > 14)
                throw new Error("It is not possible to create the character because the name is outside the standard accepted by the server");
        
            //if(this.totalStatsPoints(payload) !== this.gameServerSettings.initStatsPoints)
            //    throw new Error("It was not possible to create the character because the total status points are different from those configured on the server");

            //if(this.totalSkillPoints(payload) !== this.gameServerSettings.initSkillPoints)
            //    throw new Error("It was not possible to create the character because the total skills points are different from those configured on the server");

            let character : any = { };
            character.id = GUID.NewID();
            character.accountId = decoded.data.masterId;
            character.name = characterPayload.name;            
            character.hashtag = `${ characterPayload.name.replace(/\s+/g, '').substring(0,10).toUpperCase() }#${this.createHash()}`;

            //Status
            character.str = payload.Stats.Str;
            character.dex = payload.Stats.Dex;
            character.int = payload.Stats.Int;
            character.agi = payload.Stats.Agi;
            character.vig = payload.Stats.Vig;
            character.luc = payload.Stats.Luc;

            let visual = {};

            for(let key in payload){
                if(key !== "Stats" && key !== "Skills")
                    visual[key] = payload[key];
            }

            character.visual = JSON.stringify(visual);
            character.skills = payload.Skills;

            character.map = this.gameServerSettings.initialMap;
            character.x = this.gameServerSettings.initialPosX;
            character.y = this.gameServerSettings.initialPosY;
            character.z = this.gameServerSettings.initialPosZ;
            character.r = 0;
            
            character.chestArmor = { ItemName: "SK_ma_medieval_chest_villager_01_b" }
            character.pantsArmor = { ItemName: "SK_ma_medieval_armour_pants_02" }
            character.bootsArmor = { ItemName: "SK_ma_medieval_shoe_02_a" }

            //Inventory itens

            let inventory = [
                { ItemName: "GoldCoin", Amount: 500 },
                { ItemName: "SmallLifePotion", Amount: 10 }
            ];

            character.inventory = {}

            for(let key in inventory)
                character.inventory[key] = inventory[key];
            
            const inventoryId = GUID.NewID();
            const referedInventoy = await this.createInventoryItems(character.id, inventoryId, character.inventory);
            character.inventory = JSON.stringify(referedInventoy);
            character.inventoryId = inventoryId;
            character = await this.createEquipamentsRefs(character, character.id, inventoryId);

            character.chestArmor = JSON.stringify(character.chestArmor);
            character.pantsArmor = JSON.stringify(character.pantsArmor);
            character.bootsArmor = JSON.stringify(character.bootsArmor);

            const result = await this.repository.createCharacter(character);   
            Player.playerData.set(character.id, character);

            await this.containerService.upsertContainer(inventoryId, character.id, character.inventory);

            Containers.fromDatabase({
                containerId: inventoryId,
                items: character.inventory
            });
                    
            if(!result){
                this.logger.error("Error when trying to create character");
                throw new Error("Error when trying to create character");
            }

            return true;
        }
        catch(e){
            Logger.error(e.message);
            return false;
            //throw new InternalServerErrorException(e.message);
        }
	}

    totalStatsPoints(characterPayload: ICharacterPayloadInfo) : number {
        return characterPayload.Stats.Str +
        characterPayload.Stats.Dex + 
        characterPayload.Stats.Int + 
        characterPayload.Stats.Luc + 
        characterPayload.Stats.Agi + 
        characterPayload.Stats.Vig 
    }

    totalSkillPoints(characterPayload: ICharacterPayloadInfo): number {
        let total = 0;

        for(let skillName in characterPayload.Skills) {
            const skillInfo = characterPayload.Skills[skillName];
            total += skillInfo.Value;
        }

        return total; 
    }

    async createInventoryItems(characterId: string, inventoryId: string, inventory: any): Promise<any> {
        for(let key in inventory){
            try{
                const itemName = inventory[key].ItemName;
                const amount = inventory[key].Amount || 1;
                const itemRef = await this.itemsService.createItem(inventoryId, characterId, itemName, amount, "createchar");
                inventory[key].ItemRef = itemRef;                
            }
            catch(e){
                throw new InternalServerErrorException(e.message);
            }            
        }

        return inventory;
    }

    async createEquipamentsRefs(character: any, characterId: string, inventoryId: string){
        //Chest
        if(character.chestArmor){
            const chestId = await this.itemsService.createItem(inventoryId, characterId, character.chestArmor.ItemName, 1, "createchar")
            character.chestArmor.ItemRef = chestId;
            Items.itemFromDatabase({ id: chestId, itemName: character.chestArmor.ItemName });
        }
        
        //Pants
        if(character.pantsArmor){
            const pantsId = await this.itemsService.createItem(inventoryId, characterId, character.pantsArmor.ItemName, 1, "createchar")
            character.pantsArmor.ItemRef = pantsId;
            Items.itemFromDatabase({ id: pantsId, itemName: character.pantsArmor.ItemName });
        }
        
        //Boots
        if(character.bootsArmor){
            const bootsId = await this.itemsService.createItem(inventoryId, characterId, character.bootsArmor.ItemName, 1, "createchar")
            character.bootsArmor.ItemRef = bootsId;
            Items.itemFromDatabase({ id: bootsId, itemName: character.bootsArmor.ItemName });
        }

        return character;
    }

    async getAllCharacters(token: string){
        const decoded = JWT.verify(token, this.configService.get('TOS_JWT_SECRET'));
        const characters = await this.repository.getCharacters(decoded.data.masterId);

        for(let key in characters){
            characters[key].chestArmor = (characters[key].chestArmor) ? this.getRarity(JSON.parse(characters[key].chestArmor)) : null;
            characters[key].helmetArmor = (characters[key].helmetArmor) ? this.getRarity(JSON.parse(characters[key].helmetArmor)) : null;
            characters[key].bootsArmor = (characters[key].bootsArmor) ? this.getRarity(JSON.parse(characters[key].bootsArmor)) : null;
            characters[key].glovesArmor = (characters[key].glovesArmor) ? this.getRarity(JSON.parse(characters[key].glovesArmor)) : null;
            characters[key].pantsArmor = (characters[key].pantsArmor) ? this.getRarity(JSON.parse(characters[key].pantsArmor)) : null;
            characters[key].robe = (characters[key].robe) ? this.getRarity(JSON.parse(characters[key].robe)) : null;
            characters[key].cloak = (characters[key].cloak) ? this.getRarity(JSON.parse(characters[key].cloak)) : null;
            characters[key].offhand = (characters[key].offhand) ? this.getRarity(JSON.parse(characters[key].offhand)) : null;
            characters[key].mainhand = (characters[key].mainhand) ? this.getRarity(JSON.parse(characters[key].mainhand)) : null;
            characters[key].instrument = (characters[key].instrument) ? this.getRarity(JSON.parse(characters[key].instrument)) : null;
            characters[key].pet = (characters[key].pet) ? this.getRarity(JSON.parse(characters[key].pet)) : null;
            characters[key].mount = (characters[key].mount) ? this.getRarity(JSON.parse(characters[key].mount)) : null;
        }

        if(characters)
            return JSON.stringify({ characters });
        else 
            throw new InternalServerErrorException("No characters found on this account");
    }

    async getFullCharacterInfo(token: string, characterId: string){
        try{
            const decoded = JWT.verify(token, this.configService.get('TOS_JWT_SECRET'));
            const character = Player.getData(characterId);

            if(!character)
                throw new InternalServerErrorException("The requested character does not exist or you cannot access it");

            return Player.parseData(characterId, decoded.data);
        }
        catch (e) {
            Logger.error(e.message);
            throw new InternalServerErrorException(e.message);
        }        
    }

    async updateCharacter(id: string, data: any){
        await this.repository.updateCharacter(id, data);
    }

    async deleteCharacter(id: string){
        await this.repository.deleteCharacter(id);
    }

    getRarity(data){
        if(data && data.ItemRef){
            const item = Items.getItemByRef(data.ItemRef);
            data.Rarity = (item) ? item.Rarity : ItemRarity.Common;
        }

        return data;
    }
}

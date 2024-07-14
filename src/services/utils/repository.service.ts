import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";

import * as JWT from "jsonwebtoken";

import { IRepository, ICharacter } from "@interfaces";
import { SQLiteRepository } from '@repositories';
import { LogLevel } from '@enums';

@Injectable()
export class RepositoryService implements IRepository {
    constructor(
        private readonly configService: ConfigService,
        private readonly repository: SQLiteRepository
    ) {}

    createLogReport(type: string, level: LogLevel = LogLevel.Info, snapshot: string = ""){
        return this.repository.createLogReport(type, level, snapshot);
    }

    /*singUpLocalAccount(masterId: string, hashedUsername: string, hashedPassword: string, emailToken: string, optin: string){
        return this.repository.singUpLocalAccount(masterId, hashedUsername, hashedPassword, emailToken, optin);
    }

    singUp(masterId: string, email: string, password: string) {
        return this.repository.singUp(masterId, email, password);
    }

    signInWithPassword(email: string, password: string, minPlevel: number = 1) {
        return this.repository.signInWithPassword(email, password, minPlevel);
    }

    updateAccountInformations(accountId: string, data: any) : Promise<boolean> {
        return this.repository.updateAccountInformations(accountId, data);
    }

    async getAccountFromToken(token: string) {
        const decoded = JWT.verify(token, this.configService.get('TOS_JWT_SECRET'));
		const account = await this.repository.getAccount(decoded.data.id);
        return account;
    }

    getAccount(accountId: string) {
        return this.repository.getAccount(accountId);
    }

    validateEmail(masterId: string, code: string){
        return this.repository.validateEmail(masterId, code);
    }

    changePassword(masterId: string, oldPassword: string, newPassword: string): Promise<boolean> {
        return this.repository.changePassword(masterId, oldPassword, newPassword);
    }

    removeBlockAccount(masterId: string){
        return this.repository.removeBlockAccount(masterId);
    }*/
    
    //Character 
    getAllCharacters() {
        return this.repository.getAllCharacters();
    }

    getCharacterCount(accountId: string): Promise<number> {
        return this.repository.getCharacterCount(accountId);
    }

    getCharacters(accountId: string) {
        return this.repository.getCharacters(accountId);
    }

    getCharacter(accountId: string, characterId: string, fields: Array<string> | string = "*") {
        return this.repository.getCharacter(accountId, characterId, fields);
    }

    createCharacter(data: ICharacter) {
        return this.repository.createCharacter(data);
    }

    updateCharacter(id: string, data: any){
        return this.repository.updateCharacter(id, data);
    }

    deleteCharacter(id){
        return this.repository.deleteCharacter(id);
    }

    // Items    
    createItem(data: any){
        return this.repository.createItem(data);
    }

    getItem(ref: string){
        return this.repository.getItem(ref);
    }

    getItems(){
        return this.repository.getItems();
    }

    updateItem(ref: string, data: any){
        return this.repository.updateItem(ref, data);
    }

    deleteItem(ref: string){
        return this.repository.deleteItem(ref);
    }

    //Respawn
    createRespawn(data: any){
        return this.repository.createRespawn(data);
    }

    getRespawns(map: string){
        return this.repository.getRespawns(map);
    }

    removeRespawn(id: string){
        return this.repository.removeRespawn(id);
    }

    //Container
    createContainer(data: any){
        return this.repository.createContainer(data);
    }

    getContainers(){
        return this.repository.getContainers();
    }

    getContainer(containerId: string, characterId: string){
        return this.repository.getContainer(containerId, characterId);
    }

    updateContainer(data: any){
        return this.repository.updateContainer(data);
    }

    upsertContainer(data: any){
        return this.repository.upsertContainer(data);
    }

    deleteContainer(containerId: string){
        return this.repository.deleteContainer(containerId);
    }

    //Guild
    getGuilds(){
        return this.repository.getGuilds();
    }

    createGuild(guildId: string, data: any){
        return this.repository.createGuild(guildId, data);
    }

    updateGuild(data: any){
        return this.repository.updateGuild(data);
    }
}
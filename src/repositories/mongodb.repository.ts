import { Injectable } from '@nestjs/common';
import { IRepository, ICharacter } from '@interfaces';
import { LogLevel } from '@enums';
import { AccountDTO } from '@repositories';

@Injectable()
export class MongoDBRepository implements IRepository {
    constructor(

    ) {}
        
    updateAccountInformations(accountId: string, data: any): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    
    createLogReport(type: string, level: LogLevel, snapshot: string) {
        throw new Error('Method not implemented.');
    }

    singUp(email: string, password: string) {
        throw new Error('Method not implemented.');
    }

    async signInWithPassword(email: string, password: string) : Promise<AccountDTO> {
        throw new Error('Method not implemented.');
    }

    retriveUser(token: string) {
        throw new Error('Method not implemented.');
    }

    getCharacterCount(accountId: string): Promise<number> {
        throw new Error('Method not implemented.');
    }
    getCharacters(accountId: string) {
        throw new Error('Method not implemented.');
    }

    async createCharacter(data: ICharacter) {
        return true;
        throw new Error('Method not implemented.');
    }
    
    changePassword(masterId: string, oldPassword: string, newPassword: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    validateEmail(masterId: string, code: string) : Promise<boolean>{
        throw new Error('Method not implemented.');
    }
}
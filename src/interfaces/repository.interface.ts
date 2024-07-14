import { Plevel, LogLevel } from "@enums";
import { ICharacter } from "@interfaces";
import { AccountDTO } from "@repositories";

export interface IRepository {
    createLogReport(type: string, level: LogLevel, snapshot: string)
    //singUp(masterId: string, email: string, password: string);
    //signInWithPassword(email: string, password: string, minPlevel: Plevel) : Promise<AccountDTO>;
    //updateAccountInformations(accountId: string, data: any) : Promise<boolean>;
    //getCharacterCount(accountId: string) : Promise<number>;
    //getCharacters(accountId: string);
    //createCharacter(data: ICharacter) : Promise<boolean>;
    //changePassword(masterId: string, oldPassword: string, newPassword: string) : Promise<boolean>;
    //validateEmail(masterId: string, code: string) : Promise<boolean>;
}
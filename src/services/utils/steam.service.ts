import { firstValueFrom } from "rxjs";
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SteamService {
    constructor(
		private readonly httpService: HttpService
	) {}

    public async verifySteamToken(token: string, playtest: boolean = false){
        if(token !== undefined && token !== null && token !== ""){
            const validateSteamToken = await firstValueFrom(
                this.httpService.get(`https://api.steampowered.com/ISteamUserAuth/AuthenticateUserTicket/v0001/`, {
                    params: {
                        key: process.env.STEAM_KEY,
                        appid: (playtest) ? process.env.STEAM_APPID_PLAYTEST : process.env.STEAM_APPID,
                        ticket: token
                    }
                }),
            );

            return (validateSteamToken.data) ? validateSteamToken.data : null;
        }
        else{
            return null;
        }
    }
}
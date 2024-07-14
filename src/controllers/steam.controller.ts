import { 
	Controller, Post, Body, UseFilters,
    InternalServerErrorException, Response
} from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { HttpExceptionFilter } from '@utils';
import { SteamService } from "@services";

@Controller("steam")
export class SteamController {
	constructor(
		private readonly httpService: HttpService,
        private readonly steamService: SteamService
	) {}

	@ApiExcludeEndpoint()
	@Post()
    @UseFilters(new HttpExceptionFilter())
	async verifySteamToken(@Body() body, @Response() res) {
        try{
            if(body.token !== undefined && body.token !== null && body.token !== ""){
                const result = this.steamService.verifySteamToken(body.token);

                if(result)
                    res.status(200).send({ status: 200, ...result });	
            }
            else{
                res.status(500).send({ status: 500 });
            }
        }
        catch(e){
            res.status(500).send({ status: 500 });
        }
	}   
}

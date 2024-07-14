import { 
	Controller, Get, Post, Body, UseGuards, UseFilters,
    Request, InternalServerErrorException, Param 
} from '@nestjs/common';

import { ApiBearerAuth } from '@nestjs/swagger'; 
import { AuthGuard, HttpExceptionFilter } from '@utils';
import { CharactersService } from '@services';
import { ICharacterCreatePayload } from '@interfaces';

@Controller("chars")
export class CharactersController {
	constructor(
        private readonly charactersService: CharactersService
    ) { }

	@Get()
    @ApiBearerAuth("oauth")
    @UseFilters(new HttpExceptionFilter())
    @UseGuards(AuthGuard)
	getCharacters(@Request() req) {
        try{
            return this.charactersService.getAllCharacters(req.token);
        }
        catch(e){
            throw new InternalServerErrorException(e.message);
        }
    }

    @Get(":characterId")
    @ApiBearerAuth("oauth")
    @UseFilters(new HttpExceptionFilter())
    @UseGuards(AuthGuard)
	getCharacterFullInfo(@Request() req, @Param("characterId") characterId) {
        try{
            return this.charactersService.getFullCharacterInfo(req.token, characterId);
        }
        catch(e){
            throw new InternalServerErrorException(e.message);
        }
    }

    @Post()
    @ApiBearerAuth("oauth")
    @UseGuards(AuthGuard)
    @UseFilters(new HttpExceptionFilter())
    createCharacter(@Body() body : ICharacterCreatePayload, @Request() req){
        try{
            return this.charactersService.createCharacter(body, req.token);
        }
        catch(e){
            throw new InternalServerErrorException(e.message);
        }
    }
}
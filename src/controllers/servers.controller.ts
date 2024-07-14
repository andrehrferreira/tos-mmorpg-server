import { 
	Controller, Get, Post, Body, 
	Put, UseFilters, UseGuards, Request
} from '@nestjs/common';

import { ApiExcludeEndpoint } from '@nestjs/swagger';

import { IServer } from '@interfaces';
import { ServerService } from '@services';
import { HttpExceptionFilter, AuthGuard } from '@utils';

@Controller("servers")
export class ServersController {
	constructor(private readonly serverService: ServerService) {}

	@ApiExcludeEndpoint()
	@Get()
	async returnAllServers() {
		return this.serverService.getAllServers();
	}   

    @ApiExcludeEndpoint()
    @Post()
    @UseFilters(new HttpExceptionFilter())
	@UseGuards(AuthGuard)
    async createServer(@Body() body: IServer, @Request() req){
        return await this.serverService.createOrUpdateServer(body, req.masterId);
    }

	@ApiExcludeEndpoint()
    @Put("/:serverId")
    @UseFilters(new HttpExceptionFilter())
	@UseGuards(AuthGuard)
    async updateServer(@Body() body: IServer, @Request() req){
        await this.serverService.createOrUpdateServer(body, body.ownerId);
		return { status: 200 };
    }
}

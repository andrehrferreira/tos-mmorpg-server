import { Subject } from "rxjs";
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Providers, Imports, Globals } from "./globals"; 

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GameServerConsumer } from "@consumers";

import { 
	ServersController,
	DashboardAuthController,
	CharactersController,
	MapController,
	SteamController
} from "@controllers";

import { 
	GameServerGateway, 
	EntitiesGateway,
	PlayerGateway,
	ContainersGateway 
} from '@gateways';

import { 
	ItemsService,
	ContainerService, 
	MapsService,
	GuildService,
	CharactersService
} from "@services";

import { 
	CraftRecipe, Player 
} from "@engine";

import { BaseVendor } from "./engine/mobiles/vendors";

export let OnLoadModules = new Subject();

@Module({
	imports: [	
		ServeStaticModule.forRoot({
			serveRoot: "/admin",
			rootPath: join(__dirname, '..', 'admin', 'dist'),
		}, {
			serveRoot: "/assets",
			rootPath: join(__dirname, '..', 'admin', 'dist', "assets"),
		}),
		Globals.forRoot(),	
		ConfigModule.forRoot(),		
		...Imports
	],
	controllers: [ 
		ServersController,
		DashboardAuthController,
		CharactersController,
		MapController,
		SteamController
	],
	providers: [
		...Providers,
		GameServerConsumer,
		GameServerGateway,
		EntitiesGateway,
		PlayerGateway,
		ContainersGateway
	]
})
export class AppModule {
	constructor(
		private readonly itemsService: ItemsService,
		private readonly containerService: ContainerService,
		private readonly mapsService: MapsService,
		private readonly guildService: GuildService,
		private readonly charactersService: CharactersService,
	){
		this.initServer();
	}

	async initServer(){
		await this.mapsService.loadAll();
		await this.itemsService.loadAll();
		await this.containerService.loadAll();		
		await this.guildService.loadAll();	
		await this.charactersService.loadAll();
		CraftRecipe.generateCraftLists();
		BaseVendor.generateLists();
		OnLoadModules.next(null);
	}
}


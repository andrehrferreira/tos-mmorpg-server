import { 
	Controller, Get, Param
} from '@nestjs/common';

import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { ServerService } from '@services';
import { Maps } from "@engine";

@Controller("map")
export class MapController {
	constructor(private readonly serverService: ServerService) {}

	@ApiExcludeEndpoint()
	@Get("/:mapName")
	async returnAllServers(@Param("mapName") mapName: string) {
        return (Maps.foliageInitialData.has(mapName)) ? Maps.foliageInitialData.get(mapName) : "";
	}   
}

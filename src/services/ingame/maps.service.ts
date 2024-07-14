import * as path from "path";
import * as fs from "fs";
import { glob } from "glob";
import { Injectable, Logger } from "@nestjs/common";
import { Maps } from "@engine";
import { RepositoryService } from '../utils/repository.service';


@Injectable()
export class MapsService {
    private readonly logger = new Logger(MapsService.name);

    constructor(
		private repository: RepositoryService
	){}

    getRespawns(map: string) {
        return this.repository.getRespawns(map);
    }

    createRespawn(data: any) {
        return this.repository.createRespawn(data);
    }

    removeRespawn(id: string){
        return this.repository.removeRespawn(id);
    }

    async loadAll(){
        this.logger.verbose("Loading Maps Data...");

        const dataPath = path.join(path.resolve('./'), "data", "maps", "*.data");
        const dataFiles = await glob(dataPath);     
        
        for(let pathFile of dataFiles) {
            const levelName = path.basename(pathFile).replace(".data", "");
            
            const totalSpots = Maps.parseLevelData(
                levelName, 
                fs.readFileSync(pathFile, "utf8"),
                this
            );

            this.logger.verbose(`Map ${levelName} load ${totalSpots} spots...`);
        }
            
        this.logger.verbose(`Map loading completed`);
    }
}
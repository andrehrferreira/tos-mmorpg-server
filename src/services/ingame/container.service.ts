import { Injectable, Logger } from "@nestjs/common";
import { Containers } from "@engine";
import { RepositoryService } from '../utils/repository.service';

@Injectable()
export class ContainerService {
    private readonly logger = new Logger(ContainerService.name);

    constructor(
		private repository: RepositoryService
	){}

    async loadAll(){
        this.logger.verbose("Loading Containers...");

        const containersData = await this.repository.getContainers();

        for(let container of containersData)
            Containers.fromDatabase(container);

        this.logger.verbose(`${containersData.length} containers loaded...`);
    }

    async upsertContainer(containerId: string, characterId: string, data: string){
        await this.repository.upsertContainer({
            containerId,
            characterId,
            items: (data) ? data : "{}"
        });
    }

    async deleteContainer(containerId: string){
        await this.repository.deleteContainer(containerId);
    }
}
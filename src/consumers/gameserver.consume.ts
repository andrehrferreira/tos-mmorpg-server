import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

import { 
    AuthService,
    CharactersService, 
    ContainerService,
    ItemsService
} from '@services';

@Processor('gameserver')
export class GameServerConsumer {
    constructor(
        private readonly authService: AuthService,
        private readonly charactersService: CharactersService,
        private readonly containerService: ContainerService,
        private readonly itemsService: ItemsService
    ){}

    @Process("update")
    async update(job: Job, done) {
        done();

        try{
            switch(job.data.table){
                case "account":  await this.authService.updateUser(job.data.set, job.data.id, job.data.token, true); break;
                case "character": await this.charactersService.updateCharacter(job.data.id, job.data.set); break;
                case "item": await this.itemsService.updateItem(job.data.id, job.data.set); break;
                case "container": await this.containerService.upsertContainer(job.data.containerId, job.data.characterId, job.data.set); break;
            }
        }
        catch {}  
    }

    @Process("delete")
    async delete(job: Job, done) {
        done();

        try{
            switch(job.data.table){
                case "character": await this.charactersService.deleteCharacter(job.data.id); break;
                case "item": await this.itemsService.deleteItem(job.data.id); break;
                case "container": await this.containerService.deleteContainer(job.data.containerId); break;
            }
        }
        catch {}  
    }
}
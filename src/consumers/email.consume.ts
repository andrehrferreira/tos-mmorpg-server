import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('email')
export class EmailConsumer {
    @Process()
    async sendEmail(job: Job<unknown>) {
        const data = job.data;
    }
}
import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('queueName')
class TestProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    // Your job processing logic here
    console.log(`Processing job with ID: ${job.id}`);
  }
  // Other worker methods...
  @OnWorkerEvent('completed')
  async onCompleted(job: Job<any, any, string>) {
    console.log(`Job completed: ${job.id}`);
  }
}
export { TestProcessor };

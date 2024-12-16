import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
@Injectable()
export class QueueService {
  constructor(@InjectQueue('user-queue') private userQueue: Queue) {}
  async addJob(queueName: string, jobName: string, data: any): Promise<void> {
    const queue = this.getQueueByName(queueName);
    if (queue) {
      await queue.add(jobName, data);
      console.log(' Job added to queue: ', queueName, jobName, data);
    } else {
      console.error('Queue not found:', queueName);
    }
  }
  private getQueueByName(queueName: string): Queue | null {
    if (queueName === 'user-queue') {
      return this.userQueue;
    }
    return null;
  }
}

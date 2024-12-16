import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueueService } from './queue-service.queue';
@Module({
  imports: [BullModule.registerQueue({ name: 'user-queue' })],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}

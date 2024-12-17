import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SharedModule } from '../shared.module';
import { UserProcessor } from './user-queue.processor';

@Module({
  imports: [SharedModule, BullModule.registerQueue({ name: 'user-queue' })],
  providers: [UserProcessor],
})
export class ProcessorModule {}

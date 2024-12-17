import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PROCESSOR } from 'src/domain/enums/processors.enum';
import { UserService } from './user-service.use-case';

@Module({
  imports: [
    BullModule.registerQueue({
      name: PROCESSOR.USER_QUEUE,
    }),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MailModule } from 'src/application/use-cases/mail/mail.module';
import { UserModule } from 'src/application/use-cases/user/user.module';
import { PROCESSOR } from 'src/domain/enums/processors.enum';
import { SharedModule } from '../shared.module';
import { UserProcessor } from './user-queue.processor';

@Module({
  imports: [
    SharedModule,
    MailModule,
    UserModule,
    BullModule.registerQueue({ name: PROCESSOR.USER_QUEUE }),
  ],
  providers: [UserProcessor],
})
export class ProcessorModule {}

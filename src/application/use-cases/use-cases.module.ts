import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, MailModule],
  exports: [UserModule, MailModule],
})
export class UseCasesModule {}

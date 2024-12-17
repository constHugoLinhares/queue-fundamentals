import { SendGridModule } from '@anchan828/nest-sendgrid';
import { Module } from '@nestjs/common';
import { SENDGRID_API_KEY } from 'src/configs/app';
import { MailService } from './mail.service';

@Module({
  imports: [
    SendGridModule.forRoot({
      apikey: SENDGRID_API_KEY,
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}

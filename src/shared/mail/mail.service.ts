import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendUserCreationSuccess(email: string, name: string) {
    const templatePath = join(
      __dirname,
      ' . . ',
      'mail',
      'templates',
      'success . hbs',
    );
    console.log('Template Path:', templatePath);
    console.log('Template Exists :', fs.existsSync(templatePath));
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Success create user',
        template: './success',
        context: { name },
      });
    } catch (error) {
      console.error('Error sending email:', error);
      throw new InternalServerErrorException(
        `Error sending success email to ${email} `,
      );
    }
  }
}

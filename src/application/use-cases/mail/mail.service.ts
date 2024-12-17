import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';
import { NO_REPLY_EMAIL } from 'src/configs/app';
import { SENDGRID_TEMPLATES } from 'src/configs/sendgrid-templates';

type SendCreateUserRequest = {
  name: string;
  email: string;
};

@Injectable()
export class MailService {
  constructor(private readonly sendGrid: SendGridService) {}
  async sendUserCreationSuccess(request: SendCreateUserRequest) {
    try {
      await this.sendGrid.send({
        from: NO_REPLY_EMAIL,
        to: request.email,
        subject: 'Código de validação de conta',
        templateId: SENDGRID_TEMPLATES.SEND_CREATE_USER,
        dynamicTemplateData: {
          name: request.name,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

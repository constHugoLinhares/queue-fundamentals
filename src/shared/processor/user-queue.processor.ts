import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { UserService } from 'src/application/use-cases/user/user-service.use-case';
import { MailService } from '../mail/mail.service';

@Processor('user-queue')
export class UserProcessor {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}
  @Process('create-user')
  async handleCreateUser(job: Job) {
    const user = await this.userService.createUser(job.data);
    await this.mailService.sendUserCreationSuccess(user.email, user.name);
  }
}

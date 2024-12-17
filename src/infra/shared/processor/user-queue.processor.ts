import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailService } from 'src/application/use-cases/mail/mail.service';
import { UserService } from 'src/application/use-cases/user/user-service.use-case';
import { PROCESS, PROCESSOR } from 'src/domain/enums/processors.enum';

@Processor(PROCESSOR.USER_QUEUE)
export class UserProcessor {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}
  @Process(PROCESS.CREATE_USER)
  async handleCreateUser(job: Job) {
    const user = await this.userService.createUser(job.data);

    await this.mailService.sendUserCreationSuccess({
      email: user.email,
      name: user.name,
    });
  }
}

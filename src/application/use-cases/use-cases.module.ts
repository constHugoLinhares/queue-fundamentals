import { Module } from '@nestjs/common';
import { UserService } from './user/user-service.use-case';

@Module({
  imports: [UserService],
  exports: [UserService],
})
export class UseCasesModule {}

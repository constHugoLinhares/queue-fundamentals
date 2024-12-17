import { Module } from '@nestjs/common';
import { UserService } from './user/user-service.use-case';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UseCasesModule {}

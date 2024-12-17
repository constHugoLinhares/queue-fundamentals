import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { UserController } from './user.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [UserController],
})
export class ControllersModule {}

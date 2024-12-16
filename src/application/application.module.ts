import { Module } from '@nestjs/common';
import { UseCasesModule } from './use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  exports: [UseCasesModule],
})
export class ApplicationModule {}

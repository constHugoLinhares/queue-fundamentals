import { Module } from '@nestjs/common';
import { ProcessorModule } from 'src/infra/shared/processor/processor.module';
import { SharedModule } from 'src/infra/shared/shared.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [HttpModule, SharedModule, ProcessorModule],
  exports: [HttpModule],
})
export class InfraModule {}

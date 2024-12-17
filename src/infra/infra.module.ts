import { Module } from '@nestjs/common';
import { ProcessorModule } from 'src/shared/processor/processor.module';
import { SharedModule } from 'src/shared/shared.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [HttpModule, SharedModule, ProcessorModule],
  exports: [HttpModule],
})
export class InfraModule {}

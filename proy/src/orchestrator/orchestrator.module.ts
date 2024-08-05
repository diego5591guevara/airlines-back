import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OrchestratorService } from './orchestrator.service';
import { OrchestratorController } from './orchestrator.controller';

@Module({
  imports: [HttpModule],
  providers: [OrchestratorService],
  controllers: [OrchestratorController]
})
export class OrchestratorModule {}

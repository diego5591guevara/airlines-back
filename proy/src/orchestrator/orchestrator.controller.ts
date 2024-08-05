import { Body, Controller, Post } from '@nestjs/common';
import { OrchestratorService } from './orchestrator.service';

@Controller('orchestrator')
export class OrchestratorController {
    constructor(private readonly orchestratorService: OrchestratorService) {}

    @Post('proceso')
    async proceso(@Body() obj: any) {      
      return this.orchestratorService.proceso(obj);
    }
}

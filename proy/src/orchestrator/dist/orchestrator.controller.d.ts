import { OrchestratorService } from './orchestrator.service';
export declare class OrchestratorController {
    private readonly orchestratorService;
    constructor(orchestratorService: OrchestratorService);
    proceso(obj: any): Promise<any>;
}

import { HttpService } from '@nestjs/axios';
export declare class OrchestratorService {
    private readonly httpService;
    constructor(httpService: HttpService);
    proceso(obj: any): Promise<any>;
}

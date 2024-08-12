import { CiudadesService } from './ciudades.service';
import { Ciudad } from './interfaces/ciudad.interface';
export declare class CiudadesController {
    private readonly ciudadesService;
    constructor(ciudadesService: CiudadesService);
    findAll(): Promise<Ciudad[]>;
    search(query: string): Promise<Ciudad[]>;
}

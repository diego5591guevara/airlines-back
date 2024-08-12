import { Model } from 'mongoose';
import { Ciudad } from './interfaces/ciudad.interface';
export declare class CiudadesService {
    private readonly ciudadModel;
    constructor(ciudadModel: Model<Ciudad>);
    findAll(): Promise<Ciudad[]>;
    search(query: string): Promise<Ciudad[]>;
}

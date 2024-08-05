import { Model } from 'mongoose';
import { CreatePagoDto } from './dto/pagos.dto';
import { Pago } from './interfaces/pagos.interface';
export declare class PagosService {
    private readonly pagoModel;
    constructor(pagoModel: Model<Pago>);
    processPago(createPagoDto: CreatePagoDto): Promise<Pago>;
    reintegro(pagoId: string): Promise<Pago>;
    findAllPagos(): Promise<Pago[]>;
}

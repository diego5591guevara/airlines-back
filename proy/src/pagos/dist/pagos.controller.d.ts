import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/pagos.dto';
export declare class PagosController {
    private readonly pagosService;
    constructor(pagosService: PagosService);
    process(createPagoDto: CreatePagoDto): Promise<import("./interfaces/pagos.interface").Pago>;
    refund(pagoId: string): Promise<import("./interfaces/pagos.interface").Pago>;
    findAll(): Promise<import("./interfaces/pagos.interface").Pago[]>;
}

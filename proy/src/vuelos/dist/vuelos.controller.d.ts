import { CreateVueloDTO } from './dto/vuelos.dto';
import { ReservaVueloDTO } from './dto/reserva.dto';
import { CancelReservaDTO } from './dto/cancelar.dto';
import { VuelosService } from './vuelos.service';
export declare class VuelosController {
    private readonly vuelosService;
    constructor(vuelosService: VuelosService);
    create(res: any, createVueloDTO: CreateVueloDTO): Promise<any>;
    findAll(): Promise<import("./interfaces/vuelos.interface").Vuelo[]>;
    findOne(id: string): Promise<import("./interfaces/vuelos.interface").Vuelo>;
    reserve(reservaVueloDTO: ReservaVueloDTO): Promise<import("./interfaces/reserva.interface").Reserva>;
    cancel(cancelReservaDTO: CancelReservaDTO): Promise<import("./interfaces/reserva.interface").Reserva>;
}

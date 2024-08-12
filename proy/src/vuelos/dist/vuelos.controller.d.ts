import { CreateVueloDTO } from './dto/vuelos.dto';
import { ReservaVueloDTO } from './dto/reserva.dto';
import { CancelReservaDTO } from './dto/cancelar.dto';
import { VuelosService } from './vuelos.service';
import { Vuelo } from 'interfaces/vuelos.interface';
import { ObjectId } from 'mongoose';
export declare class VuelosController {
    private readonly vuelosService;
    constructor(vuelosService: VuelosService);
    create(res: any, createVueloDTO: CreateVueloDTO): Promise<any>;
    buscar(origen: string, destino: string, fecha: string): Promise<Vuelo[]>;
    buscarVuelo(_id: ObjectId): Promise<Vuelo[]>;
    findAll(): Promise<Vuelo[]>;
    findOne(id: string): Promise<Vuelo>;
    reserve(reservaVueloDTO: ReservaVueloDTO): Promise<import("./interfaces/reserva.interface").Reserva>;
    cancel(cancelReservaDTO: CancelReservaDTO): Promise<import("./interfaces/reserva.interface").Reserva>;
}

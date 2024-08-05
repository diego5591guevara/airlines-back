import { Model } from 'mongoose';
import { Vuelo } from './interfaces/vuelos.interface';
import { Reserva } from './interfaces/reserva.interface';
import { CreateVueloDTO } from './dto/vuelos.dto';
import { ReservaVueloDTO } from './dto/reserva.dto';
export declare class VuelosService {
    private readonly vueloModel;
    private readonly reservaModel;
    constructor(vueloModel: Model<Vuelo>, reservaModel: Model<Reserva>);
    createVuelo(createVueloDTO: CreateVueloDTO): Promise<Vuelo>;
    reserveSeats(reservaVueloDTO: ReservaVueloDTO): Promise<Reserva>;
    findVueloById(id: string): Promise<Vuelo>;
    cancelReserva(reservaId: string): Promise<Reserva>;
    findAll(): Promise<Vuelo[]>;
}

import { PasajerosService } from './pasajeros.service';
import { CreatePasajeroDTO } from './dto/pasajero.dto';
import { ObjectId } from 'mongoose';
import { Pasajero } from 'interfaces/pasajero.interface';
export declare class PasajerosController {
    private readonly pasajerosService;
    constructor(pasajerosService: PasajerosService);
    create(createPasajeroDTO: CreatePasajeroDTO): Promise<Pasajero>;
    buscarVuelo(_id: ObjectId): Promise<Pasajero[]>;
}

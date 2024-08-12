import { CreatePasajeroDTO } from './dto/pasajero.dto';
import { Model, ObjectId } from 'mongoose';
import { Pasajero } from './interfaces/pasajero.interface';
export declare class PasajerosService {
    private readonly pasajeroModel;
    constructor(pasajeroModel: Model<Pasajero>);
    createPasajero(createPasajeroDTO: CreatePasajeroDTO): Promise<Pasajero>;
    buscarPasajeroPorId(_id: ObjectId): Promise<Pasajero[]>;
}

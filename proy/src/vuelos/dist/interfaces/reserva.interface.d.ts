import { Document } from 'mongoose';
export interface Reserva extends Document {
    _id: string;
    origen: string;
    destino: string;
    pasajero: string[];
    estado: string;
}

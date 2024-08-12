import { Document, ObjectId } from 'mongoose';
export interface Pasajero extends Document {
    _id: ObjectId;
    origenId: string;
    vueltaId: string;
    nombre: string;
    apellido: string;
    numero: string;
}

import { Schema } from 'mongoose';

export const PasajeroSchema = new Schema({
    origenId: { type: String, required: true },
    vueltaId: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    numero: { type: String, required: true }
});
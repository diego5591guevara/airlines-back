import { Schema } from 'mongoose';

export const PagosSchema = new Schema({
  reservaId: { type: String, required: true },
  monto: { type: Number, required: true },
  estado: { type: String, enum: ['completado', 'reintegrado'], default: 'completado' },
});
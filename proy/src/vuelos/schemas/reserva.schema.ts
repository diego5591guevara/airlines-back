import { Schema} from 'mongoose'

export const ReservasSchema = new Schema({
    vueloId: { type: String, required: true },
    clienteId: { type: String, required: true },
    asientos: { type: Number, required: true },
    estado: { type: String, enum: ['reservado', 'cancelado'], default: 'reservado' },
  });

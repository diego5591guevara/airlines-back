import { Schema} from 'mongoose'

export const ReservasSchema = new Schema({
    origen: { type: Schema.Types.ObjectId, ref: 'Ciudad', required: true }, 
    destino: { type: Schema.Types.ObjectId, ref: 'Ciudad', required: true }, 
    pasajero: [{ type: Schema.Types.ObjectId, ref: 'Pasajero', required: true }] ,
    estado: { type: String, enum: ['reservado', 'cancelado'], default: 'reservado' },
  });

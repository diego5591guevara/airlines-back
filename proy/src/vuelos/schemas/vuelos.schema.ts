import { Schema} from 'mongoose'

export const VuelosSchema = new Schema({
    origen: { type: String, required: true },
    destino: { type: String, required: true },
    avion: { type: String, required: true },
    fecha: { type: String, required: true },
    horaSalida: { type: String, required: true }, 
    horaLlegada: { type: String, required: true },
    duracion: { type: String, required: true },
    asientos: { type: Number, required: true },
    precio: { type: Number, required: true },
    estado: { type: String, enum: ['programado', 'cancelado', 'retrasado'], default: 'programado' },
});

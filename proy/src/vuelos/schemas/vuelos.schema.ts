import { Schema} from 'mongoose'

export const VuelosSchema = new Schema({
    vueloId: { type: String, required: true },
    origen: { type: String, required: true },
    destino: { type: String, required: true },
    fecha: { type: Date, required: true },
    asientos: { type: Number, required: true },
    precio: { type: Number, required: true },
    reservado: { type: [Number], default: [] },
});

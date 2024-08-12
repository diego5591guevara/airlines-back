import { Schema } from 'mongoose';

const AeropuertoSchema = new Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, required: true },
});

export const CiudadSchema = new Schema({
  ciudad: { type: String, required: true },
  pais: { type: String, required: true },
  aeropuertos: { type: [AeropuertoSchema], required: true },
}, { collection: 'ciudades' });
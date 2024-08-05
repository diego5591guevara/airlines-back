import { Schema } from 'mongoose';

export const ClienteSchema = new Schema({
  clienteId: { type: String, required: true },
  nombre: { type: String, required: true },
  mail: { type: String, required: true },
});
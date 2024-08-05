import { Document } from 'mongoose';

export interface Reserva extends Document {
    _id: string;
    vueloId: string;
    clienteId: string;
    asientos: number;
    estado: string;
  }
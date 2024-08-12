import { Document } from 'mongoose';

export interface Aeropuerto {
  nombre: string;
  codigo: string;
}

export interface Ciudad extends Document {
  ciudad: string;
  pais: string;
  aeropuertos: Aeropuerto[];
}
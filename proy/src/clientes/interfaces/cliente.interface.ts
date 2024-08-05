import { Document } from 'mongoose';

export interface Cliente extends Document {
  clienteId: string;
  nombre: string;
  mail: string;
}
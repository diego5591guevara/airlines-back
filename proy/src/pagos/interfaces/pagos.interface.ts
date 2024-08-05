import { Document } from 'mongoose';

export interface Pago extends Document {
  reservaId: string;
  monto: number;
  estado: string;
}

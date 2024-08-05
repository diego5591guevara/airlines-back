
import { Document } from 'mongoose'

export interface Vuelo extends Document{
    readonly vueloId: string;
    readonly origen: string;
    readonly destino: string;
    readonly fecha: Date;
    asientos: number;
    readonly precio: number; 
    reservado: number[];
  }


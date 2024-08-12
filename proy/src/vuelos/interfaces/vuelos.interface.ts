import { Document, ObjectId} from 'mongoose';

export interface Vuelo extends Document {
  _id: ObjectId;
  origen: string;
  destino: string;
  avion: string;
  fecha: string;
  horaSalida: string;
  horaLlegada: string;
  duracion: string;
  asientos: number;
  precio: number;
  estado: string;
}

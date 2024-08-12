import { Schema } from 'mongoose';
export declare const VuelosSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    origen: string;
    destino: string;
    avion: string;
    fecha: string;
    horaSalida: string;
    horaLlegada: string;
    duracion: string;
    asientos: number;
    precio: number;
    estado: "programado" | "cancelado" | "retrasado";
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    origen: string;
    destino: string;
    avion: string;
    fecha: string;
    horaSalida: string;
    horaLlegada: string;
    duracion: string;
    asientos: number;
    precio: number;
    estado: "programado" | "cancelado" | "retrasado";
}>> & import("mongoose").FlatRecord<{
    origen: string;
    destino: string;
    avion: string;
    fecha: string;
    horaSalida: string;
    horaLlegada: string;
    duracion: string;
    asientos: number;
    precio: number;
    estado: "programado" | "cancelado" | "retrasado";
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

import { Schema } from 'mongoose';
export declare const VuelosSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    vueloId: string;
    origen: string;
    destino: string;
    fecha: Date;
    precio: number;
    reservado: number[];
    asientos: number;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    vueloId: string;
    origen: string;
    destino: string;
    fecha: Date;
    precio: number;
    reservado: number[];
    asientos: number;
}>> & import("mongoose").FlatRecord<{
    vueloId: string;
    origen: string;
    destino: string;
    fecha: Date;
    precio: number;
    reservado: number[];
    asientos: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

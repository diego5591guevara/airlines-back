import { Schema } from 'mongoose';
export declare const ReservasSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    vueloId: string;
    clienteId: string;
    asientos: number;
    estado: "reservado" | "cancelado";
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    vueloId: string;
    clienteId: string;
    asientos: number;
    estado: "reservado" | "cancelado";
}>> & import("mongoose").FlatRecord<{
    vueloId: string;
    clienteId: string;
    asientos: number;
    estado: "reservado" | "cancelado";
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

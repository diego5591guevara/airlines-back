import { Schema } from 'mongoose';
export declare const PagosSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    reservaId: string;
    monto: number;
    estado: "reintegrado" | "completado";
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    reservaId: string;
    monto: number;
    estado: "reintegrado" | "completado";
}>> & import("mongoose").FlatRecord<{
    reservaId: string;
    monto: number;
    estado: "reintegrado" | "completado";
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

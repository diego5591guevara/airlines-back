import { Schema } from 'mongoose';
export declare const PasajeroSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    origenId: string;
    vueltaId: string;
    nombre: string;
    apellido: string;
    numero: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    origenId: string;
    vueltaId: string;
    nombre: string;
    apellido: string;
    numero: string;
}>> & import("mongoose").FlatRecord<{
    origenId: string;
    vueltaId: string;
    nombre: string;
    apellido: string;
    numero: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

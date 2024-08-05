import { Schema } from 'mongoose';
export declare const ClienteSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    clienteId: string;
    nombre: string;
    mail: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clienteId: string;
    nombre: string;
    mail: string;
}>> & import("mongoose").FlatRecord<{
    clienteId: string;
    nombre: string;
    mail: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

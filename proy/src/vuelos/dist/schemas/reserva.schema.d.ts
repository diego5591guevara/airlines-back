import { Schema } from 'mongoose';
export declare const ReservasSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    origen: import("mongoose").Types.ObjectId;
    destino: import("mongoose").Types.ObjectId;
    pasajero: import("mongoose").Types.ObjectId[];
    estado: "reservado" | "cancelado";
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    origen: import("mongoose").Types.ObjectId;
    destino: import("mongoose").Types.ObjectId;
    pasajero: import("mongoose").Types.ObjectId[];
    estado: "reservado" | "cancelado";
}>> & import("mongoose").FlatRecord<{
    origen: import("mongoose").Types.ObjectId;
    destino: import("mongoose").Types.ObjectId;
    pasajero: import("mongoose").Types.ObjectId[];
    estado: "reservado" | "cancelado";
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

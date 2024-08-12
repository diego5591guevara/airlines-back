import { Schema } from 'mongoose';
export declare const CiudadSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: string;
}, {
    ciudad: string;
    pais: string;
    aeropuertos: import("mongoose").Types.DocumentArray<{
        nombre: string;
        codigo: string;
    }>;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    ciudad: string;
    pais: string;
    aeropuertos: import("mongoose").Types.DocumentArray<{
        nombre: string;
        codigo: string;
    }>;
}>> & import("mongoose").FlatRecord<{
    ciudad: string;
    pais: string;
    aeropuertos: import("mongoose").Types.DocumentArray<{
        nombre: string;
        codigo: string;
    }>;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;

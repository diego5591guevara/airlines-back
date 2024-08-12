export declare class CreateAeropuertoDTO {
    readonly nombre: string;
    readonly codigo: string;
}
export declare class CreateCiudadDTO {
    readonly ciudad: string;
    readonly pais: string;
    readonly aeropuertos: CreateAeropuertoDTO[];
}

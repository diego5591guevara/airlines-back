export class CreateAeropuertoDTO {
    readonly nombre: string;
    readonly codigo: string;
  }
  
  export class CreateCiudadDTO {
    readonly ciudad: string;
    readonly pais: string;
    readonly aeropuertos: CreateAeropuertoDTO[];
  }
export class CreateVueloDTO {
  readonly id?: string;
  readonly origen: string;
  readonly destino: string;
  readonly avion: string;
  readonly fecha: string;
  readonly horaSalida: string;
  readonly horaLlegada: string;
  readonly duracion: string;
  readonly asientos: number;
  readonly precio: number;
  readonly estado: string;
}

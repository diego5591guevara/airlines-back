import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Console } from 'console';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrchestratorService {
  constructor(private readonly httpService: HttpService) {}

  async proceso(obj: any): Promise<any> {

    try {
      
      console.log(obj);

      const vueloIda = await lastValueFrom(
        this.httpService.get(`http://localhost:3001/vuelos/buscarVuelo?id=${obj.origen}`),
      );
      if (!vueloIda.data) {
        throw new HttpException('Vuelo no encontrado', HttpStatus.NOT_FOUND);
      }
      
      console.log("paso 1");

      const vueloVuelta = await lastValueFrom(
        this.httpService.get(`http://localhost:3001/vuelos/buscarVuelo?id=${obj.destino}`),
      );
      if (!vueloVuelta.data) {
        throw new HttpException('Vuelo no encontrado', HttpStatus.NOT_FOUND);
      }

      
      console.log("paso 2");

      const respuestasPasajeros = [];

      for (const pasajero of obj.pasajeros) {
        pasajero.origenId = obj.origen;
        pasajero.vueltaId = obj.destino;
        pasajero.numero = pasajero.documento;            

        console.log(pasajero);

        const pasajeros = await this.httpService.post(
          'http://localhost:3005/pasajeros/create',
          pasajero,
        ).toPromise();
        
        console.log("dataPas");
        console.log(pasajeros.data);

        respuestasPasajeros.push(pasajeros.data._id);
      };

      
      console.log("paso 3");
      console.log(respuestasPasajeros);

      const objReserva = {
        origen: obj.origen,
        destino: obj.destino,
        pasajero: respuestasPasajeros              
      }

      const reserva = this.httpService.post(
        'http://localhost:3001/vuelos/reserva',
        objReserva,
      );

      console.log(reserva);
      
      console.log("paso 4");

      const reservaValue = await lastValueFrom(reserva);
      console.log("paso 4.q");


      if (!reservaValue.data) {
        throw new HttpException('Reserva con error', HttpStatus.NOT_FOUND);
      }

      console.log(reservaValue.data);

      const pago = this.httpService.post('http://localhost:3003/pagos', {
        reservaId: reservaValue.data._id,                
        monto: obj.monto
      });
      const pagoValue = await lastValueFrom(pago);


      console.log("paso 5");

      return {
        message: `Reserva y pago realizado con éxito. ID de Reserva: ${reservaValue.data._id}, Estado: ${pagoValue.data.estado}`,

        origen: vueloIda.data,
        destino: vueloVuelta.data,
        pasajeros: obj.pasajeros,
        reserva: reservaValue.data,
        pago: pagoValue.data,        
        response: "success"
      };
    } catch (error) {

      if (error.response && error.response.config.url.includes('pagos')) {               

        const cancelado = this.httpService.post(
          'http://localhost:3001/vuelos/cancel',
          { reservaId: error.response.data.reservaId },
        );
        await lastValueFrom(cancelado);
        return {
          message: "No se proceso el pago, se cancelo la reserva.",
          response: "error"
        };    
      }
      throw error;
    }
  }
}

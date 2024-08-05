import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Console } from 'console';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrchestratorService {
  constructor(private readonly httpService: HttpService) {}

  async proceso(obj: any): Promise<any> {
    try {
      const vuelo = await lastValueFrom(
        this.httpService.get(`http://localhost:3001/vuelos/${obj.vueloId}`),
      );
      if (!vuelo.data) {
        throw new HttpException('Vuelo no encontrado', HttpStatus.NOT_FOUND);
      }

      const cliente = this.httpService.get(
        `http://localhost:3002/clientes/${obj.clienteId}`,
      );

      const clienteValue = await lastValueFrom(cliente);

      if (!clienteValue.data) {
        throw new HttpException('Cliente no encontrado', HttpStatus.NOT_FOUND);
      }

      const reserva = this.httpService.post(
        'http://localhost:3001/vuelos/reserva',
        obj,
      );
      const reservaValue = await lastValueFrom(reserva);

      if (!reservaValue.data) {
        throw new HttpException('Reserva con error', HttpStatus.NOT_FOUND);
      }

      const pago = this.httpService.post('http://localhost:3003/pagos', {
        reservaId: reservaValue.data._id,                
        monto: vuelo.data.precio * obj.asientos
      });
      const pagoValue = await lastValueFrom(pago);

      return {
        message: `Reserva y pago realizado con éxito. ID de Reserva: ${reservaValue.data._id}, Monto: ${pagoValue.data.monto}, Estado: ${pagoValue.data.estado}`,
        vuelo: vuelo.data,        
        cliente: clienteValue.data,
        reserva: reservaValue.data,
        pago: pagoValue.data,        
        response: "success"
      };
    } catch (error) {

      if (error.response && error.response.config.url.includes('vuelos')) {
        return {
          message: error.response.data.message,
          response: "error"
        };        
      }

      if (error.response && error.response.config.url.includes('clientes')) {
        return {
          message: error.response.data.message,
          response: "error"
        };        
      }

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

import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Vuelo } from './interfaces/vuelos.interface';
import { Reserva } from './interfaces/reserva.interface'; 

import { CreateVueloDTO } from './dto/vuelos.dto';
import { ReservaVueloDTO } from './dto/reserva.dto';



@Injectable()
export class VuelosService {
    constructor(
      @InjectModel('Vuelo') private readonly vueloModel: Model<Vuelo>,
      @InjectModel('Reserva') private readonly reservaModel: Model<Reserva>){}

    async createVuelo(createVueloDTO: CreateVueloDTO): Promise<Vuelo> {
      const vuelo = new this.vueloModel(createVueloDTO);        
      return vuelo.save();
    }

    async buscarVuelosPorOrigenDestinoFecha(
      origen: string,
      destino: string,
      fecha: string,
    ): Promise<Vuelo[]> {

      return this.vueloModel.find({
        origen,
        destino,
        fecha        
      }).exec();
    }

    async buscarVuelosPorId(
      _id: ObjectId
    ): Promise<Vuelo[]> {
      
      return this.vueloModel.find({
        _id   
      }).exec();
            
    }

    async reserveSeats(reservaVueloDTO: ReservaVueloDTO): Promise<Reserva> {
      
      console.log(reservaVueloDTO);

      /*
      const vuelo = await this.vueloModel.findOne({ vueloId: reservaVueloDTO.vueloId });

      if (!vuelo) {
        throw new NotFoundException('Vuelo no encontrado');
      }

      vuelo.asientos = vuelo.asientos - reservaVueloDTO.asientos;
      await vuelo.save();
    */
      const reserva = new this.reservaModel({ ...reservaVueloDTO, status: 'reservado' });
      return reserva.save();
    }
    
    async findVueloById(id: string): Promise<Vuelo> {
        
      const vuelo = await this.vueloModel.findOne({ vueloId: id });

      if (!vuelo) {
        throw new NotFoundException(`Vuelo #${id} no encontrado`);
      }
      return vuelo;
    }

    async cancelReserva(reservaId: string): Promise<Reserva> {

      const reserva = await this.reservaModel.findById(reservaId);

      if (!reserva) {
        throw new NotFoundException('Reservacion no encontrada');
      }
    
      //const vuelo = await this.vueloModel.findOne({vueloId: reserva.vueloId});
      
      //vuelo.asientos = vuelo.asientos + reserva.asientos;
      //await vuelo.save();
    
      reserva.estado = 'cancelado';
      return reserva.save();
    }
    
    async findAll(): Promise<Vuelo[]> {
      return this.vueloModel.find().exec();
    }  
}
  
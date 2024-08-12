import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePasajeroDTO } from './dto/pasajero.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Pasajero } from './interfaces/pasajero.interface';

@Injectable()
export class PasajerosService {
    constructor(
        @InjectModel('Pasajero') private readonly pasajeroModel: Model<Pasajero>){}
  
      async createPasajero(createPasajeroDTO: CreatePasajeroDTO): Promise<Pasajero> {
        const pasajero = new this.pasajeroModel(createPasajeroDTO);        
        return pasajero.save();
      }


      async buscarPasajeroPorId(
        _id: ObjectId
      ): Promise<Pasajero[]> {
        
        return this.pasajeroModel.find({
          _id   
        }).exec();
              
      }
  
  
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ciudad } from './interfaces/ciudad.interface';

@Injectable()
export class CiudadesService {
    constructor(@InjectModel('Ciudad') private readonly ciudadModel: Model<Ciudad>) {}

      async findAll(): Promise<Ciudad[]> {
            
        const ret = this.ciudadModel.find().exec();       
        return ret;
      }

      async search(query: string): Promise<Ciudad[]> {
        return this.ciudadModel.find({
          $or: [
            { ciudad: new RegExp(query, 'i') },
            { 'aeropuertos.nombre': new RegExp(query, 'i') },
            { 'aeropuertos.codigo': new RegExp(query, 'i') },
          ],
        }).exec();
      }
}

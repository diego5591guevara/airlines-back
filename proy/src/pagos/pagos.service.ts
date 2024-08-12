import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { CreatePagoDto } from './dto/pagos.dto';
import { Pago } from './interfaces/pagos.interface';

@Injectable()
export class PagosService {
    constructor(@InjectModel('Pago') private readonly pagoModel: Model<Pago>) {}

    async processPago(createPagoDto: CreatePagoDto): Promise<Pago> {
        
        //*****DESCOMENTAR PARA PROBAR CAIDA********//
        //throw new NotFoundException(createPagoDto);
                
        const pago = new this.pagoModel(createPagoDto);
        return pago.save();
    }

    async reintegro(pagoId: string): Promise<Pago> {        

        const pago = await this.pagoModel.findById(pagoId);
        if (!pago) {
        throw new NotFoundException('Pago no encontrado');
        }
        pago.estado = 'reintegrado';
        return pago.save();
    }

    async findAllPagos(): Promise<Pago[]> {
        return this.pagoModel.find().exec();
    }
}

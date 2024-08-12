import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { CreatePasajeroDTO } from './dto/pasajero.dto';
import { ObjectId } from 'mongoose';
import { Pasajero } from 'interfaces/pasajero.interface';

@Controller('pasajeros')
export class PasajerosController {
    constructor(private readonly pasajerosService: PasajerosService) {}
    
    @Post('/create')
    async create(@Body() createPasajeroDTO : CreatePasajeroDTO){        
        console.log(createPasajeroDTO);
        return this.pasajerosService.createPasajero(createPasajeroDTO);
    }

    @Get('buscarPasajero')
    async buscarVuelo(
      @Query('id') _id: ObjectId,
    ): Promise<Pasajero[]> {  
      return this.pasajerosService.buscarPasajeroPorId(_id);
    }
}

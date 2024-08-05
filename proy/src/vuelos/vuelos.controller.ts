import { Body, Controller, Get, Post, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateVueloDTO }  from './dto/vuelos.dto';
import { ReservaVueloDTO }  from './dto/reserva.dto';
import { CancelReservaDTO }  from './dto/cancelar.dto';
import { VuelosService } from './vuelos.service';

@Controller('vuelos')
export class VuelosController {

    constructor(private readonly vuelosService: VuelosService) {}

    @Post('/create')
    async create(@Res() res, @Body() createVueloDTO : CreateVueloDTO){
        const vuelo =  await this.vuelosService.createVuelo(createVueloDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Se registro correctamente',
            vuelo: vuelo

        })
    }

    @Get()
    async findAll() {
        return this.vuelosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {

      return this.vuelosService.findVueloById(id);
    }
    
    @Post('reserva')
    reserve(@Body() reservaVueloDTO: ReservaVueloDTO) {

        return this.vuelosService.reserveSeats(reservaVueloDTO);
    }

    @Post('cancel')
    cancel(@Body() cancelReservaDTO: CancelReservaDTO) {
        return this.vuelosService.cancelReserva(cancelReservaDTO.reservaId);
    }

} 

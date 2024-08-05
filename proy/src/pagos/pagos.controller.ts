import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/pagos.dto';

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) { }

  @Post()
  process(@Body() createPagoDto: CreatePagoDto) {
    return this.pagosService.processPago(createPagoDto);
  }

  @Post('refund/:id')
  refund(@Param('id') pagoId: string) {
    return this.pagosService.reintegro(pagoId);
  }

  @Get()
  findAll() {
    return this.pagosService.findAllPagos();
  }
}

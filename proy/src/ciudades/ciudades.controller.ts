import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCiudadDTO } from './dto/ciudad.dto';
import { CiudadesService } from './ciudades.service';
import { Ciudad } from './interfaces/ciudad.interface';

@Controller('ciudades')
export class CiudadesController {
    constructor(private readonly ciudadesService: CiudadesService) {}
    
    @Get()
    async findAll(){
        return this.ciudadesService.findAll();
    }

    @Get('buscar')
    async search(@Query('q') query: string): Promise<Ciudad[]> {
        return this.ciudadesService.search(query);
    }
}

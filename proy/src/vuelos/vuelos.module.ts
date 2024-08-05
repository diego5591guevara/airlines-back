import { Module } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VuelosSchema } from './schemas/vuelos.schema';
import { ReservasSchema } from './schemas/reserva.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/airlines'),
    MongooseModule.forFeature([
      { name: 'Vuelo', schema: VuelosSchema }],),
    MongooseModule.forFeature([{ name: 'Reserva', schema: ReservasSchema }]),
    ], 
    
  providers: [VuelosService],
  controllers: [VuelosController]
})
export class VuelosModule {}

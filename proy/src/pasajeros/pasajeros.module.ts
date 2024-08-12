import { Module } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajerosController } from './pasajeros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PasajeroSchema } from './schemas/pasajero.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/airlines'),
    MongooseModule.forFeature([
      { name: 'Pasajero', schema: PasajeroSchema }])
    ], 
    
  providers: [PasajerosService],
  controllers: [PasajerosController]
})
export class PasajerosModule {



}

import { Module } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CiudadesController } from './ciudades.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CiudadSchema } from './schemas/ciudades.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/airlines'),
    MongooseModule.forFeature([{name: 'Ciudad', schema: CiudadSchema}]),
  ],
  providers: [CiudadesService],
  controllers: [CiudadesController]
})
export class CiudadesModule {}

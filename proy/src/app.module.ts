import { Module } from '@nestjs/common';
import { VuelosModule } from './vuelos/vuelos.module';
import { PagosModule } from './pagos/pagos.module';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CiudadesModule } from './ciudades/ciudades.module';
import { OrchestratorModule } from './orchestrator/orchestrator.module';

@Module({
  imports: [
    VuelosModule, 
    PagosModule, 
    ClientesModule,
    CiudadesModule,
    MongooseModule.forRoot('mongodb://localhost/airlines'),
    OrchestratorModule
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { VuelosModule } from './vuelos/vuelos.module';
import { PagosModule } from './pagos/pagos.module';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrchestratorModule } from './orchestrator/orchestrator.module';

@Module({
  imports: [
    VuelosModule, 
    PagosModule, 
    ClientesModule,
    MongooseModule.forRoot('mongodb://localhost/airlines'),
    OrchestratorModule
  ]
})
export class AppModule {}

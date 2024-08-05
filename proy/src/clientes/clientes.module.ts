import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './schemas/clientes.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/airlines'),
    MongooseModule.forFeature([{name: 'Cliente', schema: ClienteSchema}]),
  ],
  providers: [ClientesService],
  controllers: [ClientesController]
})
export class ClientesModule {}

import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PagosSchema } from './schemas/pagos.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/airlines'),
    MongooseModule.forFeature([{ name: 'Pago', schema: PagosSchema }]),
  ],
  providers: [PagosService],
  controllers: [PagosController]
})
export class PagosModule {}

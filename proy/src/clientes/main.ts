import { NestFactory } from '@nestjs/core';
import { ClientesModule } from './clientes.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientesModule);
  await app.listen(3002);
}
bootstrap();
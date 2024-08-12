import { NestFactory } from '@nestjs/core';
import { PasajerosModule } from './pasajeros.module';

async function bootstrap() {
  const app = await NestFactory.create(PasajerosModule);

  app.enableCors({
    origin: 'http://192.168.18.62:3005',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3005);
}
bootstrap(); 
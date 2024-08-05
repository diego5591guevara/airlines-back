import { NestFactory } from '@nestjs/core';
import { VuelosModule } from './vuelos.module';

async function bootstrap() {
  const app = await NestFactory.create(VuelosModule);

  app.enableCors({
    origin: 'http://192.168.18.62:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap(); 
import { NestFactory } from '@nestjs/core';
import { CiudadesModule } from './ciudades.module';

async function bootstrap() {
  const app = await NestFactory.create(CiudadesModule);

  app.enableCors({
    origin: 'http://192.168.18.62:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3004);
}
bootstrap();
import { NestFactory } from '@nestjs/core';
import { OrchestratorModule } from './orchestrator.module';

async function bootstrap() {
  const app = await NestFactory.create(OrchestratorModule);

  app.enableCors({
    origin: 'http://192.168.18.62:3000', // Dirección de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  await app.listen(4000);
}
bootstrap();
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração global de CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Permite requisições apenas deste domínio
    credentials: true, // Habilita envio de cookies e headers credenciais
    methods: ['GET', 'POST', "PATCH", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ['X-Requested-With', 'Content-Type', 'credentials', "Authorization"], 
  });

  await app.listen(3000);
}
bootstrap();

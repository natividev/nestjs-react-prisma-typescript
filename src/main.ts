import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Esto es para que no se envien datos que no esten en el DTO y ValidationPipefiltrar las propiedades que el controlador de métodos no debe recibir.
    }),
  ),
    await app.listen(4000);
}
bootstrap();

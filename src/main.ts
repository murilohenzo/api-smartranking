import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('SMARTRANKING Application')
    .setDescription('SMARTRANKING API')
    .setVersion('V.1.0')
    .addTag('SMARTRANKING')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(8080, () => {
    Logger.log('Listening on http://localhost:8080/api/v1');
  });
}
bootstrap();

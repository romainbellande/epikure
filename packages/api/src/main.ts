import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { Config } from './config';
import { PrismaService } from './services/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.enableCors({ origin: 'https://epikure.localhost', credentials: true });

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Todos API')
    .setVersion('1.0')
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, document);

  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(Config.PORT);

  Logger.log(`Listening at http://localhost:${Config.PORT}`);
}
bootstrap();

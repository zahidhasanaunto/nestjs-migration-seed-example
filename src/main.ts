import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from './ENV';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(ENV.port);

  console.log(
    `🚀🚀🚀🚀🚀     API Running At Port : ${ENV.port}     🚀🚀🚀🚀🚀`
  );
}
bootstrap();

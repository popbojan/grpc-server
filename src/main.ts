import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { articleGrpcOptions } from './article/article-grpc.options';
import {INestApplication} from '@nestjs/common';
import {ninjaGrpcOptions} from './ninja/ninja-grpc.options';

/**
 * Hybrid application HTTP & GRPC*
 */
async function bootstrap() {
  const app: INestApplication  = await NestFactory.create(ApplicationModule);
  app.connectMicroservice(articleGrpcOptions);
  app.connectMicroservice(ninjaGrpcOptions)
  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}
bootstrap();

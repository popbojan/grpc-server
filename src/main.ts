import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { grpcOptions } from './grpc.options';

/**
 * Hybrid application HTTP & GRPC*
 */
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.connectMicroservice(grpcOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}
bootstrap();

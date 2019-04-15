import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50051',
    package: 'ninja',
    protoPath: join(__dirname, '../protos/ninja/ninja.proto'),
  },
};

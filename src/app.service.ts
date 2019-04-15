import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'HTTP & GRPC server is started!';
  }
}

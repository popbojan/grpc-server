import { Module } from '@nestjs/common';
import {AppService} from './app.service';
import {AppController} from './app.controller';
import { NinjaModule } from './ninja/ninja.module';

@Module({
  imports: [NinjaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule {}

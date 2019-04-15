import { Module } from '@nestjs/common';
import { NinjaController } from './ninja.controller';
import {NinjaModelService} from './ninja-model.service';

@Module({
  controllers: [NinjaController],
  providers: [NinjaModelService],
})
export class NinjaModule {}

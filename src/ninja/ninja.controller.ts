import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {NinjaModelService} from './ninja-model.service';
import {ninja} from '../../codegen/rpc';
import NinjaById = ninja.NinjaById;
import INinja = ninja.INinja;
import ListNinjas = ninja.ListNinjas;
import IEmpty = ninja.IEmpty;

@Controller()
export class NinjaController {

  constructor(private readonly ninjaModelService: NinjaModelService) {}

  @GrpcMethod('NinjaService')
  findOne(data: NinjaById): INinja {
    return this.ninjaModelService.getNinja(data.id);
  }

  @GrpcMethod('NinjaService', 'FindAll')
  async findAll(req: IEmpty): Promise<ListNinjas> {
    const ninjas = this.ninjaModelService.listNinjas();
    return ListNinjas.create({ninjas});
  }

  @GrpcMethod('NinjaService', 'Add')
  add(ninja: INinja): INinja {
    return this.ninjaModelService.addNinja(ninja);
  }
}

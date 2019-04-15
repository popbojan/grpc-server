import {Injectable} from '@nestjs/common';
import {ninja} from '../../codegen/rpc';
import INinja = ninja.INinja;

const NINJAS: INinja[] = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Mark'},
];

@Injectable()
export class NinjaModelService {

  getNinja(id: number): INinja {
    return NINJAS.find(n => n.id === id);
  }

  listNinjas(): INinja[] {
    return NINJAS;
  }

  addNinja(ninja: INinja): INinja {
    NINJAS.push(ninja);
    return this.getNinja(ninja.id);
  }
}

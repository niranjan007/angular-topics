import { Injectable } from '@angular/core';
import { VehicalService } from './vehical.service';

@Injectable()
export class BusService extends VehicalService {

  constructor() {
    super();
   }

  public startEngine() : void {
     console.log('Started BUS Engine');
  }

}

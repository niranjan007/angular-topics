import { Injectable } from '@angular/core';
import { VehicalService } from './vehical.service';

@Injectable()
export class CarService extends VehicalService {

  constructor() {
    super();
   }

  
  public startEngine() : void {
    console.log('Started CAR Engine');
 }
}

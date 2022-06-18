import { Injectable } from '@angular/core';

@Injectable()
export class VehicalService {

  constructor() { }

  
  public startEngine() : void {
    console.log('Started Vehicale Engine');
 }
}

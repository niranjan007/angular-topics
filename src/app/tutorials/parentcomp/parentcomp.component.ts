import { Component, OnInit } from '@angular/core';
import { VehicalService } from '../vehical.service';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent implements OnInit {

  public names : Array<String> = ["Niranjan", "Murthy", "Shobha", "Nishanth"];

  constructor( private vehicleService : VehicalService ) { }

  ngOnInit(): void {
    this.vehicleService.startEngine();
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  @Input()
  listOfNames : Array<String> ;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-component',
  templateUrl: './rest-component.component.html',
  styleUrls: ['./rest-component.component.css']
})
export class RestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Inside Rest Comp");
    this.testFun();
  }

  testFun(){
    console.log("TESTING");
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rest-component',
  templateUrl: './rest-component.component.html',
  styleUrls: ['./rest-component.component.css']
})
export class RestComponentComponent implements OnInit {

  res$!:Observable<any>

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Inside Rest Comp");
    this.testFun();
  }

  testFun(){
    this.res$=this.http.get("https://catfact.ninja/fact");
    console.log(this.res$);
    
  }

}

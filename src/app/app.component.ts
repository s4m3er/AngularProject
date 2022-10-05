import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Test Project for Rest Services';

  constructor(private router: Router) { }

  ngOnInit(): void {    
  }

  redirectToRest(){
    console.log("Inside Func");
    this.router.navigate(['rest-component'])
  }
}

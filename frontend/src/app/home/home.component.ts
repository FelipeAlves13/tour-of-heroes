import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colors!:string[];

  constructor() { }

  ngOnInit(): void {
    this.colors=['#f90', '#f50f6e', '#920ff5', '#0fabf5']
  }


  setColor(index:number){
    return this.colors[index];
  }
}

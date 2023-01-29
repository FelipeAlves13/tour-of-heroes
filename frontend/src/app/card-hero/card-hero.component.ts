import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  @Input() bgColor!:string;
  @Input() position!:number;

  constructor() { }

  ngOnInit(): void {
  }

}

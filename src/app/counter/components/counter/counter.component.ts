import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaaseBy(1)">+1</button>
  <button (click)="decreaseBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>

  `
})

export class CounterComponent {
  public title: string = 'hola mundito';
  public counter: number = 10;


  increaaseBy(value:number):void
  {
    this.counter = this.counter + 1;
  }
  decreaseBy(value:number):void{
    this.counter -= 1;
  }

  resetCounter():void{
    this.counter = 10;
  }
}

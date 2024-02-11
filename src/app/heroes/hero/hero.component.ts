import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  public changeHero():void
  {
    this.name = 'war machine';
  }

  public changeAge():void
  {
    this.age = 44;
  }

  public ResetValues():void
  {
    this.name = 'ironman';
    this.age = 45;

  }
}

import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character [] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8000
  }
];

addCharacter(character: Character):void{
  const newCharacter: Character = {id : uuid(), ...character};

  this.characters.push(newCharacter);
}

// onDeleteCharacter(index:number):void
// {
//   console.log(index);
//   this.characters.splice(index, 1);
// }
deleteCharacterById(id: string)
{
  this.characters = this.characters.filter (Character => Character.id !== id);
}

}

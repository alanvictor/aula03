import { Injectable } from '@angular/core';
import { PetOptions } from '../pet-list-item/pet-list-item.options';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets: PetOptions[] = [];

  constructor() {
    this.pets.push(...[{
      id: 1,
      name: 'Fernando',
      description: 'To perdido mae',
      isAdoption: false,
      isLost: true
    }, {
      id: 2,
      name: 'Jair',
      description: 'Mae sou presidente',
      isAdoption: false,
      isLost: true
    }, {
      id: 3,
      name: 'Rex',
      description: 'Queria ter um nome melhor',
      isAdoption: true,
      isLost: false
    }, {
      id: 4,
      name: 'Totó',
      description: 'Fui perdido em algum lugar',
      isAdoption: true,
      isLost: false
    }]);
  }

  getById(id: number): PetOptions {
    return this.pets.filter(pet => pet.id === id)[0];
  }

  getLost(): PetOptions[] {
    return this.pets.filter(pet => pet.isLost);
  }

  getAdoption(): PetOptions[] {
    return this.pets.filter(pet => pet.isAdoption);
  }
}

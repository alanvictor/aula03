import { Component } from '@angular/core';
import { PetOptions } from './shared/pet-list-item/pet-list-item.options';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private titleService: Title) {
    titleService.setTitle('meu titulo');
  }
}

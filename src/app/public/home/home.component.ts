import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/shared/services/pets.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PetOptions } from '../shared/components/pet-list-item/pet-list-item.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  lostPets: PetOptions[] = [];
  adoptionPets: PetOptions[] = [];

  constructor(private petService: PetsService) {
    this.lostPets = petService.getLost();
    this.adoptionPets = petService.getAdoption();
  }

  ngOnInit() {
  }

}

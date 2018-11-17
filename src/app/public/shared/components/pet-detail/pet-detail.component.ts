import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetOptions } from '../pet-list-item/pet-list-item.options';
import { Title } from '@angular/platform-browser';
import { PetsService } from 'src/app/shared/services/pets.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {

  pet: PetOptions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private petService: PetsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((route) => {
        this.pet = this.petService.getById(parseInt(route.id, 10));
        this.titleService.setTitle(this.pet.name);
      });
  }
}

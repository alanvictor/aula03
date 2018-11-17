import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LostPetsComponent } from './lost-pets/lost-pets.components';
import { FilterPipe } from './lost-pets/filter.pipe';
import { PetDetailComponent } from './shared/components/pet-detail/pet-detail.component';
import { PetListItemComponent } from './shared/components/pet-list-item/pet-list-item.component';
import { RouterModule } from '@angular/router';
import { LostPokemonComponent } from './lost-pets/lost-pokemon/lost-pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent,
    LostPetsComponent,
    FilterPipe,
    PetDetailComponent,
    PetListItemComponent,
    LostPokemonComponent
  ],
  exports: [
    HomeComponent,
    LostPetsComponent,
    PetDetailComponent,
    PetListItemComponent
  ]
})
export class PublicModule { }

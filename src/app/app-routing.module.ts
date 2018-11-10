import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailComponent } from './shared/pet-detail/pet-detail.component';
import { HomeComponent } from './public/home/home.component';
import { LostPetsComponent } from './public/lost-pets/lost-pets.components';
import { LostPetsResolver } from './public/lost-pets/lost-pets.resolver';

const routes: Routes = [
  { path: 'pet/:id/:slug', component: PetDetailComponent },
  {
    path: 'lost',
    component: LostPetsComponent,
    resolve: {
      lostPets: LostPetsResolver
    }
  },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

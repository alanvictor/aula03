import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LostPetsComponent } from './lost-pets/lost-pets.components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent,
    LostPetsComponent
  ],
  exports: [
    HomeComponent,
    LostPetsComponent
  ]
})
export class PublicModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LostPetsComponent } from './lost-pets/lost-pets.components';
import { FilterPipe } from './lost-pets/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent,
    LostPetsComponent,
    FilterPipe
  ],
  exports: [
    HomeComponent,
    LostPetsComponent
  ]
})
export class PublicModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormErrorMessageComponent } from './form-error-message/form-error-message.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent,
  ],
  exports: [
    PageNotFoundComponent,
  ]
})
export class SharedComponentsModule { }

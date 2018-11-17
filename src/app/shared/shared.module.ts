import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IsAdoptedPipe } from './pipes/is-adopted.pipe';
import { NormalFontWeightDirective } from './directives/normal-font-weight.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ToggleNavigationDirective } from './directives/toggle-navigation.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        IsAdoptedPipe,
        NormalFontWeightDirective,
        ToggleNavigationDirective,
        PageNotFoundComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        PageNotFoundComponent,
        FooterComponent,
        HeaderComponent,
        IsAdoptedPipe
    ]
})
export class SharedModule { }

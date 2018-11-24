import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IsAdoptedPipe } from './pipes/is-adopted.pipe';
import { NormalFontWeightDirective } from './directives/normal-font-weight.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ToggleNavigationDirective } from './directives/toggle-navigation.directive';
import { SharedComponentsModule } from './components/components.module';
import { FormErrorMessageComponent } from './components/form-error-message/form-error-message.component';
import { CounterComponent } from './components/counter/counter.component';
import { FilesizePipe } from './pipes/filesize.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        IsAdoptedPipe,
        NormalFontWeightDirective,
        ToggleNavigationDirective,
        PageNotFoundComponent,
        FooterComponent,
        HeaderComponent,
        FormErrorMessageComponent,
        CounterComponent,
        FilesizePipe
    ],
    exports: [
        PageNotFoundComponent,
        FooterComponent,
        HeaderComponent,
        IsAdoptedPipe,
        FormErrorMessageComponent,
        CounterComponent
    ]
})
export class SharedModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { LostPetsResolver } from './public/lost-pets/lost-pets.resolver';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PublicModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    OAuthModule.forRoot()
  ],
  providers: [
    LostPetsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

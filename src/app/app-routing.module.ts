import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { PetDetailComponent } from './shared/pet-detail/pet-detail.component';
import { HomeComponent } from './public/home/home.component';
import { LostPetsComponent } from './public/lost-pets/lost-pets.components';
import { LostPetsResolver } from './public/lost-pets/lost-pets.resolver';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PetDetailComponent } from './public/shared/components/pet-detail/pet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'pet/:id/:slug', component: PetDetailComponent },
  { path: 'pets', children: [
    {
      path: 'lost',
      component: LostPetsComponent,
      resolve: {
        lostPets: LostPetsResolver
      }
    },
    {
      path: 'adoption',
      component: LostPetsComponent,
      resolve: {
        lostPets: LostPetsResolver
      }
    },
  ]
  },
  { path: 'login', component: LoginComponent  },
  { path: 'sign-up', component: SignUpComponent },
  // { path: 'my-pets', loadChildren: '' },
  { path: '**', component: PageNotFoundComponent }
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

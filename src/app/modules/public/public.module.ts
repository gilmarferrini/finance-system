import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { PublicComponent } from './public.component';
import { SigninComponent } from './pages/signin/signin.component';


@NgModule({
  declarations: [
    SignupComponent,
    PublicComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }

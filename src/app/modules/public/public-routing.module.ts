import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PublicComponent,
        children: [
          {
            path: '',
            component: SignupComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

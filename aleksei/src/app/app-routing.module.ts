import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-angular/courses-page/courses-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'courses-page',
      component: CoursesPageComponent},
  {
    path: 'login',
    component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-angular/courses-page/courses-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateFileModalWindowComponent } from './courses-angular/courses-page/create-file-modal-window/create-file-modal-window.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'courses',
      component: CoursesPageComponent,
    },
  {
    path: 'courses/new', component: CreateFileModalWindowComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'error-page',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

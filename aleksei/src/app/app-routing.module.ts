import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateFileModalWindowComponent } from './courses-angular/courses-page/create-file-modal-window/create-file-modal-window.component';
import { AuthGuard } from './guards/auth.guard';
import { CoursesPageComponent } from './courses-angular/courses-page/courses-page.component';
import { EditFilePageComponent } from './courses-angular/courses-page/edit-file-page/edit-file-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
    {
      path: 'courses',
      canActivate: [AuthGuard],
      canLoad: [AuthGuard],
      component: CoursesPageComponent
    },
  {
    path: 'courses/new', component: CreateFileModalWindowComponent
  },
  {
    path: 'courses/edit', component: EditFilePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'error-page',
    component: ErrorPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

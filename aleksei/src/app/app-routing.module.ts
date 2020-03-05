import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './courses-angular/courses-page/courses-page.component';



const routes: Routes = [
  { path: '', redirectTo: 'courses-page', pathMatch: 'full' },
    {
      path: 'courses-page',
      component: CoursesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

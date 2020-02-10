import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageComponent } from './courses-page.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionListItemComponent } from './section-list-item/section-list-item.component';
import { RouteSectionComponent } from './route-section/route-section.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CoursesPageComponent,
    SectionListComponent,
    SectionListItemComponent,
    RouteSectionComponent,
    LoadMoreComponent,
  ],
  exports: [
    CoursesPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
  ]
})
export class CoursesPageModule { }

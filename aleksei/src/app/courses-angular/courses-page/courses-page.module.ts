import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageComponent } from './courses-page.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SharedModule } from '../../shared/shared.module';
import { SectionComponent } from './section/section.component';
import { HighlightBorderDirective } from './directives/highlightborder.directive';


@NgModule({
  declarations: [
    CoursesPageComponent,
    SectionComponent,
    ListComponent,
    ItemComponent,
    BreadcrumbsComponent,
    LoadMoreComponent,
    HighlightBorderDirective,
  ],
  exports: [
    CoursesPageComponent,
    ListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
  ]
})
export class CoursesPageModule { }

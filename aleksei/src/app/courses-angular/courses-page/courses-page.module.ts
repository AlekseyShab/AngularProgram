import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageComponent } from './courses-page.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SharedModule } from '../../shared/shared.module';
import { SectionComponent } from './section/section.component';
import { HighlightBorderDirective } from './directives/highlightborder.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DeleteFileModalWindowComponent } from './delete-file-modal-window/delete-file-modal-window.component';
import { MaterialModule } from '../../material';
import { CreateFileModalWindowComponent } from './create-file-modal-window/create-file-modal-window.component';
import { EditFilePageComponent } from './edit-file-page/edit-file-page.component';


@NgModule({
  declarations: [
    CoursesPageComponent,
    SectionComponent,
    ListComponent,
    ItemComponent,
    BreadcrumbsComponent,
    LoadMoreComponent,
    HighlightBorderDirective,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
    DeleteFileModalWindowComponent,
    CreateFileModalWindowComponent,
    EditFilePageComponent,
  ],
  exports: [
    CoursesPageComponent,
    ListComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CoursesPageModule { }

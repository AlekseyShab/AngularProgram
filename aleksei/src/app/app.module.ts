import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionListComponent } from './courses-angular/courses-page/section-list/section-list.component';
import { SectionListItemComponent } from './courses-angular/courses-page/section-list-item/section-list-item.component';
import { RouteSectionComponent } from './courses-angular/courses-page/route-section/route-section.component';
import { CoursesPageComponent } from './courses-angular/courses-page/courses-page.component';
import { SearchBtnComponent } from './shared/search-btn/search-btn.component';
import { AddBtnComponent } from './shared/blue-buttons/add-btn/add-btn.component';
import { EditBtnComponent } from './shared/blue-buttons/edit-btn/edit-btn.component';
import { DeleteBtnComponent } from './shared/blue-buttons/delete-btn/delete-btn.component';
import { LoadMoreComponent } from './courses-angular/courses-page/load-more/load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionListComponent,
    SectionListItemComponent,
    RouteSectionComponent,
    CoursesPageComponent,
    SearchBtnComponent,
    AddBtnComponent,
    EditBtnComponent,
    DeleteBtnComponent,
    LoadMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './courses-angular/header/header.component';
import { FooterComponent } from './courses-angular/footer/footer.component';
import { SectionListComponent } from './courses-angular/section-list/section-list.component';
import { SectionListItemComponent } from './courses-angular/section-list-item/section-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionListComponent,
    SectionListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

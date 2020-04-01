import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-angular/courses-page/courses-page.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteFileModalWindowComponent } from './courses-angular/courses-page/delete-file-modal-window/delete-file-modal-window.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { TestingModule } from './courses-angular/testing/testing.module';
import { CreateFileModalWindowComponent } from './courses-angular/courses-page/create-file-modal-window/create-file-modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TestingModule,
    CoursesPageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [
    DeleteFileModalWindowComponent,
    CreateFileModalWindowComponent
  ],
  exports: [
    LoginPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

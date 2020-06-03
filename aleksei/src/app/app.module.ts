import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-angular/courses-page/courses-page.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteFileModalWindowComponent } from './courses-angular/courses-page/delete-file-modal-window/delete-file-modal-window.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';
import { TestingModule } from './courses-angular/testing/testing.module';
import { CreateFileModalWindowComponent } from './courses-angular/courses-page/create-file-modal-window/create-file-modal-window.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './states/authState/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './states/listState/list.effects';
import { loadListReducer } from './states/listState/list.reducer';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TestComponent } from './test/test.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ErrorPageComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TestingModule,
    CoursesPageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    StoreModule.forRoot({ login: reducer, list: loadListReducer }),
    EffectsModule.forRoot([CourseEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
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

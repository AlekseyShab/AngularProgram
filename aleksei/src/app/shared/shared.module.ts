import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchBtnComponent } from './search-btn/search-btn.component';
import { EditBtnComponent } from './blue-buttons/edit-btn/edit-btn.component';
import { DeleteBtnComponent } from './blue-buttons/delete-btn/delete-btn.component';
import { AddBtnComponent } from './blue-buttons/add-btn/add-btn.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateSelectComponent } from './translate-select/translate-select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBtnComponent,
    AddBtnComponent,
    DeleteBtnComponent,
    EditBtnComponent,
    SpinnerComponent,
    TranslateSelectComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchBtnComponent,
    AddBtnComponent,
    DeleteBtnComponent,
    EditBtnComponent,
    SpinnerComponent,
    TranslateModule,
    TranslateSelectComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
  ]
})
export class SharedModule { }

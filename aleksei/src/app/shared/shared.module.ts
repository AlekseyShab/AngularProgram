import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchBtnComponent } from './search-btn/search-btn.component';
import { EditBtnComponent } from './blue-buttons/edit-btn/edit-btn.component';
import { DeleteBtnComponent } from './blue-buttons/delete-btn/delete-btn.component';
import { AddBtnComponent } from './blue-buttons/add-btn/add-btn.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBtnComponent,
    AddBtnComponent,
    DeleteBtnComponent,
    EditBtnComponent

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchBtnComponent,
    AddBtnComponent,
    DeleteBtnComponent,
    EditBtnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

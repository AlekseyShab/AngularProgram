import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddBtnStubComponent,
  BreadcrumbsStubComponent,
  DeleteBtnStubComponent,
  EditBtnStubComponent,
  FooterStubComponent,
  HeaderStubComponent,
  ItemStubComponent,
  ListStubComponent,
  LoadMoreStubComponent,
  SearchBtnStubComponent,
  SectionStubComponent
} from './component-stub';


@NgModule({
  declarations: [
    HeaderStubComponent,
    BreadcrumbsStubComponent,
      SearchBtnStubComponent,
      FooterStubComponent,
      EditBtnStubComponent,
      ItemStubComponent,
      DeleteBtnStubComponent,
      AddBtnStubComponent,
      ListStubComponent,
      SectionStubComponent,
      LoadMoreStubComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TestingModule { }

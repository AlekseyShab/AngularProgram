import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import {
  BreadcrumbsStubComponent,
  EditBtnStubComponent,
  FooterStubComponent,
  HeaderStubComponent,
  SearchBtnStubComponent
} from '../testing/component-stub';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        HeaderStubComponent,
        BreadcrumbsStubComponent,
        SearchBtnStubComponent,
        FooterStubComponent,
        EditBtnStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

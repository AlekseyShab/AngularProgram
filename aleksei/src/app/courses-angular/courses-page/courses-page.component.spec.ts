import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import {
  AddBtnStubComponent,
  BreadcrumbsStubComponent,
  EditBtnStubComponent,
  FooterStubComponent,
  HeaderStubComponent,
  SearchBtnStubComponent,
  SectionStubComponent
} from '../testing/component-stub';
import { FormsModule } from '@angular/forms';

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
        EditBtnStubComponent,
        AddBtnStubComponent,
        SectionStubComponent
      ],
      imports:[FormsModule]
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

  it('should change searchToken value', () => {
    component.search('NameField');
    expect(component.searchTokenResult).toBe('NameField');
  });
});

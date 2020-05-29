import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilePageComponent } from './edit-file-page.component';

describe('EditFilePageComponent', () => {
  let component: EditFilePageComponent;
  let fixture: ComponentFixture<EditFilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileModalWindowComponent } from './create-file-modal-window.component';

describe('CreateFileModalWindowComponent', () => {
  let component: CreateFileModalWindowComponent;
  let fixture: ComponentFixture<CreateFileModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFileModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFileModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

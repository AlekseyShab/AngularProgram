import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFileModalWindowComponent } from './delete-file-modal-window.component';

describe('DeleteFileModalWindowComponent', () => {
  let component: DeleteFileModalWindowComponent;
  let fixture: ComponentFixture<DeleteFileModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFileModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFileModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

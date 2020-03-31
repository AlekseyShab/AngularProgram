import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFileModalWindowComponent } from './delete-file-modal-window.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';

describe('DeleteFileModalWindowComponent', () => {
  let component: DeleteFileModalWindowComponent;
  let fixture: ComponentFixture<DeleteFileModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFileModalWindowComponent ],
      imports: [ MatDialogModule ],
      providers: [
        { provide: MatDialogRef, useValue: { close: (): void => {} } },
        { provide: MAT_DIALOG_DATA, useValue: '1' },
      ],
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

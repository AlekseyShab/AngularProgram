import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CoursePageService } from '../services/course-page.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-delete-file-modal-window',
  templateUrl: './delete-file-modal-window.component.html',
  styleUrls: ['./delete-file-modal-window.component.scss']
})
export class DeleteFileModalWindowComponent {
  constructor(
      private courseService: CoursePageService,
      public dialogRef: MatDialogRef<DeleteFileModalWindowComponent>,
      private store: Store<'list'>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteItem(): void {
    this.courseService.removeCourse(this.data).subscribe(() => {
      this.store.dispatch({ type: '[List Page] Load Courses' });
    });
    this.dialogRef.close();
  }

}

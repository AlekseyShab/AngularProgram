import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';
import { DeleteFileModalWindowComponent } from '../delete-file-modal-window/delete-file-modal-window.component';
import { MatDialog, } from '@angular/material';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() info: CourseItem;
  courseId: number;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.courseId = this.info.id;
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(DeleteFileModalWindowComponent, {
      width: '350px',
      data: id
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}

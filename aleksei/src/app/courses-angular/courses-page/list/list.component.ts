import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';
import { DeleteFileModalWindowComponent } from '../delete-file-modal-window/delete-file-modal-window.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, DoCheck {
  @Input() searchToken: string;
  arrayOfCourses: CourseItem[];

  constructor(private courseService: CoursePageService,private dialog: MatDialog) {
  }

  ngOnInit() {
    this.arrayOfCourses = this.courseService.courses;
  }

  ngDoCheck() {
    this.arrayOfCourses = this.courseService.courses;
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

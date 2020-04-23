import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';
import { DeleteFileModalWindowComponent } from '../delete-file-modal-window/delete-file-modal-window.component';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() searchToken: string;
  arrayOfCourses: CourseItem[];

  constructor(private courseService: CoursePageService,private dialog: MatDialog) {
  }
  deleteOperationSuccessfulSubscription: Subscription;

  ngOnInit() {
    this.courseService.getCoursesHttp().subscribe(value => {
      this.arrayOfCourses = value;
    });
  }

  ngOnChanges() {
    this.deleteOperationSuccessfulSubscription = this.courseService.deleteOperationSuccessfulEvent$
        .subscribe(isSuccessful => {
          if (isSuccessful === true) {
            this.courseService.getCoursesHttp().subscribe(value => {
              this.arrayOfCourses = value;
            });
          } else {
            console.log('error')
          }
        });
  }

  ngOnDestroy() {
    this.deleteOperationSuccessfulSubscription.unsubscribe();
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

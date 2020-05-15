import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';
import { DeleteFileModalWindowComponent } from '../delete-file-modal-window/delete-file-modal-window.component';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() searchToken: string;
  showSpinner: boolean = true;
  arrayOfCourses: CourseItem[];

  constructor(
      private courseService: CoursePageService,
      private dialog: MatDialog,
      private store: Store<{list: CourseItem[]}>
  ) {}
  deleteOperationSuccessfulSubscription: Subscription;

  ngOnInit() {
    this.store.dispatch({ type: '[List Page] Load Courses' });
    this.store.select(state => state.list).subscribe((data)=>{
      this.showSpinner = false;
      this.arrayOfCourses = data;
    },
               err => {
              this.showSpinner = false;
              console.log(err)
            }
        )
    // this.courseService.getCoursesHttp().subscribe(
    //     value => {
    //
    //   this.arrayOfCourses = value;
    // },

  }

  // ngOnChanges() {
  //   this.deleteOperationSuccessfulSubscription = this.courseService.deleteOperationSuccessfulEvent$
  //       .subscribe(isSuccessful => {
  //         if (isSuccessful === true) {
  //           this.courseService.getCoursesHttp().subscribe(value => {
  //             this.arrayOfCourses = value;
  //           });
  //         } else {
  //           this.showSpinner = false;
  //           console.log('error')
  //         }
  //       });
  // }

  // ngOnDestroy() {
  //   this.deleteOperationSuccessfulSubscription.unsubscribe();
  // }

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

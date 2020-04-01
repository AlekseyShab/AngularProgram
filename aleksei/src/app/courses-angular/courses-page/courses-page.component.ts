import { Component, OnInit } from '@angular/core';
import { CoursePageService } from './services/course-page.service';
import { MatDialog } from '@angular/material';
import { CreateFileModalWindowComponent } from './create-file-modal-window/create-file-modal-window.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  searchToken: string;
  searchTokenResult: string;
  constructor(private service: CoursePageService,private dialog: MatDialog) { }

  ngOnInit() {
  }

  search(searchToken){
    this.searchTokenResult = searchToken;
  }

  addCourse() {
    this.service.createCourse();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFileModalWindowComponent, {
      width: '450px',
      height: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}

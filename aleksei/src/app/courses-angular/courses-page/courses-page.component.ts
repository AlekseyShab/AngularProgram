import { Component, OnInit } from '@angular/core';
import { CoursePageService } from './services/course-page.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  searchToken: string;
  searchTokenResult: string;
  constructor(private service: CoursePageService,private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  search(searchToken){
    this.service.searchToken(searchToken).subscribe((v)=>{
      console.log(v)
    })
    this.searchTokenResult = searchToken;
  }

  openDialog(): void {
    this.router.navigate(['courses/new']);
  }
}

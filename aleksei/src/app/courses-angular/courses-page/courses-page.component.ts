import { Component, OnInit } from '@angular/core';
import { CoursePageService } from './services/course-page.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  searchToken: string;
  searchTokenResult: string;
  constructor(private service: CoursePageService) { }

  ngOnInit() {
  }

  search(searchToken){
    this.searchTokenResult = searchToken;
  }

  addCourse() {
    this.service.createCourse();
  }

}

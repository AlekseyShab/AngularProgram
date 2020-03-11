import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() searchToken: string;
  arrayOfCourses: CourseItem[];

  constructor(private courseService: CoursePageService) {
  }

  ngOnInit() {
    this.arrayOfCourses = this.courseService.courses;
  }

  deleteItemElement(e) {
    this.arrayOfCourses = this.arrayOfCourses.filter(itemId => itemId.id !== e);
  }
}

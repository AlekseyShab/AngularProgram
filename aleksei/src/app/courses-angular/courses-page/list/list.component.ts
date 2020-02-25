import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  array: CourseItem[];

  constructor(private courseService: CoursePageService) {
  }

  ngOnInit() {
    this.array = this.courseService.array
  }
}

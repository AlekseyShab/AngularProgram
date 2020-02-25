import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() info: CourseItem;
  courseId: string;

  constructor() { }

  ngOnInit() {
    this.courseId = this.info.id
  }

  showItemId():void {
    console.log(`Show item - ${this.info.id}`)
  }

}

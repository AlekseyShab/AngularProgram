import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() info: CourseItem;
  @Output() showId = new EventEmitter();
  courseId: string;

  constructor() { }

  ngOnInit() {
    this.courseId = this.info.id
  }

  showItemId(id):void {
    this.showId.emit(id)
  }

}

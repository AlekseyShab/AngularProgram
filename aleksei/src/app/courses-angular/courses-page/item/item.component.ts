import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() info: CourseItem;
  @Output() deleteElement: EventEmitter<number> = new EventEmitter();
  courseId: number;

  constructor() { }

  ngOnInit() {
    this.courseId = this.info.id;
  }

  deleteItem(id): void {
    this.deleteElement.emit(id);
  }

}

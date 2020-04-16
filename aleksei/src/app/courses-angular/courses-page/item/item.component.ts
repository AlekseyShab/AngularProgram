import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() info: CourseItem;
  @Output() open: EventEmitter<any> = new EventEmitter();
  courseId: number;

  constructor() {
  }

  ngOnInit() {
    this.courseId = this.info.id;
  }

  toggle(id) {
    this.open.emit(id)
  }
}

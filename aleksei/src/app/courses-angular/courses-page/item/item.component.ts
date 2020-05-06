import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseItem } from '../models/typescript-course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() info: CourseItem;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  toggle(id) {
    this.open.emit(id)
  }

  editCourse(id) {
  this.router.navigate(['courses/edit'],{queryParams:{id: id}});
  }

}

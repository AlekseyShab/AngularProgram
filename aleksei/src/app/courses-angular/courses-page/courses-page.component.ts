import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  @Output() showId = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  show(id) {
    this.showId.emit(console.log(id))
  }
}

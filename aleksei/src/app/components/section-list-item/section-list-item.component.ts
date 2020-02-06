import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-list-item',
  templateUrl: './section-list-item.component.html',
  styleUrls: ['./section-list-item.component.scss']
})
export class SectionListItemComponent implements OnInit {
  @Input() item:string;

  constructor() { }

  ngOnInit() {
  }

}

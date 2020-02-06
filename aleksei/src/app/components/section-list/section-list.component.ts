import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  items:object[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {name:'Alex'},
      {name:'Elena'},
      {name:'Vasiy'},
    ]
  }

}

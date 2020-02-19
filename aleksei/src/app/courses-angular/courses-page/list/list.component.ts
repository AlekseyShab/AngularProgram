import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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

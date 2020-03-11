import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  searchToken: string;
  searchTokenResult: string;
  constructor() { }

  ngOnInit() {
  }

  search(searchToken){
    this.searchTokenResult = searchToken;
  }
}

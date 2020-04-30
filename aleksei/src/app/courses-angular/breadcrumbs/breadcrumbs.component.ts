import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  currentUrl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((value: NavigationEnd) => this.currentUrl = value.url);
  }

}

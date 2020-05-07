import { Component } from '@angular/core';
import { CoursePageService } from './services/course-page.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  searchToken: string;
  searchTokenResult: string;
  constructor(private service: CoursePageService,private dialog: MatDialog, private router: Router) { }

  onSearchChange(searchValue: string){
    if(searchValue.length > 2) {
      this.service.searchToken(searchValue)
          .pipe(debounceTime(1000))
          .subscribe((v)=>{
        console.log(v)
      });
      this.searchTokenResult = searchValue;
    }else{
      this.searchTokenResult = null;
    }

  }

  openDialog(): void {
    this.router.navigate(['courses/new']);
  }
}

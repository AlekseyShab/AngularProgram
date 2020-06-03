import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author, CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-file-modal-window',
  templateUrl: './create-file-modal-window.component.html',
  styleUrls: ['./create-file-modal-window.component.scss']
})
export class CreateFileModalWindowComponent implements OnInit {
  courseFormGroup: FormGroup;
  authors: Author[];
  authorSelected: string;

  constructor(
      private courseService: CoursePageService,
      private router: Router,
      private store: Store<'list'>,
      ) { }

  ngOnInit() {
    this.courseFormGroup = new FormGroup({
      title: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      description: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      duration: new FormControl('',[Validators.required]),
      authors: new FormControl(''),
      authorsSelected: new FormControl('',[Validators.required]),
    });
    this.courseService.getAuthors().subscribe((authors: Author[]) => {
      this.authors = authors;
    });
  }

  onNoClick(): void {
    this.router.navigate(['courses']);
  }

  saveCourse():void {
    let newCourse: CourseItem = {
      id: Math.floor(Math.random()),
      title: this.courseFormGroup.controls.title.value,
      description: this.courseFormGroup.controls.description.value,
      durationTime: this.courseFormGroup.controls.duration.value,
      creationDate: this.courseFormGroup.controls.date.value,
      topRated: false
    };

    this.courseService.createCourse(newCourse).subscribe(()=>{
      this.store.dispatch({ type: '[List Page] Load Courses' });
      this.router.navigate(['courses']);
    });

  }

  changeCity(e) {
    let selectedAuth = e.target.value;
    this.authorSelected = selectedAuth;
  }
}

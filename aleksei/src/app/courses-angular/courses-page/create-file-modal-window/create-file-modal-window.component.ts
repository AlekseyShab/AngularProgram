import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseItem } from '../models/typescript-course.model';
import { CoursePageService } from '../services/course-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-file-modal-window',
  templateUrl: './create-file-modal-window.component.html',
  styleUrls: ['./create-file-modal-window.component.scss']
})
export class CreateFileModalWindowComponent implements OnInit {
  courseFormGroup: FormGroup;
  id = 4;

  constructor(private courseService: CoursePageService, private router: Router) { }

  ngOnInit() {
    this.courseFormGroup = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(''),
      duration: new FormControl(''),
      authors: new FormControl(''),
    });
  }

  onNoClick(): void {
    this.router.navigate(['courses'])
  }

  saveCourse():void {
    const newCourse: CourseItem = {
      id: Math.floor(Math.random()),
      title: this.courseFormGroup.controls.title.value,
      description: this.courseFormGroup.controls.description.value,
      durationTime: this.courseFormGroup.controls.duration.value,
      creationDate: this.courseFormGroup.controls.date.value,
      topRated: false
    };
    this.courseService.createCourse(newCourse).subscribe(()=>{
      this.router.navigate(['courses']);
    });

  }

}

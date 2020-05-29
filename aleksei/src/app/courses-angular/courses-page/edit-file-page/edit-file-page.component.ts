import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursePageService } from '../services/course-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseItem } from '../models/typescript-course.model';

@Component({
  selector: 'app-edit-file-page',
  templateUrl: './edit-file-page.component.html',
  styleUrls: ['./edit-file-page.component.scss']
})
export class EditFilePageComponent implements OnInit {
  courseFormGroup: FormGroup;

  constructor(
      private courseService: CoursePageService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

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
    this.router.navigate(['courses']);
  }

  changeCourse():void {
    let id = +this.route.snapshot.queryParamMap.get('id');
      this.courseService.removeCourse(id).subscribe(()=>{
        let newCourseWithId: CourseItem = {
          id: id,
          title: this.courseFormGroup.controls.title.value,
          description: this.courseFormGroup.controls.description.value,
          durationTime: this.courseFormGroup.controls.duration.value,
          creationDate: this.courseFormGroup.controls.date.value,
          topRated: false
        };
        this.courseService.editCourse(newCourseWithId).subscribe(()=>{
          this.router.navigate(['courses']);
        });
      });
  }
}

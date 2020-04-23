import { Injectable } from '@angular/core';

import { CourseItem } from '../models/typescript-course.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursePageService {
  basUrlCourses = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {
  }

  private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();

  get deleteOperationSuccessfulEvent$(): Observable<boolean> {
    return this._deleteOperationSuccessfulEvent$.asObservable();
  }

  arrayOfCourses: CourseItem[] = [
    // {
    //   id: 1,
    //   title: 'Angular',
    //   description: 'Learn about ' +
    //     'where you can find course descriptions, what information they include, ' +
    //     'how they work, and details about various components of a course description. ' +
    //     'Course descriptions report information about a university or college\'s classes.',
    //   durationTime: 60,
    //   creationDate: new Date("2020-10-03"),
    //   topRated: true,
    // },
    // {
    //   id: 2,
    //   title: 'React',
    //   description: 'Learn about ' +
    //     'where you can find course descriptions, what information they include, ' +
    //     'how they work, and details about various components of a course description. ' +
    //     'Course descriptions report information about a university or college\'s classes.',
    //   durationTime: 88,
    //   creationDate: new Date("2016-06-03"),
    //   topRated: true,
    // },
    // {
    //   id: 3,
    //   title: 'Vue',
    //   description: 'Learn about ' +
    //     'where you can find course descriptions, what information they include, ' +
    //     'how they work, and details about various components of a course description. ' +
    //     'Course descriptions report information about a university or college\'s classes.',
    //   durationTime: 30,
    //   creationDate: new Date("2020-03-03"),
    //   topRated: false,
    // }
  ];

  getCoursesHttp(): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${this.basUrlCourses}`);
  }
  getCourses(): any {
    this.getCoursesHttp().subscribe((value) => {
      this.arrayOfCourses = value;
      return this.arrayOfCourses;
    });

  }

  itemCourse(id) {
    for(let item of this.arrayOfCourses){
      if(item.id == id){
        return item
      }
    }
  }

  createCourse(course: CourseItem) {
    return this.http.post(`${this.basUrlCourses}`,course);
  }

  removeCourse(id) {
    return this.http.delete(`${this.basUrlCourses}/${id}`).subscribe(()=>{
      this._deleteOperationSuccessfulEvent$.next(true);
    });
  }

  updateItem() {

  }
}

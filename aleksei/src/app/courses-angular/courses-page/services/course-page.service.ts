import { Injectable } from '@angular/core';

import { CourseItem } from '../models/typescript-course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursePageService {

  constructor() {
  }

  arrayOfCourses: CourseItem[] = [
    {
      id: 1,
      title: 'Angular',
      description: 'Learn about ' +
        'where you can find course descriptions, what information they include, ' +
        'how they work, and details about various components of a course description. ' +
        'Course descriptions report information about a university or college\'s classes.',
      creationTime: '1h 28min',
      creationDate: '9 Nov, 2018'
    },
    {
      id: 2,
      title: 'React',
      description: 'Learn about ' +
        'where you can find course descriptions, what information they include, ' +
        'how they work, and details about various components of a course description. ' +
        'Course descriptions report information about a university or college\'s classes.',
      creationTime: '1h 28min',
      creationDate: '8 Nov, 2018'
    },
    {
      id: 3,
      title: 'Vue',
      description: 'Learn about ' +
        'where you can find course descriptions, what information they include, ' +
        'how they work, and details about various components of a course description. ' +
        'Course descriptions report information about a university or college\'s classes.',
      creationTime: '2h 38min',
      creationDate: '19 Nov, 2018'
    }
  ];


  get array(): CourseItem[] {
    return this.arrayOfCourses;
  }

  // arrayRemove(value) {
  //   this.arrayOfCourses = this.arrayOfCourses.filter(function(item){
  //     return item.id !== value;
  //   });
  //   console.log(this.arrayOfCourses)
  // }

}

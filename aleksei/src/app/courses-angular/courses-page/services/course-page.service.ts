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
      creationDate: new Date("2020-10-03")
    },
    {
      id: 2,
      title: 'React',
      description: 'Learn about ' +
        'where you can find course descriptions, what information they include, ' +
        'how they work, and details about various components of a course description. ' +
        'Course descriptions report information about a university or college\'s classes.',
      creationTime: '1h 28min',
      creationDate: new Date("2016-06-03")
    },
    {
      id: 3,
      title: 'Vue',
      description: 'Learn about ' +
        'where you can find course descriptions, what information they include, ' +
        'how they work, and details about various components of a course description. ' +
        'Course descriptions report information about a university or college\'s classes.',
      creationTime: '2h 38min',
      creationDate: new Date("2020-03-03")
    }
  ];


  get courses(): CourseItem[] {
    return this.arrayOfCourses;
  }

}

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
      durationTime: 60,
      creationDate: new Date("2020-10-03"),
      topRated: true,
    },
    {
      id: 2,
      title: 'React',
      description: 'Learn about ' +
        'where you can find course descriptions, what information they include, ' +
        'how they work, and details about various components of a course description. ' +
        'Course descriptions report information about a university or college\'s classes.',
      durationTime: 88,
      creationDate: new Date("2016-06-03"),
      topRated: true,
    },
    {
      id: 3,
      title: 'Vue',
      description: 'Learn about ' +
        'where you can find course descriptions, what information they include, ' +
        'how they work, and details about various components of a course description. ' +
        'Course descriptions report information about a university or college\'s classes.',
      durationTime: 30,
      creationDate: new Date("2020-03-03"),
      topRated: false,
    }
  ];


  get courses(): CourseItem[] {
    return this.arrayOfCourses;
  }

  itemCourse(id) {
    for(let item of this.arrayOfCourses){
      if(item.id == id){
        return item
      }
    }
  }

  createCourse() {
    const course: CourseItem = {
      id: 4,
      title: 'Test',
      description: 'test description',
      durationTime: 60,
      creationDate: new Date(),
      topRated:false
    };
    this.arrayOfCourses.push(course)
  }

  removeCourse(id) {
    this.arrayOfCourses =  this.arrayOfCourses.filter(itemId => itemId.id !== id);
  }

  updateItem() {

  }
}

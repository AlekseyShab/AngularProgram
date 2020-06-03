import { Injectable } from '@angular/core';

import { CourseItem } from '../models/typescript-course.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursePageService {
  basUrlCourses = 'http://localhost:3000/courses';
  basUrlAuthors = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) {
  }

  private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();

  get deleteOperationSuccessfulEvent$(): Observable<boolean> {
    return this._deleteOperationSuccessfulEvent$.asObservable();
  }

  getCoursesHttp(): Observable<CourseItem[]> {
    return this.http.get<CourseItem[]>(`${this.basUrlCourses}`);
  }

  createCourse(course: CourseItem):Observable<any> {
    return this.http.post(`${this.basUrlCourses}`,course);
  }

  removeCourse(id): Observable<any> {
    return this.http.delete(`${this.basUrlCourses}/${id}`)
    //     .subscribe(()=>{
    //   this._deleteOperationSuccessfulEvent$.next(true);
    // });
  }

  editCourse(course: CourseItem){
    return this.http.post(`${this.basUrlCourses}`,course)
  }

  searchToken(token) {
    let params = new HttpParams();
    params = params.append('title', token);
    return this.http.get(`${this.basUrlCourses}`, {params: params});
  }

  getAuthors(): Observable<any>{
    return this.http.get(`${this.basUrlAuthors}`)
  }
}

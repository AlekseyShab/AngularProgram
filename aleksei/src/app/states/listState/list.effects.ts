import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap } from 'rxjs/operators';
import { CoursePageService } from '../../courses-angular/courses-page/services/course-page.service';
import { addCourse, loadList } from './list.actions';
import { CourseItem } from '../../courses-angular/courses-page/models/typescript-course.model';

@Injectable()
export class CourseEffects {

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
        ofType('[List Page] Load Courses'),
        switchMap(() => {
          return this.courseService.getCoursesHttp()
              .pipe(
                  mergeMap((courses: CourseItem[])=>[
                      loadList({ loadedState: courses })
                  ])
                )
            }
        )
    )
  );


  // deleteCourses$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(deleteCourse),
  //         switchMap((action) => {
  //               return this.courseService.removeCourse(action.id)
  //             },
  //         )
  //     )
  // );


  addCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addCourse),
            switchMap((action) =>
                  this.courseService.createCourse(action.course)
                ,
            )
        )
  );

  constructor(
      private actions$: Actions,
      private courseService: CoursePageService
  ) {}
}

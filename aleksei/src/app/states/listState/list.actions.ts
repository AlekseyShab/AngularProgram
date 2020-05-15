import { createAction, props } from '@ngrx/store';
import { CourseItem } from '../../courses-angular/courses-page/models/typescript-course.model';

export const loadList = createAction(
    '[List Page] Load list',
    props<{ loadedState: CourseItem[]}>()
);

export const deleteCourse = createAction(
    '[List Page] Delete Course',
    props<{ id: number}>()
);

export const deleteSuccess = createAction(
    '[List Page] Delete Success',
);

export const addCourse = createAction(
    '[List Page] Add Course',
    props<{ course: CourseItem}>()
);

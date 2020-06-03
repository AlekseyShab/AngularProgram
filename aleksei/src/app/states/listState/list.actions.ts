import { createAction, props } from '@ngrx/store';
import { CourseItem } from '../../courses-angular/courses-page/models/typescript-course.model';

export const loadList = createAction(
    '[List Page] Load list',
    props<{ loadedState: CourseItem[]}>()
);

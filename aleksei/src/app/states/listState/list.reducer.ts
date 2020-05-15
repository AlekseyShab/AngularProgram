import { Action, createReducer, on } from '@ngrx/store';

import { CourseItem } from '../../courses-angular/courses-page/models/typescript-course.model';
import { deleteSuccess, loadList } from './list.actions';

export const initialState: CourseItem[] = [];

const _loadReducer = createReducer(initialState,
    on(loadList,(state,{loadedState}) =>([...loadedState])),
    on(deleteSuccess,state => (state))
);

export function loadListReducer(state: CourseItem[], action: Action) {
  return _loadReducer(state, action);
}

import { Action, createReducer, on } from '@ngrx/store';

import { login } from './login.actions';
import { State } from './auth-state.model';

export const initialState: State = {
  isAuthenticated: localStorage.getItem('isAuth') === 'true',
  user: localStorage.getItem('userName'),
  errorMessage: null
};

const _loginReducer = createReducer(initialState,
    on(login,(state,{username, isAuth}) =>({user: username, isAuthenticated: isAuth})),
);

export function reducer(state: State, action: Action) {
  return _loginReducer(state, action);
}

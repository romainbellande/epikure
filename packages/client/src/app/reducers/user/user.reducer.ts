import * as Actions from './user.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface UserState {
  accessToken: string | null;
  user: Actions.User | null;
}

export const initialState: UserState = {
  accessToken: null,
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(Actions.setUser, (state, user) => ({ ...state, user })),
  on(Actions.setAccessToken, (state, { accessToken }) => ({
    ...state,
    accessToken,
  }))
);

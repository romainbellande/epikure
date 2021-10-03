import { createSelector } from '@ngrx/store';
import { State } from '..';

export const selectUserState = (state: State) => state.user;

export const selectAccessToken = createSelector(
  selectUserState,
  (user) => user.accessToken
);

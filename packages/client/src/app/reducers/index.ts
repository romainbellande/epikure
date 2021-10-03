import { userReducer, UserState } from './user/user.reducer';

export interface State {
  user: UserState;
}

export const reducers = {
  user: userReducer,
};

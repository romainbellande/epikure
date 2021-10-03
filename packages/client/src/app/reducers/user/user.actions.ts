import { createAction, props } from '@ngrx/store';
import { createNamespace } from '../utils/create-namespace';

const namespace = createNamespace('USER');

export interface AccessToken {
  accessToken: string;
}

export interface User {
  email: string;
  pseudo: string;
}

export const setAccessToken = createAction(
  namespace + 'setAccessToken',
  props<AccessToken>()
);

export const setUser = createAction(namespace + 'setUser', props<User>());

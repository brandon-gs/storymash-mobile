import {User} from '_interfaces/user';

export interface AuthState {
  loading: boolean;
  token: string;
  user: User;
  auth: boolean;
}

export interface AuthenticateAction {
  type: '@AUTH/AUTHENTICATE';
  payload: {token: string; user: User};
}

export interface DeauthenticateAction {
  type: '@AUTH/DEAUTHENTICATE';
}

export interface UpdateUserAction {
  type: '@AUTH/UPDATE_USER';
  payload: {user: User};
}

export interface RemoveUserAction {
  type: '@AUTH/REMOVE_USER';
}

export interface EnableAuthLoader {
  type: '@AUTH/ENABLE_LOADER';
}

export interface DisableAuthLoader {
  type: '@AUTH/DISABLE_LOADER';
}

export type AuthActions =
  | AuthenticateAction
  | DeauthenticateAction
  | UpdateUserAction
  | RemoveUserAction
  | EnableAuthLoader
  | DisableAuthLoader;

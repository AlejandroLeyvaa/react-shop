import {AUTH_ACTION_TYPES} from '../constants';

export type AuthAction =
  | {type: AUTH_ACTION_TYPES.SIGN_UP; payload: {token: string; user: {}}}
  | {type: AUTH_ACTION_TYPES.ADD_ERROR; payload: string}
  | {type: AUTH_ACTION_TYPES.REMOVE_ERROR}
  | {type: AUTH_ACTION_TYPES.NOT_AUTHENTICATED}
  | {type: AUTH_ACTION_TYPES.LOGOUT};

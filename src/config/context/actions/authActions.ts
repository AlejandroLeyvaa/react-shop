import { AUTH_ACTION_TYPES } from '../constants';
import { User } from '../../../infrastructure/modules/Login/domain/models/User';

export type AuthAction =
  | {
    type: AUTH_ACTION_TYPES.CHECKING,
    payload: {
      status: string,
      token: string,
      user: User,
      errorMessage: string,
    }
  }
  // | {type: AUTH_ACTION_TYPES.SIGN_UP, payload: {token: string; user: {}}}
  // | {type: AUTH_ACTION_TYPES.ADD_ERROR, payload: string}
  // | {type: AUTH_ACTION_TYPES.REMOVE_ERROR}
  | {
    type: AUTH_ACTION_TYPES.NOT_AUTHENTICATED,
    payload: {
      status: string,
      token: string,
      user: User,
      errorMessage: string,
    }
  }
  | {
    type: AUTH_ACTION_TYPES.AUTHENTICATED,
    payload: {
      status: string,
      token: string,
      user: User,
      errorMessage: string,
    }
  }
  // | {type: AUTH_ACTION_TYPES.LOGOUT};

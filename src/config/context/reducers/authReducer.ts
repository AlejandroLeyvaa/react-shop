import { AuthAction } from '../actions/authActions';
import { AUTH_ACTION_TYPES } from '../constants';
import { AuthState } from '../interfaces/authState';
import { voidUser } from '../../utils/voidUser';

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.CHECKING:
      return {
        ...state,
        status: action.payload.status, // CHECKING
        token: action.payload.token, // Blank token
        user: action.payload.user, // Void user
        errorMessage: action.payload.errorMessage,

      };
    case AUTH_ACTION_TYPES.NOT_AUTHENTICATED:
      return {
        ...state,
        status: action.payload.status,
        token: action.payload.token,
        user: action.payload.user,
        errorMessage: action.payload.errorMessage,
      };
    case AUTH_ACTION_TYPES.AUTHENTICATED:
      return {
        ...state,
        status: action.payload.status,
        token: action.payload.token,
        user: action.payload.user,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

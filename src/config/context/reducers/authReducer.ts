import { AuthAction } from '../actions/authActions';
import {AuthState} from '../interfaces/authState';

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
      };

    default:
      return state;
  }
};

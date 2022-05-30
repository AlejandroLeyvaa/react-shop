import * as React from 'react';
import { AuthState } from './interfaces/authState';
import { authReducer } from './reducers/authReducer';
import * as AUTH from './constants/index';
import { voidUser, voidUserType } from '../utils/voidUser';
import { User } from '../../infrastructure/modules/Login/domain/models/User';

type AuthContextProps = {
  status: AUTH.AUTH_ACTION_TYPES.CHECKING | AUTH.AUTH_ACTION_TYPES.AUTHENTICATED | AUTH.AUTH_ACTION_TYPES.NOT_AUTHENTICATED;
  user: User | voidUserType;
}

const authInicialState: AuthState = {
  status: AUTH.AUTH_ACTION_TYPES.CHECKING,
  token: '',
  user: voidUser,
  errorMessage: ''
}

export const AuthContext = React.createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = React.useReducer(authReducer, authInicialState);

  React.useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {


    dispatch({
      type: AUTH.AUTH_ACTION_TYPES.CHECKING,
      payload: {
        status: AUTH.AUTH_ACTION_TYPES.CHECKING,
        token: '',
        user: voidUser,
        errorMessage: ''
      }
    });


    dispatch({
      type: AUTH.AUTH_ACTION_TYPES.NOT_AUTHENTICATED,
      payload: {
        status: AUTH.AUTH_ACTION_TYPES.NOT_AUTHENTICATED,
        token: '',
        user: voidUser,
        errorMessage: ''
      }
    });

    dispatch({
      type: AUTH.AUTH_ACTION_TYPES.AUTHENTICATED,
      payload: {
        token: '',
        status: AUTH.AUTH_ACTION_TYPES.AUTHENTICATED,
        user: {
          idUser: 1,
          userName: 'AlejandroLeyvaa',
          email: 'alejandro_leyvaa@hotmail.com',
          password: '123',
        },
        errorMessage: ''

      }
    });

  }

  const isAuthenticated = false;

  return (
    <AuthContext.Provider value={{
      ...state,
    }}>
      {children}
    </AuthContext.Provider>
  )

}
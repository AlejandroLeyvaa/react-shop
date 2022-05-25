import * as React from 'react';
import { AuthState } from './interfaces/authState';
import { authReducer } from './reducers/authReducer';

type AuthContextProps = {
  isAuthenticated: boolean;
  status: 'checking' | 'authenticated' | 'not-authenticated';
}

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = React.createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = React.useReducer(authReducer, authInicialState);

  const isAuthenticated = false;

  return (
    <AuthContext.Provider value={{
      ...state,
      isAuthenticated,
    }}>
      {children}
    </AuthContext.Provider>
  )

}
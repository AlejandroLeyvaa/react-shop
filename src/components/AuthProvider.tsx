import * as React from 'react';

import { AuthProvider } from "../config/context/AuthContext"

export const AuthState = ({ children }: any ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

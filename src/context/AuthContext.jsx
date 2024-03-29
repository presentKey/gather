import { createContext, useContext, useEffect, useState } from 'react';
import {
  googleLogin,
  googleRedirectResult,
  anonymouseLogin,
  onUserStateChange,
  logout,
} from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    googleRedirectResult();
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin,
        anonymouseLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

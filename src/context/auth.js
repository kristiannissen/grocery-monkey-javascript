/**
 *
 */
import { createContext, useContext } from "react";

export const AuthState = {
  token: "",
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContext = createContext(AuthState);

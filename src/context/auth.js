/**
 *
 */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Navigate } from "react-router-dom";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  let _token = localStorage.getItem("token");
  const [token, setToken] = useState(_token);
  console.log("AuthProvider: ", token);

  const signin = useCallback(async (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  }, []);

  const val = { token, signin };

  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};

export const RequireAuth = ({ element }) => {
  const auth = useAuth();
  console.log("RequireAuth: ", auth);

  if (auth.token === null) {
    return <Navigate to="/signin" />;
  }

  return element;
};

export const AuthContext = createContext(null);

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
  let [token, setToken] = useState(null);

  let signin = useCallback(
    async (t) => {
      localStorage.setItem("token", t);
      setToken(t);
    },
    [token]
  );

  let getToken = useCallback(() => {
    let _t = localStorage.getItem("token");
    return _t;
  }, [token]);

  let hasToken = useCallback(() => {
    return token !== null ? true : false;
  }, [token]);

  let signout = useCallback(async () => {
    console.log("sign out");
  }, []);

  let val = { getToken, hasToken, signin, signout };

  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};

export const RequireAuth = ({ element }) => {
  const auth = useAuth();

  if (!auth.hasToken()) {
    return <Navigate to="/signin" />;
  }

  return element;
};

export const AuthContext = createContext(null);

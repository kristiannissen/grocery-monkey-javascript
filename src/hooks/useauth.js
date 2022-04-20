/**
 *
 */
import { useState, useEffect, useCallback } from "react";

const useAuth = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    let t = localStorage.getItem("token");
    if (t) {
      console.log("useAuth effect: ", t);
      setToken(t);
    }
  }, []);

  const signin = useCallback(async (t) => {
    localStorage.setItem("token", t);
    setToken(t);
  }, []);

  const signout = useCallback(async () => console.log("Hello"), []);

  const getToken = useCallback(async () => {
    return token;
  }, [token]);

  const hasToken = useCallback(() => {
    console.log("useAuth has token: ", token);
    return token !== "" ? true : false;
  }, [token]);

  return { getToken, hasToken, signin, signout };
};

export default useAuth;

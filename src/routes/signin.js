/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../context/auth";

const Signin = () => {
  const [token, setToken] = useState("");
  const auth = useAuth();
  let navigate = useNavigate();

  useEffect(() => {}, [token]);

  const handleClick = (evnt) => {
    let _t = new Date().getTime().toString();
    setToken(_t);
    auth.signin(_t).then(() => navigate("/"));
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Signin</button>
    </div>
  );
};

export default Signin;

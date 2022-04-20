/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [token, setToken] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    console.log("Signin: ", token);
  }, [token]);

  const handleClick = (evnt) => {
    let _t = new Date().getTime().toString();
    console.log("signin token: ", _t);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Signin</button>
    </div>
  );
};

export default Signin;

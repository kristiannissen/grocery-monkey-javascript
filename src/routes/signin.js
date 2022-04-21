/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../context/auth";

import "./signin.css";

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
    <div className="form__container card">
      <form>
        <div className="form__group">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="form__group">
          <label>Username</label>
          <input type="password" name="password" />
        </div>
        <div className="form__group btn__group">
          <button className="btn__primary" onClick={() => handleClick()}>
            Submit
          </button>
          <button className="btn__secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;

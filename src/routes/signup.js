/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./../context/auth";

import "./signin.css";

const Signup = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    terms: false,
  });
  const auth = useAuth();
  let navigate = useNavigate();

  useEffect(() => {}, [token]);

  const handleClick = (evnt) => {
    let _t = new Date().getTime().toString();
    setToken(_t);
    auth.signin(_t).then(() => navigate("/"));
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let entry = { [name]: value };
    setUser({ ...user, ...entry });
  };

  return (
    <div className="form__container card">
      <form>
        <div className="form__group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value={user.terms}
              onChange={(e) => handleChange(e)}
            />
            Terms
          </label>
        </div>
        <div className="form__group btn__group">
          <button className="btn__primary" onClick={() => handleClick()}>
            Submit
          </button>
          <button className="btn__secondary">Cancel</button>
        </div>
        <div className="form__group form__group_helpertext">
          <Link to="/signin">Signin</Link> if you have an account!
        </div>
      </form>
    </div>
  );
};

export default Signup;

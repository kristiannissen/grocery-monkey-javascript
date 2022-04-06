/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Custom components
import Toast from "../components/toast";
import { useAuth } from "../context/auth";
import { helpFetch } from "../helpers/";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");
  const auth = useAuth();

  let navigate = useNavigate();

  useEffect(() => {
    if (message !== "") showToast(true);
  }, [message]);

  const changeUsername = (event) => setUsername(event.target.value);

  const hideToast = () => showToast(false);

  const authenticate = () => {
    // Build request body
    let user = {
      username: username,
    };
    // Post the username to get a jwt token
    helpFetch("authenticate", "POST", user)
      .then((resp) => {
        localStorage.setItem("token", resp.token);
        localStorage.setItem("useruuid", resp.useruuid);

        auth.signin(resp.token);
        navigate("/groceries");
      })
      .catch((err) => setMessage(err.message));
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm content-center">
        <div className="form_group">
          <label htmlFor="username" className="field__label">
            Username
          </label>
          <input
            type="text"
            className="field__text"
            id="username"
            name="user_name"
            value={username}
            onChange={changeUsername}
          />
        </div>
        <div className="form_group">
          <button type="submit" className="btn-primary" onClick={authenticate}>
            Submit
          </button>
        </div>
      </div>
      <Toast show={toast} message={message} onHide={hideToast} />
    </div>
  );
};

export default Signin;

/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Custom components
import Toast from "../components/toast";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("");
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
    fetch(`${process.env.REACT_APP_DOMAIN}/authenticate`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Store the user
        if (data.token === "") {
          setMessage("Invalid token");
        } else {
          // Save token
          localStorage.setItem("token", data.token);
          localStorage.setItem("useruuid", data.uuid);
          // Redirect user
          navigate("/groceries");
        }
      })
      .catch((error) => setMessage("Unable to sign in!"));
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

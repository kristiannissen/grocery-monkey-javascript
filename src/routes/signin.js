/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  useEffect(() => {}, []);
  const changeUsername = (event) => setUsername(event.target.value);

  const authenticate = () => {
    // Build form
    let fD = new FormData();
    fD.append("user_name", username.trim());
    // Post the username to get a jwt token
    fetch("http://localhost:3001/sign", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: fD,
    })
      .then((response) => response.json())
      .then((data) => {
        // Store the token
        localStorage.setItem("_token", data.token);
        // Redirect user
        navigate("/groceries");
      });
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <div className="mb-6">
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          type="text"
          className="input-field__text"
          id="username"
          value={username}
          onChange={changeUsername}
        />
      </div>
      <button type="submit" className="btn-primary" onClick={authenticate}>
        Submit
      </button>
    </div>
  );
};

export default Signin;

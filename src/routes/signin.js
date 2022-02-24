/**
 * @file Signin
 *
 */
import React, { useEffect, useState } from "react";

const Signin = () => {
    const [username, setUsername] = useState("")  

    useEffect(() => {
        console.log(username)
    }, [])
    const changeUsername = event => setUsername(event.target.value)

    const authenticate = () => {
        // Build form
        let fD = new FormData()
        fD.append("username", username.trim())
        // Post the username to get a jwt token
        fetch("https://grocery-monkey.herokuapp.com/sign", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: fD
        }).then(response => response.json()).then(data => console.log(data))
    }

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

/**
 *
 */
import { render } from "react-dom";
import React, { useEffect } from "react";
import "./styles/index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Groceries from "./routes/groceries";
import Signin from "./routes/signin";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="min-w-full px-2">
      <React.StrictMode>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groceries" element={<Groceries />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </div>
        </BrowserRouter>
      </React.StrictMode>
      <div id="toast" className="min-w-full" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

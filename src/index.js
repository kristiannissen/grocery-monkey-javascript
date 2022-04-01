/**
 *
 */
import { render } from "react-dom";
import React, { useEffect, useContext, useState } from "react";
import "./styles/index.css";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./routes/home";
import Groceries from "./routes/groceries";
import Signin from "./routes/signin";
import MealPlan from "./routes/mealplan";
import {AuthContext, AuthState} from "./context/auth"

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(AuthState)
  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}
const useAuth = () => {
  return useContext(AuthContext)
}

const RequireAuth = ({children}) => {
  const [auth] = useAuth()
  let navigate = useNavigate()

  useEffect(() => {
    if (auth.hasToken !== true) {
      navigate("/signin")
    }
  })

  return children
}

const App = () => {

  useEffect(() => {
  }, []);

  return (
    <div className="min-w-full px-2">
      <React.StrictMode>
        <BrowserRouter>
          <div className="container">
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/groceries" element={<RequireAuth><Groceries /></RequireAuth>} />
                <Route path="/mealplan" element={<RequireAuth><MealPlan /></RequireAuth>} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </AuthProvider>
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
// serviceWorkerRegistration.register();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js", { scope: "/groceries" })
    .then((reg) => console.log("SW running"));

  navigator.serviceWorker.ready.then((reg) => {
    reg.sync.getTags().then((tag) => {
      console.log("sync", tag);
    });
  });
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

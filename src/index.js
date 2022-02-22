/**
 *
 */
import {render} from "react-dom";
import React from "react";
import "./styles/index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import ListPage from "./routes/listpage";
import ItemForm from "./routes/itemform";

render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/grocery/new" element={<ItemForm />} />
            <Route path="/grocery/:id/edit" element={<ItemForm />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

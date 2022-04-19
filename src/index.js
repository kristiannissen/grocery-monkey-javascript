/**
 *
 */
import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import {BrowserRouter} from "react-router-dom";

import App from "./app";
import ErrorBoundary from "./errorboundary"

const elm = document.getElementById("app-root");
const root = createRoot(elm);

root.render(<ErrorBoundary><BrowserRouter><App /></BrowserRouter></ErrorBoundary>);

/**
 * Service Worker
 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
    .register("service-worker.js")
    .then((reg) => {
      console.log("SW reg: ", reg)
    }).catch((err) => console.log("SW reg error: ", err))
  })
}

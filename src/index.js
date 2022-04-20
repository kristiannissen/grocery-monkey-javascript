/**
 *
 */
import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { ShellContext, ShellState } from "./context/shell";

import App from "./app";
import ErrorBoundary from "./errorboundary";

import "./styles.css";

const elm = document.getElementById(window.ns.components.root);
const root = createRoot(elm);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ShellContext.Provider value={ShellState}>
        <App />
      </ShellContext.Provider>
    </BrowserRouter>
  </ErrorBoundary>
);

/**
 * Service Worker
 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((reg) => {
        // console.log("SW reg: ", reg);
      })
      .catch((err) => console.log("SW reg error: ", err));
  });
}

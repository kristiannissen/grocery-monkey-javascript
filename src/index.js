/**
 *
 */
import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { HashRouter } from "react-router-dom";
// TODO: add index.js to context/
import { ShellContext, ShellState } from "./context/shell";
import { AuthContext, AuthState, AuthProvider } from "./context/auth";

import App from "./app";
import ErrorBoundary from "./errorboundary";

import "./css/global.css";

const elm = document.getElementById(window.ns.components.root);
const root = createRoot(elm);

root.render(
  <ErrorBoundary>
    <HashRouter>
      <ShellContext.Provider value={ShellState}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ShellContext.Provider>
    </HashRouter>
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

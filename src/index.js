/**
 *
 */
import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";

import App from "./app";
import ErrorBounday from "./errorboundary"

const elm = document.getElementById("app-root");
const root = createRoot(elm);

root.render(<ErrorBoundary><App /></ErrorBoundary>);

/**
 *
 */

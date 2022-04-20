/**
 *
 */
import React from "react";

import { Navigate } from "react-router-dom";

const RequireAuth = ({ element }) => {
  console.log("RequireAuth");

  return element;
};

export default RequireAuth;

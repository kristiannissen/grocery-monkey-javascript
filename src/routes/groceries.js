/**
 * @file Groceries
 *
 */
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Groceries = () => {
  return (
    <div>
      <h1>Groceries</h1>
      <Outlet />
    </div>
  );
};

export default Groceries;

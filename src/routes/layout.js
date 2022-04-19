/**
 *
 *
 */
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>Hello</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

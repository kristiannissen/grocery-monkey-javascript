/**
 *
 *
 */
import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./layout.css";

import { Header } from "./../components/";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

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
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

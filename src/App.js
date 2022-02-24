/**
 *
 */
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/header";
// import './App.css';

const App = () => {
  return (
    <div className="">
      <Header title="Hello Kitty" />
      <Outlet />
    </div>
  );
};

export default App;

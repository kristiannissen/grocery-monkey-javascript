/**
 * Header component
 */
import React from "react";
import { createPortal } from "react-dom";

const Header = () => {
  const markup = () => {
    return (
      <header className="">
        <h1>Hello Kitty</h1>
      </header>
    );
  };

  return createPortal(markup(), document.getElementById("app__shell_header"));
};

export default Header;

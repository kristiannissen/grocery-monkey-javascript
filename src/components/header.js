/**
 * Header component
 */
import React from "react";

const Header = ({ title }) => {
  return (
    <header className="flex justify-center">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

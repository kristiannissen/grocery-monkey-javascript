/**
 * Header component
 */
import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useShell } from "./../context/shell";

import "./header.css";

const Header = () => {
  const shell = useShell();

  const markup = () => {
    return (
      <header className="header">
        <span className="header__title">Grocery Monkey</span>
        <nav className="header__nav">
          <Link to="/" className="header__nav_link">
            Home
          </Link>
          <Link to="/groceries" className="header__nav_link">
            Groceries
          </Link>
          <Link to="/mealplan" className="header__nav_link">
            Mealplan
          </Link>
        </nav>
      </header>
    );
  };

  return createPortal(markup(), document.getElementById(shell.header));
};

export default Header;

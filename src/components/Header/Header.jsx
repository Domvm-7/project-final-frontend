// Header.jsx

import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header__nav">
        <button className="header__button">Sign Up</button>
        <button className="header__button">Log In</button>
      </nav>
    </header>
  );
};

export default Header;

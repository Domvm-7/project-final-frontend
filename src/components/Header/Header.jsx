// Header.jsx

import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = ({ onRegisterClick, onLoginClick }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header__nav">
        <button className="header__button" onClick={onLoginClick}>
          Login
        </button>
        <button className="header__button" onClick={onRegisterClick}>
          Register
        </button>
      </nav>
    </header>
  );
};

export default Header;

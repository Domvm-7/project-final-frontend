// Header.jsx

import React from "react";
import "./Header.css";

const Header = ({ onCreateModal }) => {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img></img>
        </Link>
        <div>{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        {currentUser ? (
          <>
            <Link to="/profile" className="header__name">
              {currentUser.name}
            </Link>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
            )}
          </>
        ) : (
          <nav className="header__nav">
            <button
              className="header__button"
              onClick={() => onCreateModal("register")}
            >
              Sign Up
            </button>
            <button
              className="header__button"
              onClick={() => onCreateModal("login")}
            >
              Log In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

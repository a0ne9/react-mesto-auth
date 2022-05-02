import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import React from "react";

function Header(props) {
  const currentPath = useLocation();

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__link-container">
        <p className="header__mail">
          {currentPath.pathname === "/" ? props.email : ""}
        </p>
        <Link
          to={currentPath.pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
          className={currentPath.pathname === "/" ? "header__link header__link-logout" : "header__link"}
          onClick={props.onLogout}
        >
          {currentPath.pathname === "/sign-up"
            ? "Войти"
            : currentPath.pathname === "/"
            ? "Выйти"
            : "Регистрация"}
        </Link>
      </div>
    </header>
  );
}

export default Header;

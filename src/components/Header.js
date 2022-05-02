import { useLocation } from "react-router";
import React from "react";
import { useNavigate } from "react-router";

function Header(props) {

  const currentPath = useLocation();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__link-container">
        <p className="header__mail">
          {currentPath.pathname === "/" ? props.email : ""}
        </p>
        <button
          className={
            currentPath.pathname === "/"
              ? "header__link header__link-logout"
              : "header__link"
          }
          onClick={() => {
            if (currentPath.pathname === "/") {
              props.onLogout();
            } else if (currentPath.pathname === "/sign-in") {
              navigate("sign-up");
            } else {
              navigate("/sign-in");
            }
          }}
        >
          {currentPath.pathname === "/sign-up"
            ? "Войти"
            : currentPath.pathname === "/"
            ? "Выйти"
            : "Регистрация"}
        </button>
      </div>
    </header>
  );
}

export default Header;

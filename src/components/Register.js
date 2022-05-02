import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState(" ");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.onRegister({
      password,
      email
    });
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="popup__title login__title">Регистрация</h2>
        <input
          name="email"
          type="email"
          className="popup__input login__input"
          placeholder="Email"
          id="Email-field"
          minLength="2"
          maxLength="40"
          value={email || " "}
          onChange={handleEmailChange}
          required
        />
        <input
          name="password"
          type="password"
          className="popup__input login__input"
          placeholder="Пароль"
          id="password-field"
          minLength="2"
          maxLength="40"
          value={password || ""}
          onChange={handlePasswordChange}
          required
        />

        <button
          type="submit"
          className="popup__button login__button"
        >
          Зарегистрироваться
        </button>
        <Link className="login__link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;

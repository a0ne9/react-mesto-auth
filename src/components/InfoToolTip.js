import React from "react";
import successImage from "../vendor/images/Union.svg"
import  failureImage from "../vendor/images/cross.svg"

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_type_toolTip ${
        props.isOpen && props.onClose && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <img className="popup__image" src={props.message? successImage : failureImage} alt="Получилось/не получилось"/>
        <h2 className="popup__title">{props.message? "Вы успешно зарегистрировались!": "Что-то пошло не так!\n" +
          "Попробуйте ещё раз."}</h2>
          <button
            className="popup__close-button close-button"
            type="button"
            onClick={props.onClose}
          ></button>
      </div>
    </div>
  );
}

export default InfoToolTip
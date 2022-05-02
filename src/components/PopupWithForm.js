import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && props.onClose && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={`${props.name}-changer`}
          onSubmit={props.onSubmit}
        >
          <button
            className="popup__close-button close-button"
            type="button"
            onClick={props.onClose}
        ></button>
          {props.children}
          <button type="submit" className="popup__button">
            {props.buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

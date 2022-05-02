import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState(" ");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  const [description, setDescription] = React.useState(" ");

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonTitle="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        className="popup__input"
        placeholder="Имя"
        id="name-field"
        minLength="2"
        maxLength="40"
        value={name || " "}
        onChange={handleNameChange}
        required
      />
      <span className="popup__input-error name-field-error"></span>
      <input
        name="caption"
        type="text"
        className="popup__input"
        placeholder="О себе"
        id="job-field"
        minLength="2"
        maxLength="200"
        value={description || " "}
        onChange={handleDescriptionChange}
        required
      />
      <span className="popup__input-error job-field-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const [title, setTitle] = React.useState("");
  const [src, setSrc] = React.useState("");

  function handleNameChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setSrc(e.target.value);
  }

  React.useEffect(() => {
    if (!props.isOpen) {
      setSrc("")
      setTitle("")
    }
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: title,
      link: src,
    });
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonTitle="Создать"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        className="popup__input"
        placeholder="Название"
        id="title-field"
        minLength="2"
        maxLength="30"
        value={title || ""}
        onChange={handleNameChange}
        required
      />
      <span className="popup__input-error title-field-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input"
        placeholder="Ссылка на картинку"
        id="link-field"
        value={src || ""}
        onChange={handleLinkChange}
        required
      />
      <span className="popup__input-error link-field-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

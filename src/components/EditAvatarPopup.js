import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    if (!props.isOpen) {
      avatarRef.current.value = ' '
    }
  },[props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonTitle="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        name="avatar"
        type="url"
        className="popup__input"
        placeholder="Ссылка на картинку"
        id="avatar-field"
        ref={avatarRef}
        required
      />
      <span className="popup__input-error avatar-field-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

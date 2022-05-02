function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${props.card.name && "popup_opened"}`}
      style={{
        background: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div className="popup__image-container">
        <img className="popup__img" alt=" " src={props.card.link} />
        <h2 className="popup__caption">{props.card.name}</h2>
        <button
          type="button"
          className="popup__close-button close-button"
          onClick={props.onClose}

        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;

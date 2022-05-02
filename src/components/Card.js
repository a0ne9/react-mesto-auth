import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `cards__delete-button ${
    isOwn ? "cards__delete-button_visible" : "cards__delete-button_hidden"
  }`;

  const cardLikeButtonClassName = `${
      isLiked ? "cards__like-button_active" : "cards__like-__button"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <div className="cards__list-item">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="cards__image"
        alt=" "
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="cards__caption">
        <h2 className="cards__title">{props.card.name}</h2>
        <div className="cards__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <span className="cards__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

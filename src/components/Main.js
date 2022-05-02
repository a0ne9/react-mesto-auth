import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Аватарка"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__caption">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <div className="cards__list">
          {props.cards.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
              card={card}
              key={card._id}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;

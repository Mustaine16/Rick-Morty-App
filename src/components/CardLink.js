import React from 'react';

export default function Card({ item, type, handleOpenModal }) {
  const { name, image, id } = item
  return (
    <li
      tabIndex="0"
      className="cardList__item"
      onKeyUp={(e) => handleOpenModal({ e, id, type })}
      onClick={() => handleOpenModal({ id, type })}
    >
      <h2 className="cardList__item--title">{name}</h2>
      {image && <img
        src={image}
        alt={name}
        loading="lazy"
        className="cardList__item--img"
      />}
    </li>
  )
}
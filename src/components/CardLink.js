import React from 'react';
import { Link } from "react-router-dom"

export default function Card({ item, type, modalIsOpen, handleOpenModal }) {
  const { name, image, id } = item
  return (
    <li
      tabIndex="0"
      className="cardList__item"
      onKeyUp={(e) => handleOpenModal(e)}
      onClick={() => handleOpenModal()}
    >
      <h2 className="cardList__item--title">{name}</h2>
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="cardList__item--img"
      />
    </li>
  )
}
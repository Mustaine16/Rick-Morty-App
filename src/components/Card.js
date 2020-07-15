import React from 'react';
import { Link } from "react-router-dom"

export default function Card({ item, type }) {
  const { name, image, id } = item
  return (
    <li className="cardList__item">
      <Link to={`/${type}/${id}`} className="cardList__item--link">
        <h2 className="cardList__item--title">{name}</h2>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="cardList__item--img"
        />
      </Link>
    </li>
  )
}
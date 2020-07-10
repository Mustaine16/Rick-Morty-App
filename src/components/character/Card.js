import React from 'react';
import { Link } from "react-router-dom"

export default function Card({ character }) {
  const { name, image, id } = character
  return (
    <li>
      <Link to={`/character/${id}`} className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} loading="lazy" />
    </Link>
      </li>

  )
}
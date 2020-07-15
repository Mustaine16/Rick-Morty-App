import React from 'react';
import { Link } from "react-router-dom"

export default function Card({ item, type }) {
  const { name, image, id } = item
  return (
    <li>
      <Link to={`/${type}/${id}`} className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} loading="lazy" />
      </Link>
    </li>
  )
}
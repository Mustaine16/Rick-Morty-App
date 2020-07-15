import React from 'react';
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="home">
      <ul className="homeList">
        <li><Link to="/characters" className="homeList__link">Characters</Link></li>
        <li><Link to="/episodes" className="homeList__link">Episodes</Link></li>
        <li><Link to="/locations" className="homeList__link">Locations</Link></li>
      </ul>
    </main>
  )
}


export default Home
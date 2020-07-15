import React from 'react';

import CardList from "../components/CardList"

const CharactersList = () => {

  const API_URL = "https://rickandmortyapi.com/api/character/"

  return <CardList url={API_URL} type="character" name={"Characters"} />

}

export default CharactersList
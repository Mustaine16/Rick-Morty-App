import React from 'react';

import CardList from "../components/CardList"

const EpisodesList = () => {

  const API_URL = "https://rickandmortyapi.com/api/episode/"

  return <CardList url={API_URL} type="episode" name="Episodes"/>

}

export default EpisodesList
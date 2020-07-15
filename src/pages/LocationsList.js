import React from 'react';

import CardList from "../components/CardList"

const EpisodesList = () => {

  const API_URL = "https://rickandmortyapi.com/api/location/"

  return <CardList url={API_URL} type="location" name="Locations" />

}

export default EpisodesList
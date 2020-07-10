import React, { useState, useEffect } from 'react';

import Card from "./Card"

import fetchData from "../../utils/fetchData"


const CharactersContainer = () => {

  const [state, setState] = useState({})
  const API_URL = 'https://rickandmortyapi.com/api/character/'

  useEffect(() => {
    fetchCharacters();
  }, [])

  async function fetchCharacters(url = API_URL) {
    const data = await fetchData(url)
    setState({
      ...state,
      ...data,
      results: [
        ...state.results || "",
        ...data.results
      ]
    })
    console.log(data);
  }

  const handleFetchButton = () => {
    const nextUrl = state.info.next
    fetchCharacters(nextUrl)
  }

  if (!state) return "LOADING"

  return (
    <main >
      <h1 >Characters</h1>
      <ul className="cards-container">
        {state?.results?.map(ch => <Card character={ch} key={ch.id + ch.name} />)}
      </ul>
      {state?.info?.next && <button onClick={handleFetchButton}>More...</button>}
    </main>
  )

}

export default CharactersContainer
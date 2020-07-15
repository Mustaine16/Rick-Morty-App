import React from 'react';

import useFetchAPI from "../hooks/useFetchAPI"

import Card from "./Card"


const CardList = ({name, type, url}) => {

  const { state, handleFetchButton } = useFetchAPI(url);

  if (!state.results) return "LOADING"

  return (
    <main >
      <h1 >{name}</h1>
      <ul className="cardList" aria-label={`${name} list`}>
        {state?.results?.map(ch => <Card item={ch} type={type} key={ch.id + ch.name} />)}
      </ul>
      {state?.info?.next && <button onClick={handleFetchButton}>More...</button>}
    </main>
  )

}

export default CardList
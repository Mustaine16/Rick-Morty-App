import React, { useEffect } from 'react';

import useFetchAPI from "../hooks/useFetchAPI"

import CardLink from "./CardLink"
import CharacterPortal from "../components/CharacterPortal"
import usePortal from "../hooks/usePortal"

const CardList = ({ name, type, url }) => {

  const { state, handleFetchButton } = useFetchAPI(url);
  const {modalIsOpen, setModalIsOpen, handleOpenModal} = usePortal()
  
  useEffect(()=>{console.log(modalIsOpen);},[modalIsOpen])

  if (!state.results) return "LOADING"

  return (
    <main >
      <h1 >{name}</h1>
      <ul className="cardList" aria-label={`${name} list`}>
        {
          state?.results?.map(ch => (

            <CardLink
              item={ch}
              type={type}
              key={ch.id + ch.name}
              modalIsOpen={modalIsOpen}
              handleOpenModal={handleOpenModal}
            />

          ))
        }
      </ul>

      {/* Modal */}
      {modalIsOpen && <CharacterPortal />}

      {/* Load Button */}
      {state?.info?.next && <button onClick={handleFetchButton}>Load More...</button>}
      
    </main>
  )

}

export default CardList
import React, { useEffect } from 'react';

import useFetchAPI from "../hooks/useFetchAPI"
import usePortal from "../hooks/usePortal"

import Loader from "./Loader"
import CardLink from "./CardLink"
import CharacterPortal from "../components/CharacterPortal"

const CardList = ({ name, type, url }) => {

  const { state, handleFetchButton } = useFetchAPI(url, "API");
  const { data, loading, modalIsOpen, handleOpenModal, handleCloseModal, } = usePortal()

  useEffect(() => () => handleCloseModal(), [])//Close modal when component unmount

  if (!state.results) return <main><Loader /></main>

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
      {modalIsOpen && <CharacterPortal character={data} loading={loading} handleCloseModal={handleCloseModal} />}

      {/* Load Button */}
      {state?.info?.next && <button onClick={handleFetchButton}>Load More...</button>}

    </main>
  )

}

export default CardList
import React, { useRef, useEffect } from 'react';

import Portal from "./Portal"
import Loader from "./Loader"

const CharacterPortal = ({ character, loading, handleCloseModal }) => {

  const portalRef = useRef()
  const closePortalButton = useRef()


  useEffect(() => {

    document.addEventListener("keydown", handleCloseModal)

    //Hide scrollBar
    portalRef.current.classList.add("portal__open")
    closePortalButton.current.focus();
    const overflowTimeOut = setTimeout(() => {
      document.body.style.overflow = "hidden"
    }, 350);

    //Clear timeOut and remove the Escape listener
    return () => {
      clearTimeout(overflowTimeOut)
      document.removeEventListener("keydown", handleCloseModal)
    }
  }, [])

  // LOADER
  if (loading) return (
    <Portal>
      <div className="portal" ref={portalRef}>
        <Loader />
      </div>
    </Portal>
  )

  const { id, type, name, species, location, image, status } = character


  // PORTAL
  return (
    <Portal>
      <div className="portal" ref={portalRef}>
        <section className="portal__info">
          <h2 className="portal__title">
            {name}
          </h2>
          <p className="portal__info--dimension">#{id}</p>
          <img src={image} alt={name} />
          {type && <p>Type: {type}</p>}
          {status && <p>Status: {status}</p>}
          {species && <p>Species: {species}</p>}
          {location && <p>Dimension: {location?.name}</p>}
        </section>
        <button ref={closePortalButton} tabIndex="0" onClick={() => handleCloseModal()}>Close</button>
      </div>
    </Portal>
  )
}

export default CharacterPortal
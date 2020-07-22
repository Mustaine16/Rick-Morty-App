import { useState } from 'react';
import useFetchAPI from "../hooks/useFetchAPI"
import { useEffect } from 'react';

const usePortal = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [itemData, setitemDataState] = useState({ id: "", type: "" })
  const [ITEM_URL, setITEM_URL] = useState("")
  const { state, loading } = useFetchAPI(ITEM_URL, "CHARACTER")
  const data = state

  //Fetch API when modal is open
  useEffect(() => {
    if (modalIsOpen) {

      const {type, id} = itemData
      const API_URL = `https://rickandmortyapi.com/api/${type}/${id}`
      setITEM_URL(API_URL)

    }
  }, [modalIsOpen])

  const handleOpenModal = ({ e = null, id = null, type = null }) => {
    
    //Handle the Enter Key
    if (e && e.keyCode !== 13) return null

    setitemDataState({ id, type })
    setModalIsOpen(true)

  }

  const handleCloseModal = (e = null) => {
    //Handle Escape Key
    console.log("KeyCode: ", e && e.keyCode);
    if (e && e.keyCode !== 27) return null
    setModalIsOpen(false)

    //Hide scrollBar
    document.body.style.overflow = ""
    document.querySelector("#portal").classList.remove("portal__open")
  }

  return { data, loading, modalIsOpen, setModalIsOpen, handleOpenModal, handleCloseModal }

}

export default usePortal


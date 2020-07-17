import {useState} from 'react';

const usePortal = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = (e = null) => {

    //Handle the Enter Key
    if (e && e.keyCode != 13) return null

    setModalIsOpen(!modalIsOpen)
  }

  return { modalIsOpen, setModalIsOpen, handleOpenModal }

}

export default usePortal


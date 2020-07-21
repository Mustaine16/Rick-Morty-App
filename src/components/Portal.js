import ReactDOM from "react-dom"

const Portal = (props) => {

  // useEffect(()=>{document.body.style.overflow= "hidden"},[])

  return (
    ReactDOM.createPortal(
      props.children,
      document.getElementById("portal")
    )
  )
}




export default Portal 
import { useState } from 'react'





const PopUp = ({id,name, deleteItemFunction}) => {
    const [showPopUp,setShowPopUp] = useState(false)
    const handlerPopUp = () => {
        setShowPopUp(!showPopUp)
    }
    return (
        <li key={id}> {name} 
        <button onClick={()=> handlerPopUp(id)} >
        Delete
        </button> 
      {showPopUp && <div> Seguro Quieres Eliminar Criatura de Dios ? <button onClick={() => {deleteItemFunction(id)}} >Yes</button>  <button onClick={handlerPopUp} >NO</button> </div> }
      
      </li> 
    )
}

export default PopUp
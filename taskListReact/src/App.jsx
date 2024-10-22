import { useState } from 'react'

import './App.css'
import PopUp from './PopUp'

function App() {
  const [counter, setCounter] = useState(0)
  const [tasks,setTask] = useState([])
  const [inputValue,setInputValue] = useState('')
  
  
  const handlerTaskInput = (e)=> {
    setInputValue(e.target.value)  
  }
  
  const handlerTaskAdd = (e)=> {
   
   
    if(e === 'Enter' || e.type === 'click') {
      const newTaskObject = {
        id: crypto.randomUUID(),
        name : inputValue.trim()
      }
      setTask(prevValue => [
        ...prevValue,
        newTaskObject
      ])
      setCounter(tasks.length + 1)
      setInputValue('')
    }
    
    
  }
  
  const deleteItem = (id) => {   
    setTask(prevValue => prevValue.filter(value => value.id !== id))
    tasks.length < 1 ? setCounter(0) : setCounter(tasks.length - 1)
    
  }

  
  return (
    <>
    <h1>{counter}</h1>
    <label htmlFor='inputTask' >Task input </label>
    <input type='text' placeholder='add a task' id='inputTask' value={inputValue} onChange={handlerTaskInput}   onKeyDown={(e) => handlerTaskAdd(e.key) } ></input>
    <button onClick={handlerTaskAdd} >Add Task</button>
     <ul  id='taskContainer'>
      {tasks.map(task => <PopUp key={task.id} name={task.name} deleteItemFunction={deleteItem} />  )}
     </ul>
     
    </>
  )
}

export default App

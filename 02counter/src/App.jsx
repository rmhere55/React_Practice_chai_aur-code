import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
  let [counter, setCounter] = useState(15)
  
  
   const addValue =()=>{
  // counter = counter+1
  setCounter(counter+1)
  }  
  
   const removeValue =()=>{
  // counter = counter+1
  setCounter(counter-1)
  }  
  return (
    <>

    <h1> chai or code</h1>
    <h2>counter value :{counter}</h2>

    <button onClick={addValue}>add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>  
    </>
  )
}

export default App

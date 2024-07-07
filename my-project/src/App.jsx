// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  // const [count, setCount] = useState(0)
  let myobj = {
    username:"rm",
    age:22
  }

  // let  arr = [1,2,3]


  return (
    <>
    <h1 className='bg-green-400 text-black  p-4  rounded-md mb-4'>Tailwind test </h1>
    
<Cards username = "chaiaurcode" someobj = {myobj}/> 
<Cards username ="rm"  btnText ="vist me"/> 
    </>
  )
}

export default App

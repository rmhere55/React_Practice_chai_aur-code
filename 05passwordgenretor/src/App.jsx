
import { useState , useCallback, useEffect  ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
 const [numberAllowed, setnumberallowed] = useState(false)
 const [charAllowed, setcharallowed] = useState(false)
 const [password, setpassword] = useState("")
//  useRef hook
const passwordRef = useRef(null)
 const passwordGenretor = useCallback(() =>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*-=~'{[]}()"
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)

    
  }
  setpassword(pass)
  


 } , [length , numberAllowed , charAllowed ,setpassword])
 
const copypasswordtoclipborad= useCallback(()=>{
  window.navigator.clipboard.writeText(password )
},[password])


 useEffect(() =>{ passwordGenretor()

 },[length , numberAllowed , charAllowed , passwordGenretor])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-green-700'>
    <h2 className='text-4xl text-white  text-center my-3'>Password Genretor</h2>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
        <button onClick={copypasswordtoclipborad} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' > copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
    <div className=' flex items-center gap-x-1'>
      <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e) =>{setlength(e.target.value)}}/>
      <label >Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" checked={numberAllowed} id='numberInput' onChange={() =>{setnumberallowed((prev)=>!prev)}}/>
      <label htmlFor='numberInput' >Number</label>

    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" checked={charAllowed} id='characterInput' onChange={() =>{setcharallowed((prev)=>!prev)}}/>
      <label htmlFor='characterInput'>Character</label>

    </div>
    
    </div>
      
    </div>
    </>
  )
}

export default App

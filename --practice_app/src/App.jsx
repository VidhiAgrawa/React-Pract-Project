import { useState } from 'react'
import './App.css'

function App() {
  const [change, setChange] = useState("red")

  return (
    <>
      <div className='colors'>
        <input type="color" className='inpt' onChange={(e) => setChange(e.target.value)} />
        <div className='colourBox' style = {{background: change}} ></div>
      </div>
    </>
  )
}

export default App

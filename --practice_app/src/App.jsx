import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let count = 0
  useEffect(() => {
    console.log(count)
    count++
  }, [])
  const [change, setChange] = useState("red")
  
  return (
    <>
      <div className='colors'>
        <input type="color" className='inpt' onChange={(e) => setChange(e.target.value)} />
        <button onClick={() => console.log(count)}>count</button>
        <div className='colourBox' style = {{background: change}} >{count}</div>
      </div>
    </>
  )
}

export default App

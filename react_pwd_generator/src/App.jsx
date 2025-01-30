import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [Passtatus, setPasstatus] = useState(false)
  const [ value , setValue ] = useState(null)
  useEffect( () => {
    console.log(value)
  } , [value] )
  return (
    <>
      <div className = "App">
        <input className = "inpt" value={value} onChange={ (e) => setValue(e.target.value) } type = {( Passtatus ) ? 'text' : 'password' }/>
        <button className = "butn" onClick={() => {
          ( value == null ) ? alert("Input is null") : null
            setPasstatus(!Passtatus)
          }}>
          {(Passtatus) ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  )
}

export default App

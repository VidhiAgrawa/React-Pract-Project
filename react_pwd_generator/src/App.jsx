import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Passtatus, setPasstatus] = useState(false)
  return (
    <>
      <div className = "App">
        <input className = "inpt" type = {( Passtatus ) ? 'text' : 'password' }  />
        <button className = "butn" onClick={() => setPasstatus(!Passtatus)}>
          {(Passtatus) ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  )
}

export default App

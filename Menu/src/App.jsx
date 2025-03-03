import { useState } from 'react'
import './App.css'

function App() {

  let[display, setDisplay] = useState(false)

  return (
    <>

      <button onClick= {() => setDisplay( !display )} >&#9776;</button>
      <div className='menuDiv'>
        <div className={ (display) ? "divBox" : "hide" }>
          <p>Home</p>
          <p>Profile</p>
          <p>About us</p>
          <p>Sign in </p>
          <p>Log in</p>
          <p>Blahh blahh!</p>
        </div>
        
      </div>
    </>
  )
}

export default App

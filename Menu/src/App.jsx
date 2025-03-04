import { useState } from 'react'
import './App.css'

function App() {

  let[display, setDisplay] = useState(false)

  return (
    <>
      <h1 className='click'>Click on btn</h1>
      <button onClick= {() => setDisplay( !display )} >&#9776;</button>
      <div className='menuDiv'>
        <div className={ (display) ? "divBox" : "hide" }>
          <p><i class="fa-solid fa-cubes icon"></i>The App</p>
          <p><i class="fa-solid fa-house icon"></i> Home</p>
          <p><i class="fa-solid fa-magnifying-glass icon"></i>Search</p>
          <p><i class="fa-solid fa-lightbulb icon"></i>Insights</p>
          <p><i class="fa-solid fa-file icon"></i>Docs</p>
          <p><i class="fa-solid fa-id-card icon"></i>About us</p>
          <p><i class="fa-solid fa-right-to-bracket icon"></i>Sign in</p>
          <p><i class="fa-solid fa-user icon"></i>Log in</p>
          <hr/>
          <p><i class="fa-solid fa-circle-user icon"></i>Profile</p>
          <p><i class="fa-solid fa-gear icon"></i>Setting</p>
        </div>
        
      </div>
    </>
  )
}

export default App

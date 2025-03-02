import { useState } from 'react'
import './App.css'
import Comp from './Comp'



function App() {

  let[button, setButtonModel] = useState(false)
  // let[hideBtn, setHideBtn] = useState( false )

  return (
    <>
      <button className='enquiry' onClick={ () => setButtonModel( !button ) }>Enquiry Now</button>
      <div className="en">
        { button && <Comp/>  }
      </div>
      {/* { !hidebtn && <Comp/> } */}

    </>
  )
}

export default App

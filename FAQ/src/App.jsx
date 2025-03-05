import Api from './Data/Api.jsx'
import './App.css'
import { useState } from 'react'
console.log(Api)
function App() {

  let [ans, setAnswer] = useState( Api[0].id )

  return (
    <>
    
      <h1 className='heading'>FAQ Questions</h1>
      <div className="faqDiv">
        { Api.map(( each ) => (
          <>
            <div className="faqContent" onClick={ () => setAnswer( each.id ) }>
              <p>{ each.question }</p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className={ ans == each.id ? 'showDiv' : 'divAns' }>
              <span id='divvydiv'>{ each.answer }</span>
            </div>
          </>
        )
       )}

      </div>
    </>
  )
}

export default App

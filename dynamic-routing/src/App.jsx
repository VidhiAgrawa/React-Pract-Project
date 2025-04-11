import { useState } from 'react'
import './App.css'
import { data } from './Data/Data'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <main>
        <div className="app-data">
          {
            data.map( (v, i) => {
              return(
                <div className="data-content" key={i}>
                  <div className="id">{v.id}</div>
                  <div className="name">{v.name}</div>
                  <div className="username">
                    <Link to={`/app/${v.id}`}>
                      <button>{v.username}</button> 
                    </Link> 
                  </div>

                </div>
              )
            } )
          }
        </div>
      </main>
    </>
  )
}

export default App

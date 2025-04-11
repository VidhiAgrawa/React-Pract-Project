import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Details from '../Details.jsx'
function Router() {
  return (
    <>
        <Routes>
            <Route path='/app' element={<App/>}></Route>
            <Route path='app/:id' element={<Details/>}></Route>
        </Routes>
    </>
  )
}

export default Router
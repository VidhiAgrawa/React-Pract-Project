import React, { useState } from 'react'
import './App.css'

function App() {
  
  let[length, setLength] = useState(8)
  const [ special_characters , setSpecialCharacter ] = useState(false)
  const [ numbers , setNumbers ] = useState(false)
  const[uppercase , setUppercase] = useState(false)
  const[lowercase , setLowercase] = useState(false)
  
  const [ password , setPassword ] = useState("")
  
  const generateRandomPass = ( length ) => {

    if( !uppercase && !lowercase && !special_characters && !numbers ) return alert("Hello bete barat me aaya hai kya... ek option select kr chup chap")

    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower = 'abcdefighijklmnopqrstuvwxyx'
    let special = '~!@#$%^&*_-?'
    const num = "0123456789"

    let str = ""

    if( special_characters ) str += special
    if( uppercase ) str += upper 
    if( lowercase ) str += lower
    if( numbers ) str += num
    
    let pass = ""
    for (let i = 0; i < length; i++) {
      pass += (str.charAt(Math.floor(Math.random() * str.length)))
    }
    setPassword(pass)
  }


  return (
    <>
      <div className = "App">
        <input className = "inpt" style={ { "width" : "100%" } } readOnly value = {password} />
        <div>
          <input type = 'checkbox' 
            value = {special_characters} 
            onChange = { () => setSpecialCharacter(!special_characters)
          }/>Special<br/>
          
          <input type = 'checkbox' 
            value = {uppercase} 
            onChange = { () => setUppercase(!uppercase) } />uppercase<br/>
          
          <input type = 'checkbox' 
            value = {lowercase} 
            onChange ={() => setLowercase(!lowercase)}/>lowercase<br/>

          <input type = 'checkbox' 
          value = {numbers} 
          onChange ={() => setNumbers(!numbers)}/>number<br/>
          
        </div>

        <label>{length}</label>
        <input type = 'range' min={8} max={50} value = {length} onChange={(e) => setLength(()=>Number(e.target.value))} />

        <button className = "butn" onClick={() => { 
          generateRandomPass(length)
        }}>
          Generate
        </button>
        
      </div>
    </>
  )
}

export default App

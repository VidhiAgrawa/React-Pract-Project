import React from 'react'
import "../App.css";
function Heading(props) {
  return (
    <div>
      <div className="kd">
        <h4>{props.name} <br></br> {props.name2}</h4>
        <h3><br></br>{props.user}</h3>
        
      </div>
    </div>
  )
}

export default Heading

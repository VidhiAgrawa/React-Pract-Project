import React from 'react'
import "../App.css";
function Heading(props) {
  return (
    <div>
      <div className="kd">
        <h4>{props.name}</h4><br></br>
        <h3>{props.name2}</h3>
      </div>
    </div>
  )
}

export default Heading

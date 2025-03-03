import React, { useState } from 'react'
import './App.css'

function Comp() {

    let[hideBtn, setHideBtn] = useState(false)


  return (
    <>
        <div className='mainDiv'>
            <div className={ (!hideBtn) ? "box" : "box hide" }>
                <input type="text" placeholder='Username'></input>
                <input type="password" placeholder='Password'></input>
                <input
                type="tel"
                maxLength="10"
                onInput={(e) =>
                    /\D/.test(e.target.value)
                    ? (alert("Enter the correct Numeric values"), (e.target.value = e.target.value.replace(/\D/g, "")))
                    : e.target.value
                }
                placeholder="Phone Number"
                />
                <button className="submit"  onClick={ () => {
                    setTimeout( () => {
                        setHideBtn(true)
                    }, 1000 )
                } }
                >Submit</button>
            </div>
        </div>
    </>
  )
}

export default Comp
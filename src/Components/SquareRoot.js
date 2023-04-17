import React from 'react'
import { useState } from 'react'
function SquareRoot() {
    const [number, setnumber] = useState(4)
    const handleOnChange=(event)=>{
        setnumber(event.target.value)
    }
  return (
    <div>
        <h1>Calculate the Square Root</h1>
        <input value={number} onChange={handleOnChange} placeholder='Insert Number'/>
        <p>{number**0.5}</p> 
    </div>
  )
}

export default SquareRoot
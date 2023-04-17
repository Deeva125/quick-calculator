import React from 'react'
import { useState } from 'react'

function Square() {
    const [number, setnumber] = useState(2)
    const handleOnChange=(event)=>{
      setnumber(event.target.value)
    } 
    return (
    <div>
    <h1>Calculate the Square</h1>
      <input value={number} onChange={handleOnChange} placeholder='Insert Number'/>
      <p>{number*number}</p>
    </div>
  )
}

export default Square
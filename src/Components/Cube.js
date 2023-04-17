import React from 'react'
import { useState } from 'react'

function Cube() {
    const [number, setnumber] = useState(2)
    const handleOnChange=(event)=>{
        setnumber(event.target.value)
    }
  return (
    <div>
        <input placeholder='Insert Number'/>
    </div>
  )
}

export default Cube
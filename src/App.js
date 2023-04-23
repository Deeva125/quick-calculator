import './App.css';
import { useState } from 'react';
function App() {    
  const [number, setNumber] = useState(0)
  const handleChange = (event) =>{
    setNumber(event.target.value)
  }
    return (
    <div className="App">
  <input onChange={handleChange} value={number}/>
  <div>
    <h3>Square</h3>
    <p>{number*number}</p>
  </div>
  <div>
    <h3>Square Root</h3>
    <p>{number**0.5}</p>
  </div>
  <div>
    <h3>Cube</h3>
    <p>{number**3}</p>
  </div>
  <div>
    <h3>Cube Root</h3>
    <p>{number**(1/3)}</p>
  </div>
    </div>
  );
}

export default App;

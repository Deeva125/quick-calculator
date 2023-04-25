import './App.css';
import { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0)
  const handleChange = (event) => {
    setNumber(event.target.value)
  }
  return (
    <div className="App">
      <h1>Quick Calculator</h1>
      <input className='w-75 mt-3' onChange={handleChange} value={number} />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <div class="card w-75 m-auto">
              <div class="card-body">
                <h5 class="card-title">Square</h5>
                <p class="card-text">{number * number}</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card w-75 m-auto">
              <div class="card-body">
                <h5 class="card-title">Square Root</h5>
                <p class="card-text">{number ** 0.5}</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card w-75 m-auto">
              <div class="card-body">
                <h5 class="card-title">Cube</h5>
                <p class="card-text">{number ** 3}</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div class="card w-75 m-auto">
              <div class="card-body">
                <h5 class="card-title">Cube Root</h5>
                <p class="card-text">{number **(1/3)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

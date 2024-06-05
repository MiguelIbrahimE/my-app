import React, { useState } from 'react';
import './App.css';

function App() {
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');
  const [brandRating, setBrandRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="App">
      <div className="App-content">
        <h1>Estimate the Price of the Machine</h1>
        <form className="App-form" onSubmit={handleSubmit}>
          
          <div className="button-group">
            <button type="submit" className="estimate-button">Estimate Laptop Price</button>
            <button type="submit" className="estimate-button">Estimate PC Price</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

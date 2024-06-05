import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App-content">
      <h1>Estimate the Price of the Machine</h1>
      <div className="button-group">
        <Link to="/laptop">
          <button className="estimate-button">Estimate Laptop Price</button>
        </Link>
        <Link to="/pc">
          <button className="estimate-button">Estimate PC Price</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

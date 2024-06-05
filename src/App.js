import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Laptop from './Laptop';
import PC from './PC';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
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
            } 
          />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/pc" element={<PC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

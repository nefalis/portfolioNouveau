import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Route';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={`App ${isOn ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <BrowserRouter>
        <Router isOn={isOn} setIsOn={setIsOn} />
      </BrowserRouter>
    </div>
  );
}

export default App;

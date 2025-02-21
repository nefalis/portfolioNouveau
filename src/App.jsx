import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Route';
import './App.css';

function App() {

  const [isOn, setIsOn] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isOn ? "dark" : "light");
  }, [isOn]);

  return (
    <div className={`App ${isOn ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <BrowserRouter>
        <Router isOn={isOn} setIsOn={setIsOn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
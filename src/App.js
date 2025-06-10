
import './App.css';
import NavBar from './components/NavBar';
import MainBody from './components/MainBody';
import React, { useState } from 'react';

const App = () => {
  const [choice, setChoice] = useState(0);
  
  return (
    <div className="App">

      <NavBar setChoice={setChoice}/>
      <div className="main">
        <MainBody choice={choice} />
      </div>
    </div>
  );
}

export default App;

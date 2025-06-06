
import './App.css';
import NavBar from './components/NavBar';
import Contents from './components/Contents';
import React, { useState } from 'react';

const App = () => {
  const [choice, setChoice] = useState(0);
  return (
    <div className="App">

      <NavBar setChoice={setChoice}/>
      <div className="main">
        <Contents choice={choice} />
      </div>
    </div>
  );
}

export default App;

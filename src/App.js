
import './App.css';
import NavBar from './components/NavBar';
import Random from './components/Random';
import Favorites from './components/Favorites';
import React, { useState } from 'react';

const App = () => {
  const [choice, setChoice] = useState(0);
  return (
    <div className="App">

      <NavBar setChoice={setChoice}/>
      <div className="main">
        { choice === 1 ?  <Favorites /> : <Random  /> }
          
          
      </div>
    </div>
  );
}

export default App;

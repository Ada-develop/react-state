import logo from './logo.svg';
import './App.css';
import CircleSquare from './Components/CircleSquare';
import { useState } from 'react';
import PlusMinus from './Components/PlusMinus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CircleSquare/>

        <PlusMinus/>
      </header>
    </div>
  );
}

export default App;

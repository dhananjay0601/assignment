import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cube from './cube'

function App() {
  const numbers=[1,2,3,4,5];
  return (
    <Cube values={numbers}/>
    
  );
}

export default App;

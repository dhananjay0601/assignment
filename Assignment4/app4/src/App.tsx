import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from './Carsrender'

function App() {
  const cars=['Hyundai','tata',"BMW","Ford"]
  return (
    <Cars values={cars}/>

    
  );
}

export default App;

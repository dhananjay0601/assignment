import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruitslist from './fruitslist'

function App() {
  let fruits=["apple","banana","orange","mango"];
  return (
    <Fruitslist values={fruits}/>
    
  );
}

export default App;
